angular.module('forklyApp')

.factory('Files', function(Friends) {
    var files = {};
    files.list = [];

    for (var i = 1; i < 4; i++) {
        files.list.push({
            id: files.list.length,
            name: "GoT Episode 0" + i + '',
            size: "2." + i + "1" + " Gb",
            user: Friends.getRandomDude(~~(Math.random() * 10)),
            added: new Date(2015, 3, 5, 1, 3, 4, 2),
            modified: new Date(),
            type: 'mp4',
            shared: []
        });
    }

    files.list.push({
        id: files.list.length,
        name: "BoringSpreadsheet",
        size: "33.21" + " Kb",
        user: Friends.getRandomDude(~~(Math.random() * 10)),
        added: new Date(2014, 7, 5, 1, 3, 4, 2),
        modified: new Date(),
        type: 'xls',
        shared: []
    });

    files.list.push({
        id: files.list.length,
        name: "TesseracT - Of Mind",
        size: "3.12" + " Mb",
        user: Friends.getRandomDude(~~(Math.random() * 10)),
        added: new Date(2013, 7, 5, 1, 3, 4, 2),
        modified: new Date(),
        type: 'mp3',
        shared: []
    });

    files.list.push({
        id: files.list.length,
        name: "Lenna",
        size: "462.22" + " Kb",
        user: Friends.getRandomDude(~~(Math.random() * 10)),
        added: new Date(1972, 11, 1, 1, 0, 0, 0),
        modified: new Date(),
        type: 'png',
        shared: []
    });

    files.list.push({
        id: files.list.length,
        name: "noBSguide2LinearAlegebra",
        size: "4.14" + " Mb",
        user: Friends.getRandomDude(~~(Math.random() * 10)),
        added: new Date(2014, 7, 5, 1, 3, 4, 2),
        modified: new Date(),
        type: 'pdf',
        shared: []
    });

    files.add = function() {
        var file = {
            id: files.list.length,
            name: "File " + files.list.length,
            size: "" + ~~(Math.random() * 400) + " Kb",
            user: Friends.getRandomDude(~~(Math.random() * 10)),
            added: new Date(2010 + ~~(Math.random() * 5), ~~ (Math.random() * 6), 5, 1, 3, 4, 2),
            modified: new Date(),
            isNew: true,
            type: ['pdf', 'png', 'pdf', 'mp4'][~~(Math.random() * 4)],
            shared: []
        };
        files.list.unshift(file);
        return file;
    };

    files.remove = function(index) {
        files.list.splice(index, 1);
    };

    return files;
});