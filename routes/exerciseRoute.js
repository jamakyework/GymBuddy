var express = require('express');
var path = require('path');
var router = express.Router();
var exerciseImport = require('../models/exercises.js');

router.get('/', function(req, res) {
    console.log('exercise get html');
var exercisePath = path.join(__dirname, '../public/views/createNewExercise.html');
    res.sendFile(exercisePath);
});

router.get('/getExercise', function(req, res) {
    console.log('exercise get hit db');
    exerciseImport.find().then(function(data) {
      console.log("data", data);
        res.send(data);
    });
});

router.post('/addExercise', function(req, res) {
    console.log('exercise post hit db');
    console.log('req.body:', req.body);
    var newExercise = exerciseImport(req.body);
    newExercise.save();
    res.status(200).send('post sent');
});

module.exports = router;
