'use strict';

var _ = require('lodash-node');
var path = require('path');
var rootPath = path.normalize(__dirname + '/..');
var env = process.env.NODE_ENV || 'development';

console.log('Environment:', env);

var config = {
  development: {
    port: 3000,
    socketLogLevel: 1,
    expressLogger: true
  },

  test: {
    port: 3333,
    socketLogLevel: 1,
    expressLogger: true
  },

  production: {
    port: '3000',
    socketLogLevel: 0,
    expressLogger: false
  }
};

var exportedConfig = _.defaults(config[env], {
  root: rootPath
});

module.exports = exportedConfig;
