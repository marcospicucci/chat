const express = require("express");
const app = express();
const http = require('http').createServer(app);
const io = require("socket.io")(http);

require('dotenv').config();
process.env.PORT; //3000
process.env.NODE_ENV; //development

app.use(express.static(__dirname + "/public"));



app.get("/", function(req, res){
    res
	.status(200)
	.sendFile(__dirname + "/public/home.html");
});

http.listen(port, function(){
    console.log("Escuchando en el puerto " + port);
});
