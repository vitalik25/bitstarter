var express = require('express');
var fs = require('fs');
var htmlFile = "index.html";

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var fileText = fs.readFileSync(htmlFile).toString();
    response.send(fileText);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
