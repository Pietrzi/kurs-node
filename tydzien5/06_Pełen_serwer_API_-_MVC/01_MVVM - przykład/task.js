import express from 'express';
import os from 'os';

const app = express();
const port = 3000;

try {
  app.use(express.static('public'));

  app.get('/cpu-stats', (req, res) => {
    return res.json({
      cpu: os.cpus()[0],
      arch: os.arch(),
      hostname: os.hostname(),
      totalMem: os.totalmem()
    })
  });

  app.listen(port, async () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
} catch (err) {
  console.error('App loading error: ', err);
}


