/**
 * Created by nadav.lichtenstein on 14/08/2014.
 */
console.log('sss');
angular
    .module('Main', [
        'ui.router'
    ])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state('home', {
               url : "/",
                templateUrl: 'main_screen/main.html',
                controller: 'mainController as main'
            });

    });

