"use strict";

(function() {
    var app = angular.module("controllerTest", []);
    app.controller("CartController", function() {
    	items = [];
    	newItem = 1;
    	var newItem = "";
    	function addItem(newItem){
    		items.push(newItem);
    		console.log(items);
    	}

    });
})();