'use strict';

/**
 * @ngdoc service
 * @name yoApp.DataService
 * @description
 * # DataService
 */
(function(){

    angular.module("Main")
        .factory("rssFactory",['$http',rssFactory]);

    function rssFactory(http){
        return {
            parseFeed : function(url){
                return http.jsonp('//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(url));
            }
        };
    }

}());
