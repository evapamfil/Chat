/*============================================================
#title            : Mood'Chat
#description      : JS for server node 
#author           : DUPRE ANTHONY & EVA PAMFIL
#date             : 2017/04/05
#version          : Constantly on progress
#usage            : JAVASCRIPT
#notes            : 
=============================================================*/

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.on('connection', function(socket){ 
    console.log('New connection on socket')
    console.log(socket.id)
    socket.on('message', function(data){
        console.log('receive', data);
        io.emit('newmessage', data);
    })
});

app.use('/static/css', express.static(__dirname + '/public/css'));
app.use('/static/js', express.static(__dirname + '/public/js'));
app.use('/static/font', express.static(__dirname + '/public/font'));
app.use('/static/pictures', express.static(__dirname + '/public/pictures'));

app.get('/', function (req, res){
    console.log('REQ on /');
    res.sendFile(__dirname + '/views/index.html');
});

server.listen(1337);
console.log('server listening on port 1337');
