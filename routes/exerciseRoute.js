var express = require('express');
var path = require('path');
var router = express.Router();
var exerciseImport = require('../models/exercises.js');
var workoutImport = require('../models/workouts.js');
var checkAuthImport = require("./checkAuth.js");

router.get('/exercise', checkAuthImport, function(req, res) {
    console.log('exercise get html');
var exercisePath = path.join(__dirname, '../public/views/createNewExercise.html');
    res.sendFile(exercisePath);
});


router.get('/viewExercise', checkAuthImport, function(req, res) {
    console.log('view Exercise html');
var selectExercise = path.join(__dirname, '../public/views/viewExercise.html');
    res.sendFile(selectExercise);
});

router.get('/getExercise', function(req, res) {
    console.log('exercise get hit db');
    exerciseImport.find({username: req.user.username}).then(function(data) {
      console.log("data", data);
        res.send(data);
    });
});

router.get('/getExercise/:id', function(req, res) {
    console.log('exercise get db');
    exerciseImport.find({_id:req.params.id}).then(function(data) {
      console.log("req.params.id:", {_id:req.params.id});
      console.log("data:", data);
        res.send(data);
    });
});

router.post('/addExercise', function(req, res) {
    console.log('exercise post hit db');
    console.log('req.body:', req.body);
    var newExercise = exerciseImport(req.body);
    newExercise.username = req.user.username;
    newExercise.save();
    res.status(200).send('post sent');
});

// router.post('/addExercisetoWorkout', function (req, res) {
//   console.log("req.body:", req.body);
// });


module.exports = router;
