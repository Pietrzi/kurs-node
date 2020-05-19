import bodyParser from 'body-parser';
import cors from 'cors';
import { EventEmitter } from 'events';
import express from 'express';
import exhbs from 'express-handlebars';
import randomstring from 'randomstring';

const { generate } = randomstring;

const app = express();
const port = 3000;

const runningTimers = {};

const getTimer = (time = 30) => {
  // Implement emitter behaviour HERE
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

  // Implement logic of both endpoints BELOW
  app.get('/', (req, res) => {
  });

  app.post('/timer', (req, res) => {
  });

  app.listen(port, async () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
} catch (err) {
  console.error('App loading error: ', err);
}


