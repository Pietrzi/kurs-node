import express from 'express';

import { runAssertions } from './internals/assertions';

const app = express();
const port = 3000;
app.set('view engine', 'ejs');
app.set('views', 'widoki');


try {
  // Add your config here

  app.get('/hello', (req, res) => {
    res.render('hello', { greet: req.query.greet} )
  })

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


// import express from 'express';

// import { runAssertions } from './internals/assertions';

// const app = express();
// const port = 3000;

// try {
//   // Add your config here

//   app.listen(port, async () => {
//     console.log(`Example app listening at http://localhost:${port}`);

//     console.log('Will run assertions...');
//     try {
//       await runAssertions();
//     } catch (err) {
//       console.log('Error when trying to run assertions: ', err);
//     }
//   });
// } catch (err) {
//   console.error('App loading error: ', err);
// }