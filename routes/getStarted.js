var express = require('express');
var path = require('path');
var router = express.Router();

router.get('/getStarted', function(req, res) {
  var getStarted = path.join(__dirname, '../public/views/getStarted.html');
  res.sendFile(getStarted);
});

module.exports = router;
