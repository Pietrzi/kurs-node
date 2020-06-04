import express from 'express';
import exhbs from 'express-handlebars';
import os from 'os';

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

  // ADD YOUR PUBLIC DIRECTORY CONFIGURATION HERE! /////////////////
  app.use(express.static('public'));

  // Add your GET here, use this data:
  app.get('/ssr', (req, res) => {
    res.render('ssr', {
      // Add your variables here //////////////////
      currDate: new Date().toISOString(),
      cpu: os.cpus()[0].model,
      arch: os.arch()
      //////////////////////////////////////////////
    });
  });

  app.listen(port, async () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
} catch (err) {
  console.error('App loading error: ', err);
}


