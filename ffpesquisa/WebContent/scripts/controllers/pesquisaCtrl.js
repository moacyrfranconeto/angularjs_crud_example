/**
 * Created by moacyr.franco on 17/06/2016.
 */
(function () {
    'use strict';
    angular.module('ffpesquisaApp.pesquisa')

        .controller('pesquisaCtrl', ['$rootScope', '$scope', '$route',
            '$location', function( $rootScope, $scope, $route, $location ){
            $rootScope.activetab = $location.path();

            $scope.ola = "";


        }])

})();