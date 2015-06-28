'use strict';

angular.module('myappApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/myroute', {
        templateUrl: 'app/myroute/myroute.html',
        controller: 'MyrouteCtrl'
      });
  });
