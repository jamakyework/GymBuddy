var express = require('express');
var path = require('path');
var router = express.Router();

router.get('/', function(req, res) {
  var homePath = path.join(__dirname, '../public/views/home.html');
  res.sendFile(homePath);
});

module.exports = router;
