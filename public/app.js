/* global angular */

angular.module("App", ["ngRoute"]).config(function($routeProvider) {
    $routeProvider.
    when("/", {
        templateUrl: "main.html"
    });
});
