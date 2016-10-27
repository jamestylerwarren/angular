"use strict";

(function() {
    var app = angular.module("controllerTest", []);
    app.controller("ModelController", function() {

        this.showElement = true;

        this.toggleElement = function() {
            this.showElement = !this.showElement;
        };
        
    });
})();