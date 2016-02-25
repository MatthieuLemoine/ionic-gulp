'use strict';

// DEV
angular
    .module('ionic-gulp')
    .constant('config', {
        // Ionic proxy to avoid CORS issue
        url: '/proxy',
        db: 'dev_db'
    });
