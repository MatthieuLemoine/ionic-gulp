'use strict';
var utils = require('./utils.js');
var spawn = require('child_process').spawn;
var argv  = require('yargs').argv;

module.exports = function () {
    return function (cb) {
        var target = argv.t;
        var cmd;
        if(target === 'ios'){
            cmd = spawn('./ios.release');
        }
        else{
            cmd = spawn('./android.release');
        }
        utils.logCmd(cmd,cb);
    };
};
