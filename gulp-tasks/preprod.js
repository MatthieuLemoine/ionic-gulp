'use strict';
var rename = require('gulp-rename');

module.exports = function (gulp,CONF) {
  return function () {
    gulp.src(CONF.ENVIRONMENT.PREPROD)
      .pipe(rename(CONF.ENVIRONMENT.FILE))
      .pipe(gulp.dest(CONF.DEST));
  };
};
