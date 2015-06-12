angular.module('forklyApp.friends', [])

.config(function config($stateProvider) {
    $stateProvider.state('friends', {
        url: '/friends',
        views: {
            "main": {
                controller: 'FriendsCtrl',
                templateUrl: 'friends/friends.jade'
            }
        },
        data: {
            pageTitle: 'Files'
        }
    });
})

.controller('FriendsCtrl', function FriendsCtrl($scope, $state, $rootScope, $window, Friends) {
   $scope.friends = Friends.list;

   $scope.unfriend = function(index) {
        Friends.remove(index);
        //$scope.friends = Friends.list;
   };
});