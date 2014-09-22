/**
 * Created by nadav.lichtenstein on 22/09/2014.
 */

(function(){
    angular.module("Main")
        .controller("mainController",["$scope",mainController]);

    function mainController(){
        this.feedsNumber = 5;
    }
}());
