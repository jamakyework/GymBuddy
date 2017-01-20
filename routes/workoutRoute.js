var express = require('express');
var path = require('path');
var router = express.Router();
var workoutImport = require('../models/workouts.js');

router.get('/', function(req, res) {
    console.log('workout get db');
    workoutImport.find().then(function(data) {
      console.log("data", data);
        res.send(data);
    });
});

router.post('/', function(req, res) {
    console.log('workout post hit');
    console.log('req.body:', req.body);
    var newWorkout = workoutImport(req.body);
    newWorkout.save();
    res.status(200).send('post sent');
});

module.exports = router;
