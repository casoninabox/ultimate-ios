angular.module('templates-app', ['details/details.jade', 'friends/friends.jade', 'home/home.jade', 'share/share.jade', 'shared/file-icon.tmpl.jade', 'shared/shareModal.jade']);

angular.module("details/details.jade", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("details/details.jade",
    "<ion-view view-title=\"\">\n" +
    "  <ion-content>\n" +
    "    <ion-list show-delete=\"false\" show-reorder=\"false\" can-swipe=\"false\">\n" +
    "      <ion-item class=\"item-thumbnail-left\">\n" +
    "        <div class=\"iconimg\">\n" +
    "          <file-icon></file-icon>\n" +
    "        </div>\n" +
    "        <h2 style=\"margin-top: 14px;\">{{file.name}}</h2>\n" +
    "        <p>created by {{file.user.firstName}} {{file.user.lastName}}</p>\n" +
    "      </ion-item>\n" +
    "      <ion-item>{{file.type}}<span class=\"item-note\">type</span></ion-item>\n" +
    "      <ion-item>{{file.size}}<span class=\"item-note\">size</span></ion-item>\n" +
    "      <ion-item>{{file.added | date:'MMMM dd, yyyy @ HH:mm:ss'}}<span class=\"item-note\">added</span></ion-item>\n" +
    "      <ion-item>{{file.modified | date:'MMMM dd, yyyy @ HH:mm:ss'}}<span class=\"item-note\">modified</span></ion-item>\n" +
    "    </ion-list>\n" +
    "    <button ng-hide=\"disableShare\" ui-sref=\"share({fileId: fileId})\" class=\"button button-block button-positive\">Share</button>\n" +
    "  </ion-content>\n" +
    "</ion-view>");
}]);

angular.module("friends/friends.jade", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("friends/friends.jade",
    "<ion-view view-title=\"Friends\">\n" +
    "  <ion-content>\n" +
    "    <ion-list show-delete=\"false\" show-reorder=\"false\" can-swipe=\"true\">\n" +
    "      <ion-item ng-repeat=\"friend in friends\" ui-sref=\"home({id: $index})\" class=\"item-avatar\"><img ng-src=\"{{friend.avatar}}\"/>\n" +
    "        <h3>{{friend.firstName}} {{friend.lastName}}</h3>\n" +
    "        <p>{{friend.files.length}} Files</p>\n" +
    "        <ion-option-button ng-click=\"unfriend($index)\" class=\"button-positive\">Unfriend</ion-option-button>\n" +
    "      </ion-item>\n" +
    "    </ion-list>\n" +
    "  </ion-content>\n" +
    "</ion-view>");
}]);

angular.module("home/home.jade", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.jade",
    "<ion-view view-title=\"{{title}}\">\n" +
    "  <ion-nav-buttons side=\"right\">\n" +
    "    <button ng-hide=\"disableAdd\" ng-click=\"add()\" class=\"button\"> <i style=\"padding: 5px;\" class=\"ion-plus\"></i></button>\n" +
    "  </ion-nav-buttons>\n" +
    "  <ion-content>\n" +
    "    <ion-list show-delete=\"false\" show-reorder=\"false\" can-swipe=\"!disableAdd\">\n" +
    "      <ion-item ng-click=\"details($index)\" ng-repeat=\"file in files\" ng-class=\"{'new' : file.isNew}\" class=\"item-icon-left\">\n" +
    "        <file-icon class=\"icon\"></file-icon>{{file.name}}\n" +
    "        <ion-option-button ng-click=\"delete($index)\" class=\"button-assertive\">Delete</ion-option-button>\n" +
    "      </ion-item>\n" +
    "    </ion-list>\n" +
    "  </ion-content>\n" +
    "</ion-view>");
}]);

angular.module("share/share.jade", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("share/share.jade",
    "<ion-view view-title=\"Share\">\n" +
    "  <ion-nav-buttons side=\"right\">\n" +
    "    <button ng-click=\"openModal()\" class=\"button button-positive\">Share</button>\n" +
    "  </ion-nav-buttons>\n" +
    "  <ion-content>\n" +
    "    <ion-list show-delete=\"false\" show-reorder=\"false\" can-swipe=\"false\">\n" +
    "      <ion-item ng-click=\"friend.selected = !friend.selected\" ng-repeat=\"friend in friends\" class=\"item-avatar item-checkbox\"><img ng-src=\"{{friend.avatar}}\"/>\n" +
    "        <label style=\"left: inherit;\" class=\"checkbox\">\n" +
    "          <input type=\"checkbox\" ng-model=\"friend.selected\"/>\n" +
    "        </label>\n" +
    "        <h2 style=\"margin-left:8px;font-size: 23px;line-height: 37px;\">{{friend.firstName}} {{friend.lastName}}</h2>\n" +
    "      </ion-item>\n" +
    "    </ion-list>\n" +
    "  </ion-content>\n" +
    "</ion-view>");
}]);

angular.module("shared/file-icon.tmpl.jade", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("shared/file-icon.tmpl.jade",
    "<i ng-class=\"{'fa-file-excel-o' : file.type == 'xls', 'fa-video-camera' : file.type == 'mp4', 'fa-file-pdf-o' : file.type == 'pdf','fa-volume-up' : file.type == 'mp3', 'fa-picture-o' : file.type == 'png', }\" class=\"fa\"></i>");
}]);

angular.module("shared/shareModal.jade", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("shared/shareModal.jade",
    "<ion-modal-view>\n" +
    "  <ion-header-bar>\n" +
    "    <h1 class=\"title\">Success</h1>\n" +
    "  </ion-header-bar>\n" +
    "  <ion-content class=\"padding\">\n" +
    "    <div class=\"card padding\">\n" +
    "      <div class=\"item item-text-wrap\">\n" +
    "        <p>You have successfully shared {{file.name}} with {{(friends | filter:{selected: true}).length}} people!</p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <button ng-click=\"done()\" class=\"button button-block button-positive\">Done</button>\n" +
    "  </ion-content>\n" +
    "</ion-modal-view>");
}]);
