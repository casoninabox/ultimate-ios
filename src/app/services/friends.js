angular.module('forklyApp')

.factory('Friends', function() {
    var friends = {};

    var fnames = ["Cason", "Joe", "Nathan", "Princess", "Emma", "Erlich", "Bertram", "Jared", "Richard"];
    var lnames = ["Clagg", "Cutrono", "Craddock", "Smith", "Gilfoyle", "Bighetti", "Bachman", "Hendricks"];

    var getRandomList = function() {
        var randomFiles = [];
        for (var i = 0; i < 4; i++) {
            randomFiles.push({
                name: "Friendly File " + i + '',
                size: "" + ~~(Math.random() * 99) + " Mb",
                user: friends.getRandomDude(~~(Math.random() * 10), false),
                added: new Date(2015, ~~ (Math.random() * 6), 5, 1, 3, 4, 2),
                modified: new Date(2015, ~~ (Math.random() * 6), 1, 1, 0, 0, 0),
                type: ['pdf', 'png', 'pdf', 'mp4'][~~(Math.random() * 4)],
                shared: []
            });
        }
        return randomFiles;
    };

    friends.getRandomDude = function(index, withFiles) {
        return {
            firstName: fnames[~~(Math.random() * fnames.length)],
            lastName: lnames[~~(Math.random() * lnames.length)],
            avatar: "assets/" + index + ".jpg",
            files: withFiles ? getRandomList() : []
        };
    };

    friends.list = [];

    for (var i = 0; i < 8; i++) {
        friends.list.push(friends.getRandomDude(i, true));
    }

    friends.add = function(name) {
        friends.list.unshift(friends.getRandomDude(~~(Math.random() * 10), true));
    };

    friends.remove = function(index) {
        friends.list.splice(index, 1);
    };

    return friends;
});