var express = require('express');
var path = require('path');
var router = express.Router();
var checkAuthImport = require("./checkAuth.js");

router.get('/getStarted', checkAuthImport, function(req, res) {
  var getStarted = path.join(__dirname, '../public/views/getStarted.html');
  res.sendFile(getStarted);
});

module.exports = router;
