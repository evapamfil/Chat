/*============================================================
#title            : Mood'Chat
#description      : JS for Chat socket
#author           : DUPRE ANTHONY & EVA PAMFIL
#date             : 2017/04/05
#version          : Constantly on progress
#usage            : JAVASCRIPT
#notes            : 
=============================================================*/
//COOKIES
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0)
            return c.substring(nameEQ.length, c.length);
    }
    return null;
}

/* Script for Socket */

var socket = io('http://localhost:1337');
socket.on('connect', function() {
    console.log('Nouveau socket!!!!');
    console.log(socket.id); // '65p5..'
});

socket.on('response', function(data) {
    console.log('Client : Response received: ');
    console.log(data);
})

var pseudo = getCookie("CHOICE AVATAR");
socket.emit('avatar', pseudo)
console.log(pseudo);

var name = getCookie("NAME USER");
socket.emit('user', name)
console.log(name);


socket.on('newmessage', function(toto) {
    console.log('newmessage', toto)

    var li = document.createElement('li');
    li.innerHTML = toto;

    document.getElementById('chat').appendChild(li);
})

function sendmessage() {
    console.log('test-click');
    var input = document.getElementsByTagName('input')[0];
    console.log(input.value);

    if (input.value.length <= 0) {
        return alert('please write something');
    }

    socket.emit('message', input.value)
    input.value = ''
}

document.addEventListener('keydown', function(e) {
    if (e.keyCode === 13) {
        sendmessage();
    }
});

document.getElementById('button-send').addEventListener('click', sendmessage)