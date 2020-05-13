import axios from 'axios';
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';

const app = express();
const port = 3002;

const eventsMap = {
  '*': []
};

(async function() {
  try {
    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    // Add logger listener
    app.post('/add-user', (req, res) => {
      // Simulating "add user"
      setTimeout(async () => {
        await axios.post('http://localhost:3333/event', {
          event: 'add-user-success',
          data: req.body.data
        });
        return res.json({ ok: 'ok' });
      }, 2000);
    });

    // 404 supports
    app.use((req, res) => {
      return res.status(404).json({
        message: 'Not found',
        status: 404,
      });
    });

    // Listen to all the events
    await axios.post('http://localhost:3333/listen', {
      host: `http://localhost:${port}`,
      endpoint: 'add-user',
      event: 'add-user'
    });

    app.listen(port, async () => {
      console.log(`Events Processor listening at http://localhost:${port}`);
    });
  } catch (err) {
    console.error('App loading error: ', err);
  }
})();


