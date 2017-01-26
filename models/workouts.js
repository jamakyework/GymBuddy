var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var workoutSchema = new Schema({
  username: String,
  name: String,
  description: String,
  imageUrl:String,
  exercise: [] //exercise array
});

var workouts = mongoose.model('workouts', workoutSchema);

module.exports = workouts;
