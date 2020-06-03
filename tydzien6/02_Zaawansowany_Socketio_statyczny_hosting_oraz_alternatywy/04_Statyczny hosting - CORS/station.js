import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';

const app = express();
const port = 3000;

try {
  // Add middlewares HERE
  // Don't forget about bodyParser and CORS!

  // Add your `POST /message` endpoint below /////////////////////
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(cors({
    origin: 'http://localhost:3001'
  }));

  app.post('/message', (req, res) => {
    res.json({ message: `${req.body.message} \n Roger, sending help!` });
    });
  ///////////////////////////////////////////////////

  app.listen(port, async () => {
    console.log(`Server listening at http://localhost:${port}`);
  });
} catch (err) {
  console.error('App loading error: ', err);
}


