import express from 'express';

import { runAssertions } from './internals/assertions';
import initEngines from './internals/initEngines';

const app = express();
const port = 3000;

try {
  initEngines(app);

  // Use this data
  const data = {
    greeting: 'YOUR_NAME_HERE',
    list: ["First Elt", "Second Elt", "Third Elt"]
  };

  // Add your routes with rendering here

  app.listen(port, async () => {
    console.log(`Example app listening at http://localhost:${port}`);

    console.log('Will run assertions...');
    try {
      await runAssertions();
    } catch (err) {
      console.log('Error when trying to run assertions: ', err);
    }
  });
} catch (err) {
  console.error('App loading error: ', err);
}


