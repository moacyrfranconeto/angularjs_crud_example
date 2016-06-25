/**
 * Created by moacyr.franco on 09/06/2016.
 */



var teste = 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/A_re-introduction_to_JavaScript'

function add(x, y) {
    var total = x + y;
    return total;
}

//variável adicional chamada arguments, que é um objeto parecido com um vetor que contém todos os valores passados para a função
function avg() {
    var sum = 0;
    for (var i = 0, j = arguments.length; i < j; i++) {
        sum += arguments[i];
    }
    return sum / arguments.length;
}


//funcao anonimas
var avg = function() {
    var sum = 0;
    for (var i = 0, j = arguments.length; i < j; i++) {
        sum += arguments[i];
    }
    return sum / arguments.length;
}

//funçao recursiva
function countChars(elm) {
    if (elm.nodeType == 3) { // TEXT_NODE
        return elm.nodeValue.length;
    }
    var count = 0;
    for (var i = 0, child; child = elm.childNodes[i]; i++) {
        count += countChars(child);
    }
    return count;
}

function Person(first, last) {
    this.first = first;
    this.last = last;
    this.fullName = function() {
        return this.first + ' ' + this.last;
    }
    this.fullNameReversed = function() {
        return this.last + ', ' + this.first;
    }
}
var s = new Person("Simon", "Willison");


<!--
module.factory('simpleService', function(){
    var service = {};
    service.nameList = ['Mônica', 'Magali', 'Cascão', 'Cebolinha'];

    service.addName = function(name){
        if(service.nameList.indexOf(name) == -1)
            service.nameList.push(name);
    }

    return service;
})
-->
