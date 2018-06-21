/* global angular */

angular.module("App", ["chart.js", "ngRoute", 'auth0.auth0']).config(function($routeProvider) {
    $routeProvider.
    when("/", {
        templateUrl: "main.html"
    });
});
