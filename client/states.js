angular.module('app').config(function ($stateProvider) {
    'use strict';
    $stateProvider.state('app', {
        abstract: true,
        controller: 'app',
        templateProvider: function (app) {
            return app.templateProvider('app');
        }
    }).state('app.blank', {
        views: {
            app: {
                controller: 'app_blank',
                templateProvider: function (app) {
                    return app.templateProvider('app.blank');
                }
            }
        }
    }).state('app.menu', {
        views: {
            app: {
                controller: 'app_menu',
                templateProvider: function (app) {
                    return app.templateProvider('app.menu');
                }
            }
        }
    }).state('app.multiselect', {
        views: {
            app: {
                controller: 'app_multiselect',
                templateProvider: function (app) {
                    return app.templateProvider('app.multiselect');
                }
            }
        }
    }).state('app.sidemenuconfident111', {
        views: {
            app: {
                controller: 'app_sidemenuconfident111',
                templateProvider: function (app) {
                    return app.templateProvider('app.sidemenuconfident111');
                }
            }
        }
    }).state('app.1', {
        views: {
            app: {
                controller: 'app_1',
                templateProvider: function (app) {
                    return app.templateProvider('app.1');
                }
            }
        }
    }).state('app.test', {
        views: {
            app: {
                controller: 'app_test',
                templateProvider: function (app) {
                    return app.templateProvider('app.test');
                }
            }
        }
    });
});