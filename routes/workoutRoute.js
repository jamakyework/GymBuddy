var express = require('express');
var path = require('path');
var router = express.Router();
var passport = require('passport');
var workoutImport = require('../models/workouts.js');

router.get('/workout', function(req, res) {
    console.log('workout get html');
var workoutPath = path.join(__dirname, '../public/views/createNewWorkout.html');
    res.sendFile(workoutPath);
});

router.get('/viewWorkout', function(req, res) {
    console.log('select workout html');
var selectWorkout = path.join(__dirname, '../public/views/viewWorkout.html');
    res.sendFile(selectWorkout);
});

router.get('/getWorkout', function(req, res) {
    console.log('workout get db');
    workoutImport.find().then(function(data) {
      console.log("data", data);
        res.send(data);
    });
});

router.get('/getWorkout/:id', function(req, res) {
    console.log('workout get db');
    workoutImport.find({_id:req.params.id}).then(function(data) {
      console.log("data", data);
        res.send(data);
    });
});

router.post('/addWorkout', function(req, res) {
    console.log('workout post hit');
    console.log('req.body:', req.body);
    console.log('username:', req.user);
    var newWorkout = workoutImport(req.body);
    newWorkout.user = req.user.username;
    newWorkout.save();
    res.status(200).send('post sent');
});

module.exports = router;

//if req.isAuthenticated() on the get then x otherwise send 401, on client side if req.authenticated(send back 200)
