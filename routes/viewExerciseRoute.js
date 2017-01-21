var express = require('express');
var path = require('path');
var router = express.Router();

router.get('/', function(req, res) {
    console.log('view Exercise html');
var viewExercise = path.join(__dirname, '../public/views/viewExercise.html');
    res.sendFile(viewExercise);
});

module.exports = router;
