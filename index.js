var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;

app.get('/', function(req, res){
   res.sendFile(__dirname + "/nav.html");
});

app.get('/one', function(req, res){
   res.sendFile(__dirname + "/component-1.html");
});

app.get('/random', function(req, res){
   res.sendFile(__dirname + "/randombox.html");
});

app.get('/four', function(req, res){
   res.sendFile(__dirname + "/component-4.html");
});

app.get('/app.css', function(req, res){
   res.sendFile(__dirname + "/app.css");
});

app.listen(port, function(){
    console.log("Nothing broke!")
    console.log("App is running on port: " + port)
});