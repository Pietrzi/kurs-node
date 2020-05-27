// export const getBooks = () => {
//   // implement this function to read book catalog from books.json
// };

// export const saveBooks = () => {
//   // implement this function to save book catalog to books.json
// };


const fs = require('fs');

const getBooks = (books) => {
  // implement this function to read book catalog from books.json
  return books;
};

const saveBooks = (books, book, file, fs) => {
  // implement this function to save book catalog to books.json
  console.warn(books, book);
  const data = {...books, [book.title]: { title: book.title, author: book.author, date: book.date }}

  fs.writeFile(file, JSON.stringify(data), function(error){
    if(error) throw new Error(error)

    console.log("Książka dodana ;)");
  })
};

module.exports = {
  getBooks, 
  saveBooks
}