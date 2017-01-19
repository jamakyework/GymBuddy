var express = require('express');
var path = require('path');
var router = express.Router();
var workoutsImport = require('../models/workouts.js');

router.get('/', function(req, res) {
console.log('workout get hit');
  var homePath = path.join(__dirname, '../public/views/createNewWorkout.html');
  res.sendFile(homePath);
});

router.post('/', function(req, res) {
    console.log('workout post hit');
    console.log(req.body);
    var newItem = workoutsImport(req.body);
    newItem.save();
    res.status( 200).send('post sent');
});

module.exports = router;
