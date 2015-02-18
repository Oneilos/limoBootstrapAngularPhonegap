var limoApp = angular.module('limoApp', ['ngRoute']);
alert(location.href);
limoApp.controller('AuthCtrl', function ($scope,$http,$interval,$filter) {
});

limoApp.config(function($routeProvider, $locationProvider) {
    // compatiblité phongap + web
    if(location.href!='file:///') {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    } else {
        $("a").each(function() {
            var HREF_LINK = '#' + $(this).attr('href');
            $(this).attr("href", HREF_LINK);
        });
    }
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
});

limoApp.controller('MainCtrl', function ($route, $routeParams, $location) {   
    this.$route = $route;
    this.$location = $location;
    this.$routeParams = $routeParams;
});
limoApp.controller('MobilimoCtrl', function ($scope,$http,$interval,$filter) {
});
limoApp.controller('LimodriverCtrl', function ($scope,$http,$interval,$filter) {
});
limoApp.controller('LoginCtrl', function ($scope,$http,$interval,$filter) {
});
limoApp.controller('404Ctrl', function ($scope,$http,$interval,$filter) {
});