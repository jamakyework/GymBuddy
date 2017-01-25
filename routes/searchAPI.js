var express = require('express');
var path = require('path');
var router = express.Router();
var checkAuthImport = require("./checkAuth.js");

router.get('/searchAPI', checkAuthImport, function(req, res) {
  var crudPath = path.join(__dirname, '../public/views/searchAPI.html');
  res.sendFile(crudPath);
});

module.exports = router;
