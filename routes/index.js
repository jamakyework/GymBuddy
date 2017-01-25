var express = require('express');
var path = require('path');
var passport = require('passport');
var router = express.Router();

router.get('/', function(req, res) {
  var indexPath = path.join(__dirname, '../public/views/index.html');
  res.sendFile(indexPath);
});

router.get('/logout', function(req, res) {
    req.logout();
    req.session.destroy();
    res.status(201).send({message: "user logged out successfully"});
  });

// router.get('/logout', function(req, res) {
//   if(err){
//     res.sendStatus(500);
//   }else{
//     req.logout();
//     req.session.destroy();
//     res.status(201).send({message: "user logged out successfully"});
//   }
//   });

router.post('/', passport.authenticate('local'), function(req, res) {
    res.sendStatus(200);
});


module.exports = router;
