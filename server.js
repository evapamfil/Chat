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
var tab_user = [];
var i = 0;

io.on('connection', function (socket) {
    console.log('New connection on socket');
    console.log(socket.id);

    socket.on('message', function (data) {
        console.log('receive', data);
        io.emit('newmessage', data);
    });

    socket.on('user_avatar', function (data) {
        console.log(data);
        tab_user[i] = data;
        i++;
        io.emit('user_avatar', tab_user);
    });

    socket.on('user_avatar', function (data) {
        console.log(data);
        data = data;
        io.emit('user_avatar', data)
    })
});

app.use('/static/css', express.static(__dirname + '/public/css'));
app.use('/static/js', express.static(__dirname + '/public/js'));
app.use('/static/font', express.static(__dirname + '/public/font'));
app.use('/static/pictures', express.static(__dirname + '/public/pictures'));

//STIWCH HTML
app.use('/static/', express.static(__dirname + '/views/'));

app.get('/', function (req, res) {
    console.log('REQ on /');
    res.sendFile(__dirname + '/views/index.html');
});

server.listen(8080);
console.log('server listening on port 8080');
