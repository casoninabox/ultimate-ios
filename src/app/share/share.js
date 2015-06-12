angular.module('forklyApp.share', [])

.config(function config($stateProvider) {
    $stateProvider.state('share', {
        url: '/share/:fileId',
        views: {
            "main": {
                controller: 'ShareCtrl',
                templateUrl: 'share/share.jade'
            }
        },
        data: {
            pageTitle: 'Share'
        }
    });
})

.controller('ShareCtrl', function ShareCtrl($ionicViewService, $ionicModal, $scope, $stateParams, Files, $state, $rootScope, $window, Friends) {
    $scope.friends = Friends.list;
    $scope.file = Files.list[$stateParams.fileId];

    $ionicModal.fromTemplateUrl('shared/shareModal.jade', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.modal = modal;
    });

    $scope.openModal = function() {
        $scope.modal.show();
    };
    $scope.closeModal = function() {
        $scope.modal.hide();
    };

    $scope.done = function() {
        $scope.modal.hide();
        $ionicViewService.nextViewOptions({
            disableBack: true
        });
        $state.go('home');
    };
    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
        $scope.modal.remove();
    });
    // Execute action on hide modal
    $scope.$on('modal.hidden', function() {
        // Execute action
    });
    // Execute action on remove modal
    $scope.$on('modal.removed', function() {
        // Execute action
    });
});