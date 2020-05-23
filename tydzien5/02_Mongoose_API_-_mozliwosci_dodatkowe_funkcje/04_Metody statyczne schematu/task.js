import mongoose from 'mongoose';

import { connectToMongoose } from './internals/connect';
import { runAssertions } from './internals/assertions';

(async function () {
  try {
    await connectToMongoose();

    let Book;

    // Add all of your code below ////////////////////////////////

    const bookSchema = new mongoose.Schema({
      author: {
        type: String,
        required: true
      },
      country: {
        type: String,
        required: true
      },
      language: {
        type: String,
        required: true
      },
      links: {
        type: String,
        required: true
      },
      pages: {
        type: Number,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      year: {
        type: Number,
        required: true
      }
    });

    bookSchema.statics.getBooksByPages = function(min, max) {
      const query = this.find().where('pages');
    
      if (min) {
        query.gte(min);
      }
      if (max) {
        query.lte(max);
      }
      return query.exec();
    };

    bookSchema.statics.getRandomBookByYear = async function(year) {
      const query = this.find({ year });
      const books = await query.exec();
      const randomIndex = Math.floor(Math.random() * books.length);
      return books.length >= 1 ? books[randomIndex] : books[1];
    };
    
    bookSchema.statics.getBooksByLanguage = function(language) {
      return this.find({ language }).exec();
    };


    Book = mongoose.model('Book', bookSchema);

    ////////////////////////////////////////////////////////////////////////

    await runAssertions(Book);
  } catch (err) {
    console.log('Error when running the task: ', err);
  }
})();
