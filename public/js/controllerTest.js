"use strict";

(function() {
    var app = angular.module("controllerTest", []);
    app.controller("CartController", function() {

        var items = {
        	name: "",
        	qty: "",
        	cost: "",
        };
        var newItem = 1;

        this.addItemToCart = function(items) {
        	this.items = {
        		name: "",
        		qty: "",
        		cost: "",
        	};
        };


    });
})();