// app.js

console.log("Random Quotes coming your way!");


var express = require("express");
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));


//  "/"    => send main.html
app.get('/', function(req, res){
   res.sendFile('main.html', {root : __dirname}); 
});

// Catch-all....
app.get('*', function(req, res){

    res.sendFile('main.html', {root : __dirname});
});



// Tell Express to listen for requests (start server)
// env.PORT is a variable port number from cloud9.
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Random Quotes App Server has started!!!");
    });
