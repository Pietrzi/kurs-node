const express = require('express');

const app = express();

/////////////////////////////////////////////////////// 1
const getBooks = async () => {
    return JSON.parse(
      await fs.promises.readFile(path.resolve('./data/books.json')),
    );
  };
  
  app.get('/books', async (req, res, next) => {
    try {
      const books = await getBooks();
      res.json(books);
    } catch (err) {
      next(err);
    }
  });
/////////////////////////////////////////////////////// 2
// app.get('/books/:isbn', async (req, res, next) => {
//     try {
//       const books = await getBooks();
//       const [book] = books.filter((book) => book.isbn === req.params.isbn);
  
//       if (!book) {
//         //res.status(409);
//         throw new Error('No book found!');
//       } else {
//         res.json(book);
//       }
//     } catch (err) {
//       next(err);
//     }
//   });
/////////////////////////////////////////////////////// 3
app.get('/books/:isbn', async (req, res, next) => {
    try {
      const books = await getBooks();
      const [book] = books.filter((book) => book.isbn === req.params.isbn);
  
      if (!book) {
        const err = new Error('No book found!');
        res.status(409);
        next(err);
      } else {
        res.json(book);
      }
    } catch (err) {
      next(err);
    }
  });

  app.use((err, req, res, next) => {
    const error = { message: err.message };
    res.json(error);
  });
/////////////////////////////////////////////////////// 4
// app.use(express.urlencoded({ extended: true }));

// app.post('/books/:isbn', async function(req, res, next) {
//   try {
//     const books = await getBooks();
//     const [book] = books.filter((book) => book.isbn === req.params.isbn);
//     if (book) {
//       const err = new Error('Book is already on the list!');
//       res.status(409);
//       next(err);
//     } else {
//       books.push(req.body);
//       await fs.promises.writeFile('./data/books.json', JSON.stringify(books));
//       res.json(await getBooks());
//     }
//   } catch (err) {
//     next(err);
//   }
// });
/////////////////////////////////////////////////////// 5
app.use(express.json());

app.post('/books/:isbn', async function(req, res, next) {
  try {
    const books = await getBooks();
    const [book] = books.filter((book) => book.isbn === req.params.isbn);
    if (book) {
      const err = new Error('Book is already on the list!');
      res.status(409);
      next(err);
    } else {
      books.push(req.body);
      await fs.promises.writeFile('./data/books.json', JSON.stringify(books));
      res.json(await getBooks());
    }
  } catch (err) {
    next(err);
  }
});
/////////////////////////////////////////////////////// 6
app.put('/books/:isbn', async function(req, res, next) {
    try {
      const books = await getBooks();
      const bookIndex = books.findIndex((book) => book.isbn === req.params.isbn);
      if (bookIndex === -1) {
        const err = new Error('Book is not on the list!');
        res.status(409);
        next(err);
      } else {
        const updatedBook = { ...books[bookIndex], ...req.body };
        const updatedBooks = [
          ...books.slice(0, bookIndex),
          updatedBook,
          ...books.slice(bookIndex + 1),
        ];
        await fs.promises.writeFile(
          './data/books.json',
          JSON.stringify(updatedBooks),
        );
        res.json(await getBooks());
      }
    } catch (err) {
      next(err);
    }
});
///////////////////////////////////////////////////////

///////////////////////////////////////////////////////

app.listen(3000, function() {
  console.log('Listening on port 3000');
});