import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import exhbs from 'express-handlebars';
import { Server } from 'http';
import io from 'socket.io';

const app = express();
const port = 3000;

const http = Server(app);
const server = io(http);



const clearAnnoyTimers = (prevTimers) => {
  // Clear timeouts here using `clearTimeout` with each of passed timers //////
  for (const timer of prevTimers) {
    clearTimeout(timer);
  }
  ///////////////////////////////
};

const setAnnoyTimers = (connected, prevTimers) => {
  // Add timer creation here (and cleaning the old ones)
  // Return array of new timers
  // Remember to call "emit('annoy')" properly for each timeout! ////////////
  clearAnnoyTimers(prevTimers);

  connected.emit('clear');

  const newTimers = [];

  newTimers.push(setTimeout(() => {
    connected.emit('annoy', `<img src="/doggo.jpg" width="200px;"><h4>Please move your mouse...</h4>`);
  }, 5000));
  newTimers.push(setTimeout(() => {
    connected.emit('annoy', '<img src="/raccoon.jpg" width="200px"><h3>Would you please move your mouse?</h3>');
  }, 10000));
  newTimers.push(setTimeout(() => {
    connected.emit('annoy', '<img src="/cat.jpg" width="200px"><h2>MOVE MOVE MOVE!</h2>');
  }, 20000));

  return newTimers;
  ///////////////////////////////////////////////////////////////////////////
};

const annoy = (socket) => {
  // Implement timers array management here and reacting to `active` and `disconnect` events here ////
  let timers = [];

  socket.on('activity', (data) => {
    console.log('New activity!', data);
    timers = setAnnoyTimers(socket, timers);
  });

  socket.on('disconnect', () => {
    clearAnnoyTimers(timers);
  });
  ///////////////////////
};

try {
  // Add basic middlewares
  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  const hbs = exhbs.create();

  // Add new engine to ExpressJS
  app.engine('handlebars', hbs.engine);

  // Set chosen view engine
  app.set('view engine', 'handlebars');

  app.use(express.static('public'));

  // Add endpoints and socket listener (.on('connection') here //////////////////
  app.get('/', (req, res) => {
    return res.render('activityTracker');
  });

  // Add Socket.io communication
  server.on('connection', (socket) => {
    annoy(socket);
  });
  /////////////////////////////////////////////////////////////////////////////////

  http.listen(port, async() => {
    console.log(`Socket.io server listening at http://localhost:${port}`);
  });
} catch (err) {
  console.error('App loading error: ', err);
}


