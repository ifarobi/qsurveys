var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var routes = require('./routes/index');
var form = require('./routes/form');
var users = require('./routes/users');
var excelToMongo = require('./excelToMongo');

var app = express();

// variable for saving the excel's data
var dataExcel = Array()
// parsing excel file
var excelParser = require('excel');
excelParser(path.join(__dirname,'public','data.xlsx'), function(err, data){
  if(err) throw console.error(err);
  dataExcel = data;
});

// connecting to database
// mongoose.connect('mongodb://localhost/excelNilai');
mongoose.connect('mongodb://qsurvey:qsurveyMongo@ds055689.mongolab.com:55689/qsurvey');
var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error : '));
// db.once('open', console.log.bind(console, 'yay'));
// create Nilai Schema
var nilaiSchema = mongoose.Schema({
  'nim' : Number,
  'name' : String,
  'class' : String,
  'assitant' : String,
  'm1' : Number,
  'm2': Number,
  'm3' : Number,
  'm4' : Number,
  'm5' : Number,
  'm6' : Number,
  'na' : Number
});
// nilai Model
var Nilai;
try{
  Nilai = mongoose.model('Nilai', nilaiSchema);
}catch(e){
  Nilai = mongoose.model('Nilai');
}

//check if collection Nilai is exists
Nilai.find(function(err, data){
  if(err) return console.log(err);
  if(data[0] == null){
    excelToMongo();
  }
});
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'bower_components')));

app.use('/', routes);
app.use('/form', form);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
