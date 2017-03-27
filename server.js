/*var http = require('http');

var server = http.createServer(function (request, response) {
    console.log('REQUEST !!!!!!');
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello word\n");
})
server.listen(1337)
console.log("application live on port 1337")*/



/*
var express = require('express');
var app = express();
var port = 1337;

app.use('/static/css', express.static(__dirname + '/public/css'));
app.use('/static/js', express.static(__dirname + '/public/js'));
app.use('/static/font', express.static(__dirname + '/public/font'));

app.get('/' , function (req, res){
    console.log('REQ on /');
    res.sendFile(__dirname + '/views/page.html');
});

app.get('/toto' , function (req, res){
    console.log('REQ on /toto');
    res.send('Hello Toto');
});

app.listen(port, function(){
    console.log('app listening on port' + port);
});
*/
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.on('connection', function(socket){ 
    console.log('New connection on socket')
    console.log(socket.id)
    //new connection
    
   /* socket.on('test',function(data){
        console.log(data);
        
        //socket.emit('response', 'tralalalala');
        
        socket.emit('response', {
            success : true,
            message : data.msg,
            timeStamp_receive : data.timeStamp,
            timeStamp_sent : new Date().getTime(),
            response : 'hello'
            
        })
    })*/
    socket.on('message', function(data){
        console.log('receive', data);
        io.emit('newmessage', data);
    })
});

app.use('/static/css', express.static(__dirname + '/public/css'));
app.use('/static/js', express.static(__dirname + '/public/js'));
app.use('/static/font', express.static(__dirname + '/public/font'));

app.get('/' , function (req, res){
    console.log('REQ on /');
    res.sendFile(__dirname + '/views/page.html');
});

server.listen(1337);
console.log('server listening on port 1337');
