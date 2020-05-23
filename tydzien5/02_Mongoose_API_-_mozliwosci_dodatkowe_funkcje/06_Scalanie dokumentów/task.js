import mongoose from 'mongoose';

import populate from './internals/populate';
import { runAssertions } from './internals/assertions';

(async function () {
  try {
    await populate();

    let students;
    let mappedResults;

    // Add all of your code below ///////////////////////////////////////////

    const examSchema = new mongoose.Schema({
      result: Number,
      timeTaken: Number,
      questionsAnswered: Number
    });
    
    const Exam = mongoose.model('Exam', examSchema);
    
    const studentSchema = new mongoose.Schema({
      exams: [{
        type: mongoose.Schema.ObjectId,
        ref: Exam
      }],
      firstName: String,
      lastName: String,
      year: Number,
      age: Number,
      email: String,
      gender: String
    });
    
    const Student = mongoose.model('Student', studentSchema);

    students = await Student.find({}).populate('exams').exec();
    mappedResults = students && students.map(student => ({
      _id: student._id,
      mean: student.exams.reduce((memo, exam) => { memo += exam.result; return memo;}, 0) / student.exams.length
    }));

    /////////////////////////////////////////////////////////////////////////

    await runAssertions(students, mappedResults);
  } catch (err) {
    console.log('Error when running the task: ', err);
  }
})();
