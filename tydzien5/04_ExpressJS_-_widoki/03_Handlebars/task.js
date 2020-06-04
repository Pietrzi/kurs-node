import express from 'express';
import exhbs from 'express-handlebars';

import data from './internals/data';
import { runAssertions } from './internals/assertions';

const app = express();
const port = 3000;

try {
  // Add your config here ////////////

  const hbs = exhbs.create();

  app.engine('handlebars', hbs.engine);

  app.set('view engine', 'handlebars');

  app.get('/results', (req, res) => {
    res.render('results', data);
    });
  ///////////////////////////////////////

  app.listen(port, async () => {
    console.log(`Example app listening at http://localhost:${port}`);

    console.log('Will run assertions...');
    try {
      await runAssertions();
    } catch (err) {
      console.log('Error when trying to run assertions: ', err);
    }
  });
} catch (err) {
  console.error('App loading error: ', err);
}


