const fs = require('fs');
const path = require('path');

const getBooks = async () => {
    return JSON.parse(
        await fs.promises.readFile(
          path.resolve('data_storage/books.json'),
          'utf-8',
        ),
      );
};

const saveBooks = async (data) => {
    await fs.promises.writeFile(
        path.resolve('data_storage/books.json'),
        JSON.stringify(data),
      );
};

module.exports = {
    getBooks,
    saveBooks
}