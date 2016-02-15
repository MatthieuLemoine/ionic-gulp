'use strict';
var concat         = require('gulp-concat');
var changed        = require('gulp-changed');
var wrap           = require('gulp-wrap');

module.exports = function (gulp,CONF) {
  return function () {
    return gulp.src(CONF.JS.SRC)
      .pipe(wrap('(function(){\n<%= contents %>\n})();'))
      .pipe(changed(CONF.DEST))
      .pipe(concat(CONF.JS.FAT))
      .pipe(gulp.dest(CONF.DEST));
  };
};
