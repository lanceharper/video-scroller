require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery',
        'mejs': '../bower_components/mediaelement/build/mediaelement-and-player',
        waypoints: '../bower_components/jquery-waypoints/waypoints',
        bootstrap: 'vendor/bootstrap'
    },
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        },
        'mejs': ['jquery'],
        waypoints: {
          deps: ['jquery'],
          exports: 'waypoints'
        }
    }
});

require(['app', 'jquery', 'mejs'], function (app, $) {
    'use strict';
});
