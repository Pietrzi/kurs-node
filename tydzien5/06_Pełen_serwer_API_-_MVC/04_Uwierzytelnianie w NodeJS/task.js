import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import exhbs from 'express-handlebars';
import flash from 'connect-flash';
import passport from 'passport';
import PassportLocal from 'passport-local';
import session from 'express-session';

const { Strategy: LocalStrategy } = PassportLocal;

const app = express();
const port = 3000;

const USER_MOCK = {
  _id: '123123123123123123',
  name: 'John Kowalsky',
  email: 'jan@kowalsky.com'
};

// Just for demonstration purposes - we keep it as a plain text. NEVER do it in production environments
const USER_PASSWORD_MOCK = 'jkjkjk123';

try {
  // Add your config here
  const hbs = exhbs.create();

  // Add new engine to ExpressJS
  app.engine('handlebars', hbs.engine);

  // Set chosen view engine
  app.set('view engine', 'handlebars');

  // Standard middlewares
  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(flash());

  app.listen(port, async () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
} catch (err) {
  console.error('App loading error: ', err);
}


