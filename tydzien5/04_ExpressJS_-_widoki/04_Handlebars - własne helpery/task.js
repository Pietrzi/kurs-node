import express from 'express';
import exhbs from 'express-handlebars';

import { runAssertions } from './internals/assertions';

const app = express();
const port = 3000;

try {
  // Add your config here
  const hbs = exhbs.create({
    helpers: {
      // Add your helpers here
    }
  });

  // Add new engine to ExpressJS
  app.engine('handlebars', hbs.engine);

  // Set chosen view engine
  app.set('view engine', 'handlebars');

  // Add your GET here, use this data:
  app.get('/helpers', (req, res) => {
    res.render('helpers', {
      toBeItalic: 'I should <be> italic',
      toBeFramed: 'I should <be> in the frame',
      toBeItalicWithFrame: 'I should <be> italic in the frame'
    });
  });

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


