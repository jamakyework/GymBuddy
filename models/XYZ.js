var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var exerciseSchema = new Schema({
  username: String,
  name: String,
  description: String,
  imageUrl:String,
  day: String,
  sets: Number,
  repetitions: Number,
  weight: Number,
});

var exercises = mongoose.model('exercises', exerciseSchema);

module.exports = exercises;
