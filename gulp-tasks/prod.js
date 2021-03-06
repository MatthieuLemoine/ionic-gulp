'use strict';
var rename = require('gulp-rename');

module.exports = function (gulp,CONF) {
  return function () {
    return gulp.src(CONF.ENVIRONMENT.PROD)
      .pipe(rename(CONF.ENVIRONMENT.FILE))
      .pipe(gulp.dest(CONF.ENVIRONMENT.DEST));
  };
};
