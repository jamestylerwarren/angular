"use strict";

(function() {
    var app = angular.module("controllerTest", []);
    app.controller("CartController", function() {

        var items = [];
       	var name = "";
       	var qty = "";
       	var cost = "";

       	//var newItem = {};
       	//newItem.qty = 1;

        this.addItemToCart = function() {
        	items.push({
            'name': name,
            'qty': qty,
            'cost': cost,
        	});
        	
        	console.log(items);

        	//newItem.qty++;
       		//console.log(newItem.qty);
        };	

    });
})();