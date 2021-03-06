// const program = require('commander');
// const inquirer = require('inquirer');
// const { newBookPrompt } = require('./prompt.js');
// const { saveBooks, getBooks }= require( './booksAPI.js');
// const { prompt } = inquirer;

// program.version('1.0.0').description('Our first and awesome books catalog');


// console.warn("At least works")

// program
//   .command('add')
//   .alias('a')
//   .description('adds new book to the catalog')
//   .action(() => {
//     prompt(newBookPrompt).then(({ title, author, date }) => {
//       console.log(title, author, date);
//       // Add your solutions here
//     });
//   });

// program
//   .command('get')
//   .alias('g')
//   .description('get book details')
//   .action(() => {
//     prompt([
//       {
//         type: 'list',
//         name: 'selected',
//         message: 'Choose a book',
//         choices: ['book1', 'book2', 'book3'], // change this to display cataloged books
//         // choices: Object.keys(books)
//       },
//     ]).then(({ selected }) => {
//       console.log(selected);
//       // Add your solutions here
//     });
//   });

// program.parse(process.argv);


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
  
    program
      .command('add')
      .alias('a')
      .description('adds new book to the catalog')
      .action(() => {
        prompt(newBookPrompt).then(({ title, author, date }) => {
          console.log(title, author, date);
          // Add your solutions here
  
          //saveBooks(books, { title, author, date }, './books.json', fs); //Zapisz książki
  
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