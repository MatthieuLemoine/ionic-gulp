'use strict';
var argv = require('yargs').argv;

module.exports = function (gulp) {
  return function () {
    var environment = argv.e;
    if(environment === 'preprod'){
      gulp.start('preprod');
    }
    else if(environment === 'prod'){
      gulp.start('prod');
    }
    else{
      gulp.start('devbuild');
    }
  };
};
