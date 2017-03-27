/* Script for Socket */ 

var socket = io('http://localhost:1337');
socket.on('connect', function(){
    console.log('Nouveau socket!!!!');
    console.log(socket.id); // '65p5..'
});

socket.on('response', function(data){
    console.log('Client : Response received: ');
    console.log(data);
})

socket.on('newmessage', function(toto){
    console.log('newmessage', toto)
    
    var li = document.createElement('li');
    li.innerHTML = toto;
    
    document.getElementsByTagName('ul')[0].appendChild(li);
})

function sendmessage(){
    console.log('test-click');
    var input = document.getElementsByTagName('input')[0];
    console.log(input.value);
    
    if (input.value.length <= 0){
        return alert('please write something');
    }
    
    socket.emit('message', input.value)
    input.value=''
}

document.addEventListener('keydown', function(e) {
    if (e.keyCode === 13){
        sendmessage();
    }
});

document.getElementsByTagName('button')[0].addEventListener('click', sendmessage)

                                                     