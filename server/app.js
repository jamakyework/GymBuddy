var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('../strategies/userStrategy');
var app = express();

//require routers
var indexRouter = require('../routes/index');
var registerRouter = require('../routes/register');
var getStarted = require('../routes/getStarted');//new route
var workoutRouter = require('../routes/workoutRoute'); //new route
var exerciseRouter = require('../routes/exerciseRoute'); //new route
var searchAPI = require('../routes/searchAPI'); //new route
// var XYZRouter = require('../routes/XYZRoute'); // test route

// middleware
app.use(bodyParser.json());
app.use(express.static('public'));

app.use(session({
   secret: 'secret',
   key: 'user',
   resave: 'true',
   saveUninitialized: false,
   cookie: { maxage: 60000, secure: false }
}));

// Passport
app.use(passport.initialize());
app.use(passport.session());

// Routers
app.use('/', indexRouter);
app.use('/register', registerRouter);
app.use('/', getStarted); //new router
app.use('/', workoutRouter);
app.use('/', exerciseRouter);
app.use('/', searchAPI);//new router

// app.use('/getItem', XYZRouter); //test get route
// app.use('/addItem', XYZRouter); //test post route

// server port set and listen
var serverPort = process.env.port || 8000;
app.set('port', serverPort);

var server = app.listen(serverPort, function() {
  console.log('up and listening on', server.address().port);
});

// connect to the mongodb
var mongoURI = "mongodb://localhost:27017/XYZDB";
var MongoDB = mongoose.connect(mongoURI).connection;

MongoDB.on('error', function (err) {
    console.log('mongodb connection error:', err);
});

MongoDB.once('open', function () {
  console.log('mongodb connection open!');
});
