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
const converter = require('./converter.js');
// import { router as calc } from './calc.js';
const calc  = require('./calc.js');

app.use('/calc', calc);

app.use('/toPLN', converter);


////////////////// chudy 1,2,3,4
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

////////////////////////////// chudy end

////////////////////////////// coders 1
const users = Array.from({ length: 20 }, (_, i) => ({
    id: `${i}`,
    email: `user_${i}@gmail.com`,
  }));
  
  app.param('id', (req, res, next, id) => {
    const [user] = users.filter((user) => user.id === id);
    if (user) {
      req.user = user;
      next();
    } else {
      next(new Error('failed to load user'));
    }
  });
  
  app.get('/user/:id', (req, res) => {
    res.send(req.user);
  });
///////////////////////////// coders 2
app.use((err, req, res, next) => {
    res.status(500).send(err.message);
  });
  ///////////////////////////// coders 3
  app.use((req, res, next) => {
    res.status(404).send('Not Found');
  });
/////////////////////////////// coders 4
app.param('id', (req, res, next, id) => {
    const [user] = users.filter((user) => user.id === id);
    if (user) {
      req.user = user;
      req.id = parseInt(id);
      next();
    } else {
      next(new Error('Failed to load user!'));
    }
  });
  
  app.get('/user/info/:id', (req, res, next) => {
    console.log(req.id);
    if (req.id % 2 === 0) {
      res.send('Identyfikator parzysty');
    } else {
      next('route');
    }
  });
  
  app.get('/user/info/:id', (req, res) => {
    res.send('Identyfikator nieparzysty');
  });
///////////////////////////////////////////

app.listen(3000, () => {
  console.log("app listening on port http://localhost:3000");
});