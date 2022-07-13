'use strict';
/* App Controllers */
var memoryGameApp = angular.module('memoryGameApp', []);
memoryGameApp.factory('game', function() {
  var tileNames = ['card1','card2','card3','card4','card5','card6','card7','card8'];
  return new Game(tileNames);
});


memoryGameApp.controller('GameCtrl', function GameCtrl($scope, game) {
  $scope.game = game;
});
memoryGameApp.directive('mgCard', function() {
  return {
    restrict: 'E',
    template: '<div class="container">' +
                '<div class="card" ng-class="{flipped: tile.flipped}">' +
                  '<img class="front" ng-src="img/back.png">' +
                  '<img class="back" ng-src="img/{{tile.title}}.png">' +
                '</div>' +
              '</div>',
    scope: {
      tile: '='
    }
  }
});
