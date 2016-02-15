'use strict';
var gutil = require('gulp-util');
var bower = require('bower');

module.exports = function () {
  return function () {
    return bower.commands.install()
      .on('log', function(data) {
        gutil.log('bower', gutil.colors.cyan(data.id), data.message);
      });
  };
};
