'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
  'oc.lazyLoad',
  'ui.router'
])
    .controller('AppCtrl',['$scope', function ($scope) {
        $scope.$on('ocLazyLoad.moduleLoaded', function(e, module) {
            console.log('===================');
            console.log('module loaded', module);
        });
        $scope.$on('ocLazyLoad.moduleReLoaded', function(e, module) {
            console.log('===================');
            console.log('module ReLoaded', module);
        });
        $scope.$on('ocLazyLoad.componentLoaded', function(e, module) {
            console.log('===================');
            console.log('component loaded', module);
        });
        $scope.$on('ocLazyLoad.fileLoaded', function(e, module) {
            console.log('===================');
            console.log('file loaded', module);
        });
    }])


