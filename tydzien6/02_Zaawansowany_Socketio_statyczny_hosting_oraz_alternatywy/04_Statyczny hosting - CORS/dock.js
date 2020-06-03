import express from 'express';

const app = express();
const port = 3001;

// Add ExpressJS app here that will be statically hosting `public` directory on port 3001 ////////////


try {

    app.use(express.static('public'));

    app.listen(port, async () => {
      console.log(`Server listening at http://localhost:${port}`);
    });
  } catch (err) {
    console.error('App loading error: ', err);
  }