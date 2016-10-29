"use strict";

(function() {
    var app = angular.module("controllerTest", []);
    app.controller("CartController", function() {

        var items = [];
       	var newItem = {};
       	newItem.qty = 1;

        this.addItemToCart = function() {
        	items.push({
            'name': 'tyler',
            'qty': '10',
            'cost': '3.50'
        	});
        	items.push({
            'name': 'michael',
            'qty': '20',
            'cost': '1.50'
        	});

        	console.log(items);
       		console.log(newItem.qty);
        };	

    });
})();