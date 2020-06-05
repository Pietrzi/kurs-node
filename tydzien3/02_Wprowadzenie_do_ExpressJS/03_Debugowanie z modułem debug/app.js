import express from 'express';
import debug from 'debug';

const app = express();
const debugMyApp = debug('app');
// you can create different spaces to be logged
// and only display ones that interests you at the moment
// with debug('app'), debug('some'), debug('other')

app.get('/', function(req, res) {
  debugMyApp('Hello world!');
  res.send('Hello world!');
});

app.get('/test', function(req, res) {
  debugMyApp('Hello world from GET /test!');
  res.send('Hello world from GET /test!');
});

app.post('/test', function(req, res) {
  debugMyApp('Hello world from POST /test!');
  res.send('Hello world from POST /test!');
});

app.put('/test', function(req, res) {
  debugMyApp('Hello world from PUT /test!');
  res.send('Hello world from PUT /test!');
});

app.delete('/test', function(req, res) {
  debugMyApp('Hello world from DELETE /test!');
  res.send('Hello world from DELETE /test!');
});

app.get('/about', function(req, res) {
  debugMyApp('Hello world from GET /about!');
  res.send('Hello world from GET /about!');
});

app.post('/whatever', function(req, res) {
  debugMyApp('Hello world from POST /whatever!');
  res.send('Hello world from POST /whatever!');
});

app.put('/something', function(req, res) {
  debugMyApp('Hello world from PUT /something!');
  res.send('Hello world from PUT /something!');
});

app.delete('/nothing', function(req, res) {
  debugMyApp('Hello world from DELETE /nothing!');
  res.send('Hello world from DELETE /nothing!');
});

app.listen(3000, function() {
  debugMyApp('Listening on port 3000'); // You can log every data with debug module
});