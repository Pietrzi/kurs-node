import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express'; ///, { response } 
import exhbs from 'express-handlebars';
import { Server } from 'http';
import io from 'socket.io';

const app = express();
const port = 3000;

const http = Server(app);
const server = io(http);

// This is an object for tracking guest names
const guests = {};

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

  // Implement your view rendering AND socket handling BELOW
  app.get('/', (req, res) => {
    res.render('room')
  })

  // server.on('connection', socket => {
  //   let user = {id: socket.handshake.query.clientId}

  //   socket.on('joinRoom', (name) => {
  //     if (!guests[user.id]) {

  //     user.name = name

  //     guests[user.id] = user
  //     }

  //   })

  //   console.log(guests)
  // })

  server.on('connection', socket => {
    let user = {id: socket.handshake.query.clientId}
    socket.on('joinRoom', name => {
      if (!guests[user.id]) {
        user.name = name
        guests[user.id] = user
        socket.join('meeting')
        server.to('meeting').emit('users', guests)
      }
    })
    socket.on('disconnect', () => {
      delete guests[user.id]
      socket.emit('users', guests)
    })
  })

  http.listen(port, async () => {
    console.log(`Socket.io server listening at http://localhost:${port}`);
  });
} catch (err) {
  console.error('App loading error: ', err);
}


