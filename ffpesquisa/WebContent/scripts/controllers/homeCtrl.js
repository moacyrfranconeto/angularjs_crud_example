/**
 * Created by moacyr.franco on 20/06/2016.
 */

(function () {
    'use strict';
    angular.module('ffpesquisaApp.pesquisa')

        .controller('homeCtrl', ['$rootScope', '$scope', '$route', '$location', function( $rootScope, $scope, $route, $location ){
            $rootScope.activetab = $location.path();
        }])


        .config(['$routeProvider',function ($routeProvider) {
            $routeProvider
                .when('/home', {templateUrl: 'template/home.html', controller: 'homeCtrl'})
                .when('/administrativo', {templateUrl: 'template/administrativo.html', controller: 'administrativoCtrl'})
                .when('/pesquisa', {templateUrl: 'template/pesquisa.html',controller: 'pesquisaCtrl'})
                .when('/ajuda', { templateUrl: 'template/ajuda.html', controller: 'ajudaCtrl'})
                .otherwise({
                    redirectTo: '/'
                });
        }]);
})();