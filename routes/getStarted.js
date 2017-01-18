var express = require('express');
var path = require('path');
var router = express.Router();

router.get('/', function(req, res) {
  var crudPath = path.join(__dirname, '../public/views/getStarted.html');
  res.sendFile(crudPath);
});

module.exports = router;
