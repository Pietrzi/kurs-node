import express from 'express';
import fs from 'fs';
import haml from 'hamljs';

import { runAssertions } from './internals/assertions';
import initEngines from './internals/initEngines';

const app = express();
const port = 3000;

// app.set('view engine', 'ejs');
// app.set('view engine', 'pug');
// app.set('view engine', 'handlebars');
// app.set('view engine', 'haml');

try {
  initEngines(app);

  // Use this data
  const data = {
    greeting: 'YOUR_NAME_HERE',
    list: ["First Elt", "Second Elt", "Third Elt"]
  };

  // Add your routes with rendering here

  app.get('/pug', (req, res) => {
    res.render('comparison.pug', data);
  });

  app.get('/hbs', (req, res) => {
    res.render('comparison.handlebars', data);
  });

  app.get('/haml', (req, res) => {
    const hamlView = fs.readFileSync('views/comparison.haml', 'utf8');
    res.end( haml.render(hamlView, {locals: data}) );
  });

  app.get('/ejs', (req, res) => {
    res.render('comparison.ejs', data);
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


