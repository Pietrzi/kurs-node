import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import exhbs from 'express-handlebars';

const app = express();
const port = 3000;

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

  app.get('/', (req, res) => res.render('hello', { message: `Hello World! ${new Date().toISOString()}`}));

  app.listen(port, async () => {
    console.log(`Server listening at http://localhost:${port}`);
  });
} catch (err) {
  console.error('App loading error: ', err);
}


