/**
 * Created by moacyr.franco on 20/06/2016.
 */

(function () {
    'use strict';
    angular.module('ffpesquisaApp.pesquisa')

        .controller('administrativoCtrl',['$rootScope', '$scope', '$location', 'pesquisadorService',
            function($rootScope,$scope, $location, pesquisadorService) {

                $scope.filtro = "";

                //busca lista de pesquisadores
                $scope.getPesquisadorList = pesquisadorService.getPesquisador()[0];
                $scope.states =  $scope.getPesquisadorList;

                //insert novo pesquisador
                $scope.addPesquisadorList = postPesquisador;
                function postPesquisador() {
                    var pesquisador = new Object();
                    pesquisador.cpf = $scope.cpf;
                    pesquisador.nome = $scope.nome;
                    pesquisador.login = $scope.login;
                    pesquisador.senha = $scope.senha;

                    pesquisadorService.setPesquisador(pesquisador);
                    limparAtributos();

                    $scope.getPesquisadorList = pesquisadorService.getPesquisador()[0];
                    $scope.updateTemplate;

                }

                //remover um pesquisador
                $scope.removePesquisadorList = deletePesquisador;
                function deletePesquisador(valor){
                    pesquisadorService.removePesquisador(valor);
                    $scope.getPesquisadorList = pesquisadorService.getPesquisador()[0];
                    $scope.updateTemplate;
                };

                //refresh na view
                $scope.updateTemplate = function(){
                    $scope.refreshView();
                };

                //limpar atributos do scopo
                function limparAtributos() {
                    $scope.cpf = '';
                    $scope.nome = '';
                    $scope.login = '';
                    $scope.senha = '';
                }

            }])

})();

