import mongoose from 'mongoose';

import { runAssertions } from './internals/assertions';

(async function () {
  try {
    let stockTransactionSchema;

    // Put your schema here /////////////////////

    const roundToTwoDecimals = val => Math.round(val * 100) / 100;

stockTransactionSchema = new mongoose.Schema({
  price: {
    type: Number,
    required: true,
    get: (val) => roundToTwoDecimals(val),
    set: (val) => roundToTwoDecimals(val)
  },
  amount: {
    type: Number,
    required: true
  },
  market: {
    type: String,
    required: true
  },
  symbol: {
    type: String,
    required: true
  },
  industry: {
    type: String,
    required: true
  }
});

    ////////////////////////////////////////////

    await runAssertions(stockTransactionSchema);
  } catch (err) {
    console.log('Error when running the task: ', err);
  }
})();
