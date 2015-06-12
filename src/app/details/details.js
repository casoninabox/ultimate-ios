angular.module('forklyApp.details', [])

.config(function config($stateProvider) {
    $stateProvider.state('details', {
        url: '/details/:id/:friendId',
        views: {
            "main": {
                controller: 'DetailsCtrl',
                templateUrl: 'details/details.jade'
            }
        },
        data: {
            pageTitle: 'Details'
        }
    });
})

.controller('DetailsCtrl', function DetailsCtrl(Friends, $scope, $stateParams, $rootScope, $window, Files) {

    if ($stateParams.friendId && $stateParams.friendId.length > 0) {
        $scope.file = Friends.list[$stateParams.friendId].files[$stateParams.id];
        $scope.disableShare = true;
    } else {
        $scope.fileId = $stateParams.id;
        $scope.file = Files.list[$scope.fileId];
    }
    $scope.keys = Object.keys($scope.file);
});