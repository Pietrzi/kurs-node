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
  console.log('Should emit config for client', clientSocket, config);
};

const sendData = (serverSocket) => {
  console.log('Should emit data for the roomw', serverSocket);
};

try {
  // Add basic middlewares
  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  app.use(express.static('public'));

  server.on('connection', (socket) => {
    console.log('Should handle client context', socket);
  });

  setInterval(() => {
    console.log('Should send data in intervals...');
  }, 5000);

  http.listen(port, async () => {
    console.log(`Socket.io server listening at http://localhost:${port}`);
  });
} catch (err) {
  console.error('App loading error: ', err);
}
