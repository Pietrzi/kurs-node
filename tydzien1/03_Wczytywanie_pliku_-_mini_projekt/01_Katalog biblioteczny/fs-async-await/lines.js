//index.js
const program = require( 'commander' );
const inquirer = require( 'inquirer' );
const  newBookPrompt = require('./prompt.js');
const  { saveBooks, getBooks } = require('./booksAPI.js');
const fs = require('fs');
const { prompt } = inquirer;

program.version('1.0.0').description('Our first and awesome books catalog');


//Zacznij od przeczytania pliku z książkami

(async () => {

    const books = await getBooks('./books.json');
  
    console.log(newBookPrompt, books)
  
    program
      .command('add')
      .alias('a')
      .description('adds new book to the catalog')
      .action(() => {
        prompt(newBookPrompt).then(({ title, author, date }) => {
          console.log(title, author, date);
          // Add your solutions here
  
          saveBooks(books, { title, author, date }, './books.json', fs); //Zapisz książki
  
        });
      });
    
    program
      .command('get')
      .alias('g')
      .description('get book details')
      .action(() => {
        prompt([
          {
            type: 'list',
            name: 'selected',
            message: 'Choose a book',
            choices: Object.keys(books) // Podaj książki jako opcje do wyboru
          },
        ]).then(({ selected }) => {
          console.log(selected);
          // Add your solutions here
  
          console.warn("Wybrałem: ", selected)
        });
      });
    
    program.parse(process.argv);

})()
//booksApi.jsconst fs = require('fs')

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



///////////////////////





//books.js
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
  //index.js
  const program = require( 'commander' );
  const inquirer = require( 'inquirer' );
  const  newBookPrompt = require('./prompt.js');
  const  { saveBooks, getBooks } = require('./booksAPI.js');
  const fs = require('fs');
  const { prompt } = inquirer;
  
  program.version('1.0.0').description('Our first and awesome books catalog');
  
  
  //Zacznij od przeczytania pliku z książkami
  fs.readFile('./books.json', 'utf8', function(error, data){
  
    if(error) throw new Error(error)
  
    //Weź książki z pliku
    const books = getBooks(JSON.parse(data));
  
    console.log(newBookPrompt)
  
    program
      .command('add')
      .alias('a')
      .description('adds new book to the catalog')
      .action(() => {
        prompt(newBookPrompt).then(({ title, author, date }) => {
          console.log(title, author, date);
          // Add your solutions here
  
          saveBooks(books, { title, author, date }, './books.json', fs); //Zapisz książki
  
        });
      });
    
    program
      .command('get')
      .alias('g')
      .description('get book details')
      .action(() => {
        prompt([
          {
            type: 'list',
            name: 'selected',
            message: 'Choose a book',
            choices: Object.keys(books) // Podaj książki jako opcje do wyboru
          },
        ]).then(({ selected }) => {
          console.log(selected);
          // Add your solutions here
  
          console.warn("Wybrałem: ", selected)
        });
      });
    
    program.parse(process.argv);
  });