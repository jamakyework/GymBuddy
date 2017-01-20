var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var exerciseSchema = new Schema({
  name: String,
  description: String,
  imageUrl:String
});

var exercises = mongoose.model('exercises', exerciseSchema);

module.exports = exercises;

//will need schema of exercises
