import axios from 'axios';
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';

const app = express();
const port = 3333;

const eventsMap = {
  '*': []
};

try {
  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  app.post('/event', async (req, res) => {
    try {
      const { event, data } = (req.body || {});
      if (!event || !data) {
        return res.status(400).json({ err: 'Missing data!' });
      }

      res.json({ ok: 'ok' });

      const existingEventMap = eventsMap[event] || [];
      const allEventsMap = [...existingEventMap, ...eventsMap['*']];
      const promises = allEventsMap.map(
        (info) => {
          return axios.post(`${info.host}/${info.endpoint}`, {
            event,
            data
          })
        }
      );
      await Promise.all(promises);
    } catch (err) {
      return res.status(500).json({ err });
    }
  });

  app.post('/listen', (req, res) => {
    const { host, endpoint, event } = req.body;

    if (!host || !endpoint || !event) {
      return res.status(400).json({ err: 'Missing input data for creating listener!' })
    }

    console.log(`[EVENTS_PROCESSOR] Registered for ${event}`);

    const existingEventMap = eventsMap[event];
    const configObj = {
      host,
      endpoint
    };
    if (existingEventMap) {
      existingEventMap.push(configObj)
    }

    eventsMap[event] = [configObj];

    return res.json({ ok: 'OK' });
  });

  // 404 supports
  app.use((req, res) => {
    return res.status(404).json({
      message: 'Not found',
      status: 404,
    });
  });

  app.listen(port, async () => {
    console.log(`Events Processor listening at http://localhost:${port}`);
  });
} catch (err) {
  console.error('App loading error: ', err);
}


