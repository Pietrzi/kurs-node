import mongoose from 'mongoose';

import { connectToMongoose } from './internals/connect';
import { runAssertions } from './internals/assertions';

(async function () {
  try {
    await connectToMongoose();

    let tomato;

    // Add all of your code below

    const ingredientSchema = new mongoose.Schema({
      Name: {
        type: String,
        required: true
      },
      Calories: {
        type: Number,
        required: true
      },
      CookingTime: {
        type: Number,
        required: true
      },
      Tags: [new mongoose.Schema({
        Tag: String
      })],
      Portions: new mongoose.Schema({
        SMALL: {
          type: Number,
          required: true,
          min: 1
        },
        MEDIUM: {
          type: Number,
          required: true,
          min: 1
        },
        LARGE: {
          type: Number,
          required: true,
          min: 1
        },
      }),
      FlavorValues: {
        type: new mongoose.Schema({
          SOUR: Number,
          SALT: Number,
          ACID: Number,
          SWEET: Number,
          FAT: Number,
          UMAMI: Number
        }),
        default: {
          SOUR: 0,
          SALT: 0,
          ACID: 0,
          SWEET: 0,
          FAT: 0,
          UMAMI: 0
        }
      }
    });

    await runAssertions(tomato);
  } catch (err) {
    console.log('Error when running the task: ', err);
    console.assert(!err, 'Should not trigger error handler!', err);
  }
})();
