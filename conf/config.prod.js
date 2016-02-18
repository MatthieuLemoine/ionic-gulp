'use strict';

// PROD
angular
    .module('ionic-gulp')
    .constant('config', {
        url: 'http://prod/',
        db: 'prod_db',
        backendUrl: 'http://backend.prod/'
    });
