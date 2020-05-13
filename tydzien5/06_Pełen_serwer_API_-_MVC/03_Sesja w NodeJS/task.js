import express from 'express';
import exhbs from 'express-handlebars';
import session from 'express-session';

import { runAssertions } from './internals/assertions';

const app = express();
const port = 3000;

try {
  // Add your config here
  const hbs = exhbs.create();

  // Add new engine to ExpressJS
  app.engine('handlebars', hbs.engine);

  // Set chosen view engine
  app.set('view engine', 'handlebars');

  app.use(express.static('public'));

  // Add your session and endpoints below

  app.listen(port, async () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
} catch (err) {
  console.error('App loading error: ', err);
}


