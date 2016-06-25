/**
 * Created by moacyr.franco on 20/06/2016.
 */

(function () {
    'use strict';

    // cria app angular
    angular.module('ffpesquisaApp', [
        'ffpesquisaApp.pesquisa'
    ]);

    // configura injeção de dependencias
    angular.module('ffpesquisaApp.pesquisa', [
        'ngRoute'
    ]);
}());
