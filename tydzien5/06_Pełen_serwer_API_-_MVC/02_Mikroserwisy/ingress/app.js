import axios from 'axios';
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import exhbs from 'express-handlebars';

const app = express();
const port = 8080;

try {
  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  // Add your config here
  const hbs = exhbs.create();

  // Add new engine to ExpressJS
  app.engine('handlebars', hbs.engine);

  // Set chosen view engine
  app.set('view engine', 'handlebars');

  app.use(express.static('public'));

  app.get('/', async (req, res) => {
    return res.render('add-user');
  });

  app.post('/add-user', async (req, res) => {
    await axios.post('http://localhost:3333/event', {
      event: 'add-user',
      data: req.body,
    });

    return res.json({ ok: 'ok' });
  });

  // 404 supports
  app.use((req, res) => {
    res.status(404).json({
      message: 'Not found',
      status: 404,
    });
  });

  app.listen(port, async () => {
    console.log(`Ingress listening at http://localhost:${port}`);
  });
} catch (err) {
  console.error('App loading error: ', err);
}


