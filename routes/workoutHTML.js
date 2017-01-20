var express = require('express');
var path = require('path');
var router = express.Router();

router.get('/', function(req, res) {
    console.log('workout get html');
var workoutPath = path.join(__dirname, '../public/views/createNewWorkout.html');
    res.sendFile(workoutPath);
});

module.exports = router;
