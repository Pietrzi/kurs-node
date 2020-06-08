const express = require('express');
const bodyParser = require('body-parser');
const { getBooks, saveBooks } = require('../utils/utils');

const router = express.Router();

const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get('/', async (req, res, next) => {
    try {
      const books = await getBooks();
      res.json(books);
    } catch (err) {
      res.status(500);
      next(err);
    }
});

router.use((err, req, res, next) => {
    const error = { status: res.statusCode, error: err.message };
    res.send(error);
});

router.param('id', async (req, res, next, id) => {
    try {
      const books = await getBooks();
  
      const book = books.find((book) => book.id === id);
      const index = books.indexOf(book);
  
      if (book && ['PUT', 'DELETE'].includes(req.method)) {
        req.index = index;
        req.book = book;
        next();
      } else if (!book && ['PUT', 'DELETE'].includes(req.method)) {
        res.status(409);
        throw new Error('No such book exist!');
      } else if (book && 'POST' === req.method) {
        res.status(409);
        throw new Error('Book already exists!');
      } else {
        next();
      }
    } catch (err) {
      next(err);
    }
  });
  
  router.put('/:id', urlencodedParser, async (req, res, next) => {
    // urlencodedParser added here
    try {
      const books = await getBooks();
      const book = { ...req.book, ...req.body };
      const newBooks = [
        ...books.slice(0, req.index),
        book,
        ...books.slice(req.index + 1),
      ];
      saveBooks(newBooks);
      res.json(newBooks);
    } catch (err) {
      res.status(409);
      next(err);
    }
  });
  
  router.post('/:id', jsonParser, async (req, res, next) => {
    // jsonParser added here
    try {
      const books = await getBooks();
      const newBooks = [...books];
      newBooks.push(req.body);
      saveBooks(newBooks);
      res.json(newBooks);
    } catch (err) {
      res.status(409);
      next(err);
    }
  });
  
  router.delete('/:id', async (req, res, next) => {
    try {
      const books = await getBooks();
      const newBooks = [
        ...books.slice(0, req.index),
        ...books.slice(req.index + 1),
      ];
      saveBooks(newBooks);
      res.json(newBooks);
    } catch (err) {
      res.status(409);
      next(err);
    }
  });