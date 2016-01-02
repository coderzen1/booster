var express = require('express');
var path = require('path');
var HttpServer = require('http').Server;
var config = require('./config');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var routes = require('./app/routes/index');
// var favicon = require('express-favicon');
var root = config.api;

var app = express();
var server = new HttpServer(app);

app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'jade');

server.listen(config.port, function() {
  console.log('listening on *:' + config.port);
});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(session({
  secret: 'OurSuperSecretSecret',
  resave: false,
  saveUninitialized: false
}));
app.use(express.static(path.join(__dirname, 'app')));
// app.use(favicon(__dirname + '/app/favicon.ico'));

routes(app);

module.exports = app;
