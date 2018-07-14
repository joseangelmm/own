/*global angular,Highcharts*/

angular.module("App").
controller("grafica", ["$scope", "$http", "$httpParamSerializer", function($scope, $http, $httpParamSerializer) {



    Highcharts.chart('container', {

        title: {
            text: '2015-Present'
        },

        yAxis: {
            title: {
                text: 'Average mark'
            }
        },
        /*legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },*/

        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
               pointStart: 1
            }
        },

        series: [{
            name: 'First => Administración de Empresas, Cálculo Infinitesimal y Numérico, Fundamentos de Programación, Introducción a la Matemática Discreta, Estadística, Álgebra Lineal y Numérica, Fundamentos Físicos de la Informática, Circuitos Electrónicos Digitales, Estructura de Computadores',
            data: [6.3, null,null,null]
        }, {
            name: 'Second => Sistemas Operativos, Introducción a la Ingeniería del Software y los Sistemas de Información, Matemática Discreta, Lógica Informática, Arquitectura de Redes, Redes de Computadores, Ánalisis y Diseño de Datos y Algoritmos, Aquitectura de Computadores',
            data: [null, 6.4,null,null]
        }, {
            name: 'Third => Sistemas Inteligentes, Procesadores de Lenguajes, Inteligencia Artificial, Arquitectura de Sistemas Distribuidos, Sistemas Orientados a Servicios, Tecnologías Avanzadas de la Información, Gestión y Estrategia Empresarial',
            data: [null, null,7.37,null]
        }, {
            name: 'Fourth =>',
            data: [null, null,null,null]
        }],

        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }

    });
}]);
