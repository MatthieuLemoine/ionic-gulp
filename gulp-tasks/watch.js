'use strict';

module.exports = function (gulp,CONF) {
  return function () {
    gulp.watch(CONF.JS.SRC, ['js']);
  };
};
