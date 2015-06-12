angular.module('forklyApp.home', [])

.config(function config($stateProvider) {
    $stateProvider.state('home', {
        url: '/:id',
        views: {
            "main": {
                controller: 'HomeCtrl',
                templateUrl: 'home/home.jade'
            }
        },
        data: {
            pageTitle: 'Home'
        }
    });
})

.controller('HomeCtrl', function HomeCtrl($ionicHistory, $timeout, Files, $stateParams, Friends, $scope, $state, $rootScope, $window) {
    
    $scope.files = Files.list;
    $scope.title = "My Files";
    $scope.disableAdd = false;

    if ($stateParams.id !== null && $stateParams.id.length > 0 && !isNaN($stateParams.id) && $stateParams.id >= 0) {
        $scope.friend = Friends.list[$stateParams.id];
        $scope.files = $scope.friend.files;
        $scope.title = $scope.friend.firstName + "'s Files";
        $scope.disableAdd = true;
    }

    $scope.delete = function(index) {
        Files.remove(index);
        // $('.item-options').addClass('invisible');
        // $('.item-content').removeAttr('-webkit-transform');
    };

    $scope.add = function() {
        var file = Files.add();
        $timeout(function() {
            file.isNew = false;
        }, 100);
    };

    $scope.details = function(index) {
        if ($scope.friend) {
            $state.go("details", {
                id: index,
                friendId: $stateParams.id
            });
        } else {
            $state.go("details", {
                id: index
            });
        }
    };
});