var PORT = process.env.PORT || 3000;
var cors = require('cors')

var express = require('express');
var bodyParser = require('body-parser');
var server = express();

server.use(express.static(__dirname + "/../build"));
server.use(bodyParser.json());
server.use(require("morgan")("short"));

if (require.main === module) {
    server.listen(PORT, function() {
        console.log("listening on %d", PORT);
    });
}