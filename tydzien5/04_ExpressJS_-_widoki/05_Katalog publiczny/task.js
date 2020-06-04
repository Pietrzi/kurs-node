import express from 'express';
import hbs from 'express-handlebars'

//import { runAssertions } from './internals/assertions';

const app = express();
const port = 3000;

try {
  // Add public directory access here ///////
  app.use(express.static('public'));
  // Add your config here //////////
  app.engine('handlebars', hbs());
  app.set('view engine', 'handlebars');
  
  app.get('/rothko', (req, res) => {
    return res.render('rothko');
  });
  /////////////////////////////////

  app.listen(port, async () => {
    console.log(`Example app listening at http://localhost:${port}`);

    console.log('Will run assertions...');
    try {
      //await runAssertions();
    } catch (err) {
      console.log('Error when trying to run assertions: ', err);
    }
  });
} catch (err) {
  console.error('App loading error: ', err);
}


