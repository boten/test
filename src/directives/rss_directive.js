/**
 * Created by nadav.lichtenstein on 22/09/2014.
 */

(function(){

    angular.module('Main')
        .directive('rss',['rssFactory',rss]);


    function rss(rssFactory){
        return {
            restrict: 'A',

            scope :true,

           // require : '^basedirective',

            template:
                '<div class="btn btn-primary" ng-click="getRss()">get</div>'+
            '<div>'+
                '<div ng-repeat="rss in feeds">' +
                    '<div> title: {{rss.title}}</div>'+
                '<div> body: {{rss.author}}</div>'+
                '<div ng-show="base.feedDate"> date: {{rss.publishedDate}} </div>'+
                    '<div> -------------------------------</div>'+
                '</div>',

            link : function (scope,element,attributes){
                scope.base = scope.main;
                scope.loadButonText="Load";
                scope.getRss=function(e){
                    rssFactory.parseFeed(scope.main.feeds).then(function(res){
                        debugger;
                        var feeds =res.data.responseData.feed.entries;
                        scope.feeds=feeds.slice(0,scope.main.feedsNumber);
                    });
                }
            }

        };
    }
}());
