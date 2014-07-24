var express = require("express");
var app = express();
var port = 8000;
app.listen(port);
console.log("The server is listening on port 8000");

app.get("/", function(req,res){
	res.send('I love University of Virginia');
});