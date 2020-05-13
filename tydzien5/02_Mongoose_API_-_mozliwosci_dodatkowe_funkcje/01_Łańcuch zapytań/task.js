import mongoose from "mongoose";

import { connectToMongoose } from "./internals/connect";
import { runAssertions } from "./internals/assertions";

(async function () {
  try {
    await connectToMongoose();

    const Ticket = new mongoose.Schema({
      eventName: String,
      price: Number,
      amount: Number,
      date: Date,
    });

    const tickets = new mongoose.model("Tickets", Ticket);

    let data;

    // Add all of your code below
    data = await tickets
    .where('date').gte(new Date(2021, 3, 15)).lte(new Date(2021, 7, 20))
    .where('price').gt(140)
    .find()
    .exec();

    console.log(data);

    await runAssertions(data);
  } catch (err) {
    console.log("Error when running the task: ", err);
  }
})();