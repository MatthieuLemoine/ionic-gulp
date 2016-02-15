'use strict';
var rename = require('gulp-rename');

module.exports = function (gulp,CONF) {
  return function () {
    gulp.src(CONF.ENVIRONMENT.DEVBUILD)
      .pipe(rename(CONF.ENVIRONMENT.FILE))
      .pipe(gulp.dest(CONF.DEST));
  };
};
