var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var workoutSchema = new Schema({
  name: {type: String, required: true, unique: true},
  description: {type: String, required: true},
  imageUrl:{type: String, required: false}
});


var workouts = mongoose.model('workouts', workoutSchema);
module.exports = workouts;
