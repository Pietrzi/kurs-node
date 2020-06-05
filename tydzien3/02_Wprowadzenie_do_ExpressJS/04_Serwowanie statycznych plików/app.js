// zadanie 1

const express = require('express');
const path = require('path');

// const app = express();

// app.get('/', function(req, res) {
//   res.sendFile(path.join(__dirname, './index.html'));
//   //res.sendFile(path.resolve('./index.html'));
// });

// app.listen(3000, function() {
//   console.log('Listening on port 3000');
// });

// zadanie 2

// const express = require('express');
// import express from 'express';
// import path from 'path';

const app = express();
app.use(express.static('public'));

app.get('/', function(req, res) {
  res.send('Hello world!');
});

app.get('/test', function(req, res) {
    res.send('Hello world!');
  });

app.listen(3000, function() {
  console.log('Listening on port 3000');
});