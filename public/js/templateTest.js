"use strict";

(function() {
    var app = angular.module("templateTest", []);
    app.controller("TemplateController", function() {
    	
        this.showElement = true;

        this.toggleElement = function() {
            this.showElement = !this.showElement;
        };
    )};
})();