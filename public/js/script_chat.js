/*============================================================
#title            : Mood'Chat
#description      : JS for Chat socket
#author           : DUPRE ANTHONY & EVA PAMFIL
#date             : 2017/04/05
#version          : Constantly on progress
#usage            : JAVASCRIPT
#notes            : 
=============================================================*/

    /* Script for Socket */
    //COOKIE
    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0)
                return c.substring(nameEQ.length,c.length);
        }
        return null;
    }

    var socket = io('http://localhost:1337');
    var name_user = getCookie("user");
    var my_avatar = getCookie("avatar"); 

    function send(){
        socket.emit('user_avatar', {
            user: name_user,
            avatar: my_avatar
        }); 
    }

    socket.on('connect', function() {
        console.log('Nouveau socket!!!!');
        console.log(socket.id); // '65p5..'
        send(); 
    });

    socket.on('response', function(data) {
        console.log('Client : Response received: ');
        console.log(data);
    }); 

    socket.on('user_avatar', function(data){
        if(name_user != data.user){
            $("#name").html(data.user);
            
            switch(data.avatar) {
               case fillion:
                   $("#user").attr('src', '/static/pictures/fillion.png');
                   break;
               case beyonce:
                   $("#user").attr('src', '/static/pictures/byonce.png');
                   break;
               case donald:
                   $("#user").attr('src', '/static/pictures/donald.png');
                   break;
               case kim:
                   $("#user").attr('src', '/static/pictures/kim.png');
                   break;
               default:
                   return; 
            }
        }
    });
        
    socket.on('newmessage', function(toto) {
        console.log('newmessage', toto)

        var li = document.createElement('li');
        li.innerHTML = toto;

        document.getElementById('chat').appendChild(li);
    });


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

    document.getElementById('button-send').addEventListener('click', sendmessage);

$(document).ready(function() {

    //FRONT
    $('#dark').on({
        'click': function() {
            $('#logo').attr('src', '/static/pictures/LOGO-moodchat-white.png');
            $('h1').css('color', '#ffffff');
            $('h2').css('color', '#ffffff');
            $('.theme').css('color', '#ffffff');
            $('#name').css('color', '#ffffff');
            $('header').css('background-color', '#2C2C2C');
            $('#section-left').css('background-color', '#000000');
            $('#section-right').css('background-image', 'url(/static/pictures/black.jpg)');
            $('input').css('background-color', '#656464');
            // $('[placeholder]').css('color','#ffffff');
            $('button').css('background-color', '#656464');
            $('#button').css('background-color', '#656464');
            $('#button-emoji').css('background-image', 'url(/static/pictures/Group%202.png)');
            $('#button-send').css('background-image', 'url(/static/pictures/Path%208.png)');

        }
    });

    $('#space').on({
        'click': function() {
            $('#logo').attr('src', '/static/pictures/LOGO-moodchat-white.png');
            $('h1').css('color', '#ffffff');
            $('h2').css('color', '#ffffff');
            $('.theme').css('color', '#ffffff');
            $('#name').css('color', '#ffba00');
            $('header').css('background-color', '#395464');
            $('#section-left').css('background-color', '#242B38');
            $('#section-right').css('background-image', 'url(/static/pictures/space.jpg)');
            $('input').css('background-color', '#636A89');
            // $('[placeholder]').css('color','#ffffff');
            $('button').css('background-color', '#636A89');
            $('#button').css('background-color', '#636A89');
            $('#button-emoji').css('background-image', 'url(/static/pictures/Group%202.png)');
            $('#button-send').css('background-image', 'url(/static/pictures/Path%208.png)');

        }
    });
    $('#jungle').on({
        'click': function() {
            $('#logo').attr('src', '/static/pictures/LOGO-moodchat-white.png');
            $('h1').css('color', '#ffffff');
            $('h2').css('color', '#ffffff');
            $('.theme').css('color', '#ffffff');
            $('#name').css('color', '#ffba00');
            $('header').css('background-color', '#354528');
            $('#section-left').css('background-color', '#088B37');
            $('#section-right').css('background-image', 'url(/static/pictures/jungle.jpg)');
            $('input').css('background-color', '#86B64B');
            // $('[placeholder]').css('color','#ffffff');
            $('button').css('background-color', '#86B64B');
            $('#button').css('background-color', '#86B64B');
            $('#button-emoji').css('background-image', 'url(/static/pictures/Group%202.png)');
            $('#button-send').css('background-image', 'url(/static/pictures/Path%208.png)');
        }
    });
    $('#savana').on({
        'click': function() {
            $('#logo').attr('src', '/static/pictures/LOGO-moodchat-white.png');
            $('h1').css('color', '#ffffff');
            $('h2').css('color', '#ffffff');
            $('.theme').css('color', '#ffffff');
            $('#name').css('color', '#ffba00');
            $('header').css('background-color', '#4D342E');
            $('#section-left').css('background-color', '#EEA766');
            $('#section-right').css('background-image', 'url(/static/pictures/savana.jpg)');
            $('input').css('background-color', '#BB582A');
            // $('[placeholder]').css('color','#ffffff');
            $('button').css('background-color', '#BB582A');
            $('#button').css('background-color', '#BB582A');
            $('#button-emoji').css('background-image', 'url(/static/pictures/Group%202.png)');
            $('#button-send').css('background-image', 'url(/static/pictures/Path%208.png)');
        }
    });
    $('#sea').on({
        'click': function() {
            $('#logo').attr('src', '/static/pictures/LOGO-moodchat.png');
            $('h1').css('color', '#ffba00');
            $('h2').css('color', '#ffba00');
            $('.theme').css('color', '#000000');
            $('#name').css('color', '#ffba00');
            $('header').css('background-color', '#ffffff');
            $('#section-left').css('background-color', '#EADFCB');
            $('#section-right').css('background-image', 'url(/static/pictures/sea.jpg)');
            $('input').css('background-color', '#1DA3F7');
            // $('[placeholder]').css('color','#ffffff');
            $('button').css('background-color', '#1DA3F7');
            $('#button').css('background-color', '#1DA3F7');
            $('#button-emoji').css('background-image', 'url(/static/pictures/Group%202.png)');
            $('#button-send').css('background-image', 'url(/static/pictures/Path%208.png)');
        }
    });
    $('#light').on({
        'click': function() {
            $('#logo').attr('src', '/static/pictures/LOGO-moodchat.png');
            $('h1').css('color', '#ffba00');
            $('h2').css('color', '#ffba00');
            $('.theme').css('color', '#000000');
            $('#name').css('color', '#ffba00');
            $('header').css('background-color', '#ffffff');
            $('#section-left').css('background-color', '#f0f0f0');
            $('#section-right').css('background-image', 'url(/static/pictures/light.jpg)');
            $('input').css('background-color', '#ffffff');
            // $('[placeholder]').css('color','#ffffff');
            $('button').css('background-color', '#ffffff');
            $('#button').css('background-color', '#ffffff');
            $('#button-emoji').css('background-image', 'url(/static/pictures/Group%201.png)');
            $('#button-send').css('background-image', 'url(/static/pictures/Path%201.png)');
        }
    });

    $('#button-emoji').on({
        'click': function() {
            $('#emoji').css('display', 'block');

        }
    });

});