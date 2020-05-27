// const getBooks = () => {
//   // implement this function to read book catalog from books.json
// };

// const saveBooks = () => {
//   // implement this function to save book catalog to books.json
// };

// module.exports = {
//   getBooks,
//   saveBooks
// }
const fs = require('fs');

const getBooks = (file) => {
  // implement this function to read book catalog from books.json
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf8', function(error, data){
      if(error) reject(error)
      resolve(JSON.parse(data))

    })
  })
};

const saveBooks = (books, book, file, fs) => {
  // implement this function to save book catalog to books.json
  console.warn(books, book);
  const data = {...books, [book.title]: { title: book.title, author: book.author, date: book.date }}

  return new Promise((resolve, reject) => {
    fs.writeFile(file, JSON.stringify(data), function(error){
      if(error) reject(error)
  
      resolve("Zapisano: " + JSON.stringify(data) )
    })
  })
};

module.exports = {
  getBooks, 
  saveBooks
}