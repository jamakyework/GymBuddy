var express = require('express');
var path = require('path');
var router = express.Router();

router.get('/', function(req, res) {
    console.log('view Exercise html');
var selectExercise = path.join(__dirname, '../public/views/viewExercise.html');
    res.sendFile(selectExercise);
});

module.exports = router;
