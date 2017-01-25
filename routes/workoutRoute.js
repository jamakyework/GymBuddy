var express = require('express');
var path = require('path');
var router = express.Router();
var passport = require('passport');
var workoutImport = require('../models/workouts.js');
var checkAuthImport = require("./checkAuth.js");

router.get('/workout', checkAuthImport, function(req, res) {
    console.log('workout get html');
var workoutPath = path.join(__dirname, '../public/views/createNewWorkout.html');
    res.sendFile(workoutPath);
});

router.get('/viewWorkout', checkAuthImport, function(req, res) {
    console.log('select workout html');
var selectWorkout = path.join(__dirname, '../public/views/viewWorkout.html');
    res.sendFile(selectWorkout);
});

router.get('/getWorkout', function(req, res) {
    console.log('workout get db');
    workoutImport.find({username: req.user.username}).then(function(data) {
      console.log("data", data);
        res.send(data);
    });
});

router.get('/getWorkout/:id', function(req, res) {
    console.log('workout get db');
    workoutImport.find({_id:req.params.id}).then(function(data) {
      console.log("_id:req.params.id:", {_id:req.params.id});
      console.log("data", data);
        res.send(data);
    });
});

router.post('/addWorkout', function(req, res) {
    console.log('workout post hit');
    console.log('req.body:', req.body);
    console.log('username:', req.user.username);
    var newWorkout = workoutImport(req.body);
    newWorkout.username = req.user.username;
    newWorkout.save();
    res.status(200).send('post sent');
});

module.exports = router;
