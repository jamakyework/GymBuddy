var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var exerciseSchema = new Schema({
  username: String,
  name: String,
  description: String,
  imageUrl:String,
  workout: []
});

var exercises = mongoose.model('exercises', exerciseSchema);

module.exports = exercises;

//will need schema of exercises
