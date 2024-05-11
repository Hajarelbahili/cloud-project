const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'A task must have a title'],
      unique: true,
      trim: true,
      
    },
    slug: String,
    date: {
      type: Date,
      required: [true, 'A task must have a date']
    },
    description: {
      type: String,
      trim: true,
    },
    image: {
      type: String,
      required: [true, 'A task must have an image']
    },
    createdAt: {
      type: Date,
      default: Date.now()
    }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);



// You can add additional middleware or virtual properties as needed.

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
