import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';

const app = express();
const port = 3000;

const slowGetUser = (id) => new Promise(resolve => {
  setTimeout(() => {
    if (id === '123123123123123123123123') {
      return resolve({
        _id: '123123123123123123123123',
        name: 'Carla Mercedes Benzbrown',
        email: 'carlamb@gmail.com',
        active: true
      })
    }

    return resolve(null);
  }, 1500);
});

try {
  // Add basic middlewares
  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  app.get('/user', async (req, res) => {
    const user = await slowGetUser(req.query.id);
    return res.json({ user });
  });

  app.listen(port, async () => {
    console.log(`Server listening at http://localhost:${port}`);
  });
} catch (err) {
  console.error('App loading error: ', err);
}


