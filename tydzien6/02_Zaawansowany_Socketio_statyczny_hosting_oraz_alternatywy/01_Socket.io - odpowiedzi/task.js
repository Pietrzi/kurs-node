import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import exhbs from 'express-handlebars';
import { Server } from 'http';
import io from 'socket.io';

const app = express();
const port = 3000;

const http = Server(app);
const server = io(http);

try {
  // Add basic middlewares
  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  const hbs = exhbs.create();

  // Add new engine to ExpressJS
  app.engine('handlebars', hbs.engine);

  // Set chosen view engine
  app.set('view engine', 'handlebars');

  app.use(express.static('public'));

  // Implement your code BELOW
  app.get("/", (req, res) => {
    res.render("responseTester");
  });

  server.on("connection", (socket => {
    socket.on("messageName", (value) => {
      if (value % 2 ===0) {
        socket.emit("foobar", "foo")
      } else {
        socket.emit("foobar", "bar")
      }
    })
  }))

  http.listen(port, async() => {
    console.log(`Socket.io server listening at http://localhost:${port}`);
  });
} catch (err) {
  console.error('App loading error: ', err);
}


