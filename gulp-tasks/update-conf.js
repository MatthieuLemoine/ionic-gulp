'use strict';
var argv = require('yargs').argv;

module.exports = function (gulp) {
  return function () {
    var environment = argv.e;
    if(environment === 'preprod'){
      return gulp.start('preprod');
    }
    else if(environment === 'prod'){
      return gulp.start('prod');
    }
    else{
      return gulp.start('devbuild');
    }
  };
};
