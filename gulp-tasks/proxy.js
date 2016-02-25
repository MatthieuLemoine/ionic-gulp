'use strict';
var argv        = require('yargs').argv;
var replace     = require('gulp-replace');
var PROD_URL    = 'http://prod';
var PREPROD_URL = 'http://preprod';
var DEV_URL     = 'http://dev';

module.exports = function (gulp) {
  return function () {
    var environment = argv.e;
    var url = DEV_URL;
    if(environment === 'preprod'){
      url = PREPROD_URL;
    }
    else if(environment === 'prod'){
      url = PROD_URL;
    }
    gulp
      .src('./ionic.project')
      .pipe(replace(/https?:\/\/.*\w+/g,url))
      .pipe(gulp.dest('./'));
  };
};
