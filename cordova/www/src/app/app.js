angular.module('forklyApp', [
    'templates-app',
    'templates-common',
    'ui.router.state',
    'ui.utils',
    
    'forklyApp.home',
    'forklyApp.friends',
    'forklyApp.details',
    'forklyApp.share',
    'ionic'
])

.config(function myAppConfig($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
})

.run(function($rootScope) {
    
})

.controller('AppCtrl', function AppCtrl($scope, $rootScope) {
    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
        if (angular.isDefined(toState.data.pageTitle)) {
            $rootScope.pageTitle = toState.data.pageTitle;
        }
    });
});