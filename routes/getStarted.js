var express = require('express');
var path = require('path');
var router = express.Router();
var checkAuthImport = require("./checkAuth.js");
var usernameImport = require('../models/exercises.js');

router.get('/getStarted', checkAuthImport, function(req, res) {
  var getStarted = path.join(__dirname, '../public/views/getStarted.html');
  res.sendFile(getStarted);
});

router.get('/username', checkAuthImport, function(req, res) {
  var username = {username: req.user.username};
  res.send(username);
});

module.exports = router;
