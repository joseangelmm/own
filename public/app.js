/* global angular */

angular.module("App", ["ngRoute"]).config(function($routeProvider) {
    $routeProvider.
    
    when("/", {
        templateUrl: "main.html"
    })
    .when("/languages", {
        templateUrl: "languages.html",
        controller: "grafica"
    })
    .when("/experience", {
        templateUrl: "experience.html"
    })
    .when("/objective", {
        templateUrl: "objective.html"
    });
});
