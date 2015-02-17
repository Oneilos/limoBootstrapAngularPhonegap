var limoApp = angular.module('limoApp', ['ngRoute']);

limoApp.controller('AuthCtrl', function ($scope,$http,$interval,$filter) {
});

limoApp.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'home.html',
            controller  : 'MainCtrl'
        })        
        .when('/mobilimo', {
            templateUrl : 'mobilimo.html',
            controller  : 'MobilimoCtrl'
        })        
        .when('/limodriver', {
            templateUrl : 'limodriver.html',
            controller  : 'LimodriverCtrl'
        })
        .when('/login', {
            templateUrl : 'login.html',
            controller  : 'LoginCtrl'
        })
        .when('/404', {
            templateUrl : '404.html',
            controller  : '404Ctrl'
        })
        .otherwise({
            redirectTo: '/404'
        });
    $locationProvider.html5Mode(true);
});

limoApp.controller('MainCtrl', function ($scope,$http,$interval,$filter) {
});
limoApp.controller('MobilimoCtrl', function ($scope,$http,$interval,$filter) {
});
limoApp.controller('LimodriverCtrl', function ($scope,$http,$interval,$filter) {
});
limoApp.controller('LoginCtrl', function ($scope,$http,$interval,$filter) {
});
limoApp.controller('404Ctrl', function ($scope,$http,$interval,$filter) {
});