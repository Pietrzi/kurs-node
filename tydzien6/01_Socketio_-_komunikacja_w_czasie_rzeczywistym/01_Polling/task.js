import express from 'express';
import exhbs from 'express-handlebars';

const app = express();
const port = 3000;

// Starting position
const currPos = {
  lat: 7.9869798,
  lon: -79.0823964
};

// Add your MINIMUMS and MAXIMUMS for latitude and longitude here

// Add your setInterval HERE

try {
  const hbs = exhbs.create();

  // Add new engine to ExpressJS
  app.engine('handlebars', hbs.engine);

  // Set chosen view engine
  app.set('view engine', 'handlebars');

  app.use(express.static('public'));

  // Add your ednpoints HERE

  app.listen(port, async () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
} catch (err) {
  console.error('App loading error: ', err);
}


