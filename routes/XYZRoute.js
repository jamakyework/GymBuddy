// var express = require('express');
// var path = require('path');
// var XYZImport = require('../models/XYZ.js');
//
// var router = express.Router();
// console.log(" in XYZ route");
//
// router.get('/', function(req, res) {
//     console.log('get hit');
//     XYZImport.find().then(function(data) {
//         res.send(data);
//     });
// });
//
// router.post('/', function(req, res) {
//     console.log('post hit');
//     var newItem = XYZImport(req.body);
//     newItem.user = req.user.username;
//     newItem.save();
//     res.send('post sent', 200);
// });
//
// module.exports = router;
