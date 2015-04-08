var sound = new Audio("https://www.limo-vtc.fr/nouvelles-demandes.mp3");
var limoApp = angular.module('limoApp', ['ngRoute']);

limoApp.config(function($routeProvider, $locationProvider) {
    // compatiblité phongap + web
    if(location.href.substring(0,8)!='file:///') {
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

limoApp.filter('replace', function() {
    return function(input, find, replacement) {
        return input.replace(find,replacement);
    }
});
limoApp.filter('age', function() {
    return function(input) {
        date1 = new Date(input);
        date2 = new Date();
        var diff = {}
        var tmp = date2 - date1

        tmp = Math.floor(tmp/1000);             // Nombre de secondes entre les 2 dates
        diff.sec = tmp % 60;                    // Extraction du nombre de secondes

        tmp = Math.floor((tmp-diff.sec)/60);    // Nombre de minutes (partie entière)
        diff.min = tmp % 60;                    // Extraction du nombre de minutes

        tmp = Math.floor((tmp-diff.min)/60);    // Nombre d'heures (entières)
        diff.hour = tmp % 24;                   // Extraction du nombre d'heures

        tmp = Math.floor((tmp-diff.hour)/24);   // Nombre de jours restants
        diff.day = tmp;

        if (diff.sec) {
            diff.string = diff.sec + 'sec';
        }
        if (diff.min) {
            diff.string = diff.min + 'min';
        }
        if (diff.hour) {
            diff.string = diff.hour + 'h';
        }
        if (diff.day) {
            diff.string = diff.day + 'j';
        }

        return diff.string;
    }
});

limoApp.service('AuthService', function () {
    var service = {};
    service.login = function (serveur, login, mdp) {
        service.serveur = serveur;
        service.login = login;
        service.mdp = mdp;
        alert('Connexion: ' + serveur + login + mdp);
        return true ? true : false;
    }
    return service;
});

limoApp.controller('MainCtrl', function ($route,$routeParams,$location) {   
    this.$route = $route;
    this.$location = $location;
    this.$routeParams = $routeParams;
});
limoApp.controller('MobilimoCtrl', function ($scope,$http,$interval,$filter) {
});
limoApp.controller('LimodriverCtrl', function ($scope,$http,$interval,$filter) {
});
limoApp.controller('DemandesCtrl', function ($scope,$http,$interval,$filter) {
    var active = 0;
    $scope.setActive = function(index) {
        active = index;
    }
    $scope.isActive = function(index) {
        return active===index;
    }
    update = function(){
        if (navigator.onLine) {
            $http.jsonp('https://dev.limovtc.fr/bop3/C_Com_DemandeDevis/jsonp/?DDE_SDD_ID=1&callback=JSON_CALLBACK').
            success(function(data, status, headers, config) {
                if (typeof $scope.liste!='undefined' && $scope.liste.length<data.length) {
                    sound.play();
                }
                $scope.liste = data;
            });
        }
    }
    var timer = setInterval(update, 3000);
    update();
});
limoApp.controller('LoginCtrl', function ($scope,$http,$interval,$filter,AuthService,$location) {
    $scope.login = function(){
        if (AuthService.login($scope.inputServeur, $scope.inputEmail, $scope.inputPassword)) {
            $location.path('/');
        }
    }
});
limoApp.controller('404Ctrl', function ($scope,$http,$interval,$filter) {
});
limoApp.controller('StatutCtrl', function($scope,$window) {
    $scope.online = navigator.onLine;
    $window.addEventListener("offline", function () {
        $scope.$apply(function() {
            $scope.online = navigator.onLine;
        });
    }, false);
    $window.addEventListener("online", function () {
        $scope.$apply(function() {
            $scope.online = navigator.onLine;
        });
    }, false);
});