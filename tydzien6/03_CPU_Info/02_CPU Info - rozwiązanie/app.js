import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import { Server } from 'http';
import os from 'os';
import io from 'socket.io';

const app = express();
const port = 3000;

const http = Server(app);
const server = io(http);

const sendConfig = (clientSocket, config) => {
  clientSocket.emit('config', config);
};

const sendData = (serverSocket) => {
  // General stats
  const uptime = new Date(0);
  uptime.setSeconds(os.uptime());
  const general = {
    arch: os.arch(),
    hostname: os.hostname(),
    platform: os.platform(),
    type: os.type(),
    uptime: `${uptime.getUTCDate()}d ${uptime.toLocaleTimeString()}`,
  };

  serverSocket.to('general').emit('data', { general });

  // CPU info
  const summedCPULoads = os.cpus().reduce(
    (memo, cpuData) => {
      const totalCore = Object.values(cpuData.times).reduce(
        (coreMemo, val) => coreMemo + val,
        0
      );

      return {
        main:
          memo.main +
          cpuData.times.user +
          cpuData.times.sys +
          cpuData.times.irq,
        total: memo.total + totalCore,
      };
    },
    { total: 0, main: 0 }
  );

  const totalLoad = Math.round((summedCPULoads.main / summedCPULoads.total) * 100);
  serverSocket.to('cpu').emit('data', { cpu: totalLoad });

  // MEM
  const availableMem = (os.totalmem() - os.freemem()) / os.totalmem();
  const availableMemInMB = Math.round(availableMem * 100);

  serverSocket.to('mem').emit('data', { mem: availableMemInMB });
};

try {
  // Add basic middlewares
  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  app.use(express.static('public'));

  server.on('connection', (socket) => {
    // One - time config for the user
    const config = {
      mem: {
        title: 'Memory usage',
        selected: false,
      },
      cpu: {
        title: 'CPU usage',
        selected: false,
      },
    };

    socket.join('general');

    sendConfig(socket, config);
    sendData(server);

    socket.on('join', (data) => {
      socket.join(data);
      config[data].selected = true;

      sendConfig(socket, config);
      sendData(server);
    });

    socket.on('leave', (data) => {
      socket.leave(data);
      config[data].selected = false;

      sendConfig(socket, config);
      sendData(server);
    });

    socket.on('disconnect', () => {
      socket.leave('general');
    });
  });

  setInterval(() => {
    sendData(server);
  }, 5000);

  http.listen(port, async () => {
    console.log(`Socket.io server listening at http://localhost:${port}`);
  });
} catch (err) {
  console.error('App loading error: ', err);
}
