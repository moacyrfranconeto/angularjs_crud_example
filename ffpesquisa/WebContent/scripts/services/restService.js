/**
 * Created by moacyr.franco on 20/06/2016.
 */
(function () {
    'use strict';
    angular.module('ffpesquisaApp.pesquisa')

        .service('restService', ['$q','$http',  function($q,$http){
            var urlRest = 'loadAll';
            var pathService =  'http://127.0.0.1:8080/ffpesquisa_server/rest/CRUDservicepesquisador/';
            var service = {};
            service.post = post;
            service.get = get;

            return service;

            function post(urlRest, data){
                var deferred = $q.defer();
                var url = pathService+urlRest;
                $http.post(url, data)
                    .success(function(data){
                        if (data){
                            deferred.resolve(data);
                        }
                    })
                    .error(function(){
                        deferred.reject();
                    });
                console.log(data);
                return deferred.promise;
            }

            function get(urlRest){
                var deferred = $q.defer();
                var url = pathService+urlRest;
                $http.get(url, { headers: { 'Content-Type': 'application/x-www-form-urlencoded'}})
                    .success(function(data){
                        if (data){
                            console.log(data);
                            deferred.resolve(data);
                        }
                    })
                    .error(function(){
                        deferred.reject();
                    });
                return deferred.promise;
            }

        }])

})();