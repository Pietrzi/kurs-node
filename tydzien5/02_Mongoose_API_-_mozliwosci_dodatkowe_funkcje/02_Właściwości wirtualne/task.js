import mongoose from 'mongoose';

import { connectToMongoose } from './internals/connect';
import { runAssertions } from './internals/assertions';

(async function () {
  try {
    await connectToMongoose();

    let books; // find() result should be assigned to this property
    let Book; // Book model should be assigned to this property

    // Add all of your code below //////////////////////////////////

    const booksSchema = new mongoose.Schema({
      author: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
      language: {
        type: String,
        required: true,
      },
      pages: {
        type: Number,
        required: true
      },
      title: {
        type: String,
        required: true,
      },
      year: {
        type: Number,
        required: true
      },
      amount: {
        type: Number,
        required: true
      },
      price: {
        type: Number,
        required: true
      }
    });

    booksSchema.virtual('totalStoreValue').get(function() {
      return this.amount * this.price;
    });

    booksSchema.virtual('bookDetails').set(function(value) {
      const splitParts = value.split(' - ');
      this.author = splitParts[0];
      this.title = splitParts[1];
    }).get(function() {
      return `${this.author} - ${this.title}`
    });


    Book = new mongoose.model('Book', booksSchema);

    ////////////////////////////////////////////////////////////////

    await runAssertions(Book, books);
  } catch (err) {
    console.log('Error when running the task: ', err);
  }
})();
