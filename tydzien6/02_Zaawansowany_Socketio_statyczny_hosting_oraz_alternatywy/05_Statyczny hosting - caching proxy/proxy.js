import axios from 'axios';
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';

const app = express();
const port = 3001;

// Use this object to keep cached responses. Do not forget to clear them after 5s!
const cache = {};

// Use these variables in caching code
const CACHE_TIME = 5000;
const SERVER_URL = 'http://localhost:3000';

try {
  // Add basic middlewares
  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  const cacheProxy = async (req, res, next) => {
    // Implement caching behaviour here
  };

  app.use(cacheProxy);

  app.listen(port, async () => {
    console.log(`Server listening at http://localhost:${port}`);
  });
} catch (err) {
  console.error('App loading error: ', err);
}


