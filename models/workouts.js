var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var workoutSchema = new Schema({
  name: String,
  description: String,
  imageUrl:String
});

var workouts = mongoose.model('workouts', workoutSchema);

module.exports = workouts;
