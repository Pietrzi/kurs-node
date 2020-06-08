const express = require('express');
const router = require('./routers/books');



const app = express();
const port = 3000;


app.use('/books', books);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
