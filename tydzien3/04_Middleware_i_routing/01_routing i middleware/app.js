// const express = require('express');
// const { converter } = require('./converter.js');
// //import { router as converter } from './converter.js';

// const app = express();
// app.use('/toPLN', converter);

// app.use((req, res, next) => {
//   res.status(404).send('Not Found');
// });

// app.listen(3000, () => {
//   console.log('Listening on port 3000');
// });
const express = require("express");
const app = express();
const { converter } = require('./converter.js');

app.use('/toPLN', converter);

const users = [
  {
    id: 1,
    email: "asd@asd.pl",
  },
  {
    id: 2,
    email: "zxc@zxc.pl",
  },
  {
    id: 3,
    email: "fxc@zxc.pl",
  },
];

app.param("id", (req, res, next, id) => {
  const user = users.find((user) => user.id == id);
  if (!user) {
    next(new Error("user not found"));
  }
  req.user = user;
  next();
});

app.param("id", (req, res, next, id) => {
  console.log(id);
  console.log(isNaN(Number(id)));
  if (isNaN(Number(id))) {
    next(new Error("param is not a number"));
  }
  next();
});

app.get("/user/info/:id", (req, res) => {
  if (Number(req.params.id) % 2 === 0) {
    res.end("Użytkownik parzysty");
  }
  res.end("Użytkownik nieparzysty");
});

app.get("/user/:id", (req, res) => {
  res.end(req.user.email);
});

app.get(/.*/, (req, res) => {
  res.status(404);
  console.log("page not found", res.statusCode);
  res.end();
});

app.listen(3000, () => {
  console.log("app listening on port http://localhost:3000");
});