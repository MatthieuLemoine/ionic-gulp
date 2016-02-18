'use strict';

// DEV
angular
    .module('ionic-gulp')
    .constant('config', {
        url: 'http://dev/',
        db: 'dev_db',
        // Ionic proxy to avoid CORS issue
        backendUrl: '/proxy'
    });
