/**
 * Created by moacyr.franco on 20/06/2016.
 */
(function () {
    'use strict';

    angular.module('ffpesquisaApp.pesquisa')
    /*exemplo de service */
        .service('pesquisadorService', ['restService', function(restService){

            var service = {};
            service.getPesquisador = getPesquisador;
            service.setPesquisador = postPesquisador;
            service.removePesquisador = removePesquisador;

            function removePesquisador(cpf) {
                service = restService.get('delete/'+cpf);
                console.log(service);
            }

            function postPesquisador(obj) {
                service = restService.post('insert',obj);
            }

            function getPesquisador() {
                var vPesquisador = [];

                service = restService.get('loadAll');
                for( var i in service ) {
                  if (service.hasOwnProperty(i)){
                        vPesquisador.push(service[i]);
                  }
                }
                console.log(vPesquisador);
                return vPesquisador;

            }
            //retorna uma um array de metodos da classe
            return service;

        }])


})();