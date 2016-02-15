'use strict';
var utils = require('./utils.js');
var spawn = require('child_process').spawn;

module.exports = function () {
    return function (cb) {
      var cmd = spawn('ionic',['serve']);
      utils.logCmd(cmd,cb);
    };
};
