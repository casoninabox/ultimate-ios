angular.module('forklyApp')
.directive('fileIcon', function() {
  return {
  	restrict: 'E',
    templateUrl: 'shared/file-icon.tmpl.jade',
    replace: true,
    transclude: true
  };
});