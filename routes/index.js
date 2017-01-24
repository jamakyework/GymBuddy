var express = require('express');
var path = require('path');
var passport = require('passport');
var router = express.Router();

router.get('/', function(req, res) {
  var indexPath = path.join(__dirname, '../public/views/index.html');
  res.sendFile(indexPath);
});

router.post('/', passport.authenticate('local'), function(req, res) {
    res.sendStatus(200);
});

module.exports = router;


//server route to indicate is user authenticated isauthenticated return success or failure,
// client can call route to check if user is logged in.
