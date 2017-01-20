var express = require('express');
var path = require('path');
var router = express.Router();

router.get('/', function(req, res) {
    console.log('select workout html');
var selectWorkout = path.join(__dirname, '../public/views/selectWorkout.html');
    res.sendFile(selectWorkout);
});

module.exports = router;
