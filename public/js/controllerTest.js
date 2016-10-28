"use strict";

(function() {
    var app = angular.module("controllerTest", []);
    app.controller("CartController", function() {
    	this.showElement = false;
    	this.toggleElement = function() {
            this.showElement = !this.showElement;
        };
        
    });
})();