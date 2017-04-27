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
    }).state('app.logincaptivating', {
        views: {
            app: {
                controller: 'app_logincaptivating',
                templateProvider: function (app) {
                    return app.templateProvider('app.logincaptivating');
                }
            }
        }
    }).state('app.loginconfident', {
        views: {
            app: {
                controller: 'app_loginconfident',
                templateProvider: function (app) {
                    return app.templateProvider('app.loginconfident');
                }
            }
        }
    }).state('app.sidemenuconfident', {
        views: {
            app: {
                controller: 'app_sidemenuconfident',
                templateProvider: function (app) {
                    return app.templateProvider('app.sidemenuconfident');
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
    }).state('app.2', {
        views: {
            app: {
                controller: 'app_2',
                templateProvider: function (app) {
                    return app.templateProvider('app.2');
                }
            }
        }
    }).state('app.3', {
        views: {
            app: {
                controller: 'app_3',
                templateProvider: function (app) {
                    return app.templateProvider('app.3');
                }
            }
        }
    });
});