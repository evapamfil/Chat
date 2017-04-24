/*============================================================
#title            : Mood'Chat
#description      : JS for Chat socket
#author           : DUPRE ANTHONY & EVA PAMFIL
#date             : 2017/04/05
#version          : Constantly on progress
#usage            : JAVASCRIPT
#notes            : 
=============================================================*/
$(document).ready(function () {
    /* Script for Socket */
    //COOKIE
    function setCookie(name, value, days) {
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            var expires = "; expires=" + date.toGMTString();
        } else {
            var expires = "";
        }
        document.cookie = name + "=" + value + expires + "; path=/";
    }

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

    function eraseCookie(name) {
        setCookie(name, "", -1);
    }

    //SOCKET
    var socket = io('https://mood-chat-anthony91.c9users.io:8080');
    var name_user = getCookie("user");
    var my_avatar = getCookie("avatar");
    var i = 0;

    function send() {
        socket.emit('user_avatar', {
            user: name_user,
            avatar: my_avatar
        });
    }

    socket.on('connect', function () {
        console.log('Nouveau socket!!!!');
        console.log(socket.id); // '65p5..'
        send();
    });

    socket.on('response', function (data) {
        console.log('Client : Response received: ');
        console.log(data);
    });

    console.log(name_user);
    //AVATAR AND NAME OF USER
    socket.on('user_avatar', function (data) {
        for (var i = 0; i < data.length; i++) {
            if (name_user != data[i].user) {
                $("#user").append('<p id ="' + data[i].user + '">' + data[i].user + ',' + '</p>');
                console.log(data[i].user)
            }
        }
    });

    //SEND A MESSAGE
    socket.on('newmessage', function (data) {
        switch (data.avatar) {
            case 'fillion':
                var avatar = document.createElement('img');
                var li = document.createElement('li');
                var text_user = document.createElement('span');
                var text = document.createElement('p');

                text.innerHTML = data.message;
                li.setAttribute("class", "li-chat");
                avatar.setAttribute('src', '/static/pictures/fillion.png');
                li.appendChild(avatar);
                li.appendChild(text);
                text.appendChild(text_user);
                text_user.innerHTML = data.user + ':';
                document.getElementById('chat').appendChild(li);
                console.log(data.user);
                break;
            case 'byonce':
                var avatar = document.createElement('img');
                var li = document.createElement('li');
                var text_user = document.createElement('span');
                var text = document.createElement('p');

                text.innerHTML = data.message;
                li.setAttribute("class", "li-chat");
                avatar.setAttribute('src', '/static/pictures/byonce.png');
                li.appendChild(avatar);
                li.appendChild(text);
                text.appendChild(text_user);
                text_user.innerHTML = data.user + ':';
                document.getElementById('chat').appendChild(li);
                console.log(data.user);
                break;
            case 'donald':
                var avatar = document.createElement('img');
                var li = document.createElement('li');
                var text_user = document.createElement('span');
                var text = document.createElement('p');

                text.innerHTML = data.message;
                li.setAttribute("class", "li-chat");
                avatar.setAttribute('src', '/static/pictures/donald.png');
                li.appendChild(avatar);
                li.appendChild(text);
                text.appendChild(text_user);
                text_user.innerHTML = data.user + ':';
                document.getElementById('chat').appendChild(li);
                console.log(data.user);
                break;
            case 'kim':
                var avatar = document.createElement('img');
                var li = document.createElement('li');
                var text_user = document.createElement('span');
                var text = document.createElement('p');

                text.innerHTML = data.message;
                li.setAttribute("class", "li-chat");
                avatar.setAttribute('src', '/static/pictures/kim.png');
                li.appendChild(avatar);
                li.appendChild(text);
                text.appendChild(text_user);
                text_user.innerHTML = data.user + ':';
                document.getElementById('chat').appendChild(li);
                console.log(data.user);
                break;
            default:
                return;
        }
        $('#chat .li-chat p').css('color', color_text);
        $('#chat .li-chat p').css('background-color', color);
        $('#chat').scrollTop($('#chat')[0].scrollHeight);
    });


    function sendmessage() {
        var input = $('input'),
            message_object = {
                message: input.val(),
                user: name_user,
                avatar: my_avatar
            };

        if (input.val() == '') {
            return alert('please write something');
        }

        switch (my_avatar) {
            case 'fillion':
                var avatar = document.createElement('img');
                var li = document.createElement('li');
                var text_user = document.createElement('span')
                var text = document.createElement('p');

                text.innerHTML = input.val();
                li.setAttribute("class", "right-li");
                avatar.setAttribute('src', '/static/pictures/fillion.png');
                li.appendChild(text);
                text.appendChild(text_user);
                text_user.innerHTML = name_user + ':';
                li.appendChild(avatar);
                document.getElementById('chat').appendChild(li);
                console.log(name_user)
                break;
            case 'byonce':
                var avatar = document.createElement('img');
                var li = document.createElement('li');
                var text_user = document.createElement('span')
                var text = document.createElement('p');

                text.innerHTML = input.val();
                li.setAttribute("class", "right-li");
                avatar.setAttribute('src', '/static/pictures/byonce.png');
                li.appendChild(text);
                text.appendChild(text_user);
                text_user.innerHTML = name_user + ':';
                li.appendChild(avatar);
                document.getElementById('chat').appendChild(li);
                console.log(name_user)
                break;
            case 'donald':
                var avatar = document.createElement('img');
                var li = document.createElement('li');
                var text_user = document.createElement('span')
                var text = document.createElement('p');

                text.innerHTML = input.val();
                li.setAttribute("class", "right-li");
                avatar.setAttribute('src', '/static/pictures/donald.png');
                li.appendChild(text);
                text.appendChild(text_user);
                text_user.innerHTML = name_user + ':';
                li.appendChild(avatar);
                document.getElementById('chat').appendChild(li);
                console.log(name_user)
                break;
            case 'kim':
                var avatar = document.createElement('img');
                var li = document.createElement('li');
                var text_user = document.createElement('span');
                var text = document.createElement('p');

                text.innerHTML = input.val();
                li.setAttribute("class", "right-li");
                avatar.setAttribute('src', '/static/pictures/kim.png');
                li.appendChild(text);
                text.appendChild(text_user);
                text_user.innerHTML = name_user + ':';
                li.appendChild(avatar);
                document.getElementById('chat').appendChild(li);
                console.log(name_user)
                break;
            default: 
                return;
        }

        $('#chat').scrollTop($('#chat')[0].scrollHeight);
        $('#chat .right-li p').css('color', color_text);
        $('#chat .right-li p').css('background-color', color);

        socket.emit('message', message_object)
        input.val('');
        $('#emoji').css('display', 'none');
        $('#gif').css('display', 'none');
    }

    document.addEventListener('keydown', function (e) {
        if (e.keyCode === 13) {
            sendmessage();
        }
    });

    document.getElementById('button-send').addEventListener('click', sendmessage);

    //DISCONNECT
    $('#disconnect').click(function () {
        socket.emit('endchat', name_user);
    })

    $('#logo_home').click(function () {
        socket.emit('endchat', name_user);
    })

    socket.on('user-deconnect', function (data) {
        var user = document.getElementById(data);
        if (user.innerHTML == data + ',') {
            user.innerHTML = "";
        }
    });


    var clik_emoji = 0,
        clik_gif = 0;

    //FRONT

    
    $('#dark').on({
        'click': function () {
            $('#logo').attr('src', '/static/pictures/LOGO-moodchat-white.png');
            $('h1').css('color', '#ffffff');
            $('h2').css('color', '#ffffff');
            $('.theme').css('color', '#ffffff');
            $('#name').css('color', '#ffffff');
            $('header').css('background-color', '#2C2C2C');
            $('#section-left').css('background-color', '#000000');
            $('#section-right').css('background-image', 'url(/static/pictures/black.jpg)');
            $('#section-right').css('background-size', '');
            $('input').css('background-color', '#656464');
            $('input').css('color', 'white');
            $('button').css('background-color', '#656464');
            $('#button').css('background-color', '#656464');
            $('#button-emoji').css('background-image', 'url(/static/pictures/Group%202.png)');
            $('#button-send').css('background-image', 'url(/static/pictures/Path%208.png)');
            $('#button-gif').css('background-image', 'url(/static/pictures/gif_white.png)');
            $('h2').css('display', 'block');
            $('#first-line').css('display', 'block');
            $('#second-line').css('display', 'block');
            $('input').addClass('input-color');


        }
    });

    $('#space').on({
        'click': function () {
            $('#logo').attr('src', '/static/pictures/LOGO-moodchat-white.png');
            $('h1').css('color', '#ffffff');
            $('h2').css('color', '#ffffff');
            $('.theme').css('color', '#ffffff');
            $('#name').css('color', '#ffba00');
            $('header').css('background-color', '#395464');
            $('#section-left').css('background-color', '#242B38');
            $('#section-right').css('background-image', 'url(/static/pictures/space.jpg)');
            $('#section-right').css('background-size', 'cover');
            $('input').css('background-color', '#636A89');
            $('input').css('color', 'white');
            $('button').css('background-color', '#636A89');
            $('#button').css('background-color', '#636A89');
            $('#button-emoji').css('background-image', 'url(/static/pictures/Group%202.png)');
            $('#button-send').css('background-image', 'url(/static/pictures/Path%208.png)');
            $('#button-gif').css('background-image', 'url(/static/pictures/gif_white.png)');
            $('h2').css('display', 'none');
            $('#first-line').css('display', 'none');
            $('#second-line').css('display', 'none');
            $('#chat p').css('background-color', ' rgba(255,255,255,0.6)');
            $('#chat p').css('color', 'black');
            $('input').addClass('input-color');

        }
    });
    $('#jungle').on({
        'click': function () {
            $('#logo').attr('src', '/static/pictures/LOGO-moodchat-white.png');
            $('h1').css('color', '#ffffff');
            $('h2').css('color', '#ffffff');
            $('.theme').css('color', '#ffffff');
            $('#name').css('color', '#ffba00');
            $('header').css('background-color', '#354528');
            $('#section-left').css('background-color', '#088B37');
            $('#section-right').css('background-image', 'url(/static/pictures/jungle.jpg)');
            $('#section-right').css('background-size', 'cover');
            $('input').css('background-color', '#86B64B');
            $('input').css('color', 'white');
            $('button').css('background-color', '#86B64B');
            $('#button').css('background-color', '#86B64B');
            $('#button-emoji').css('background-image', 'url(/static/pictures/Group%202.png)');
            $('#button-send').css('background-image', 'url(/static/pictures/Path%208.png)');
            $('#button-gif').css('background-image', 'url(/static/pictures/gif_white.png)');
            $('h2').css('display', 'none');
            $('#first-line').css('display', 'none');
            $('#second-line').css('display', 'none');
            $('#chat p').css('background-color', ' rgba(255,255,255,0.6)');
            $('#chat p').css('color', 'black');
            $('input').addClass('input-color');
        }
    });
    $('#savana').on({
        'click': function () {
            $('#logo').attr('src', '/static/pictures/LOGO-moodchat-white.png');
            $('h1').css('color', '#ffffff');
            $('h2').css('color', '#ffffff');
            $('.theme').css('color', '#ffffff');
            $('#name').css('color', '#ffba00');
            $('header').css('background-color', '#4D342E');
            $('#section-left').css('background-color', '#EEA766');
            $('#section-right').css('background-image', 'url(/static/pictures/savana.jpg)');
            $('#section-right').css('background-size', 'cover');
            $('input').css('background-color', '#BB582A');
            $('input').css('color', 'white');
            $('button').css('background-color', '#BB582A');
            $('#button').css('background-color', '#BB582A');
            $('#button-emoji').css('background-image', 'url(/static/pictures/Group%202.png)');
            $('#button-send').css('background-image', 'url(/static/pictures/Path%208.png)');
            $('#button-gif').css('background-image', 'url(/static/pictures/gif_white.png)');
            $('h2').css('display', 'none');
            $('#first-line').css('display', 'none');
            $('#second-line').css('display', 'none');
            $('#chat p').css('background-color', ' rgba(255,255,255,0.6)');
            $('#chat p').css('color', 'black');
            $('input').addClass('input-color');
        }
    });
    $('#sea').on({
        'click': function () {
            $('#logo').attr('src', '/static/pictures/LOGO-moodchat.png');
            $('h1').css('color', '#ffba00');
            $('h2').css('color', '#ffba00');
            $('.theme').css('color', '#000000');
            $('#name').css('color', '#ffba00');
            $('header').css('background-color', '#ffffff');
            $('#section-left').css('background-color', '#EADFCB');
            $('#section-right').css('background-image', 'url(/static/pictures/sea.jpg)');
            $('#section-right').css('background-size', 'cover');
            $('input').css('background-color', '#1DA3F7');
            $('input').css('color', 'white');
            $('button').css('background-color', '#1DA3F7');
            $('#button').css('background-color', '#1DA3F7');
            $('#button-emoji').css('background-image', 'url(/static/pictures/Group%202.png)');
            $('#button-send').css('background-image', 'url(/static/pictures/Path%208.png)');
            $('#button-gif').css('background-image', 'url(/static/pictures/gif_white.png)');
            $('h2').css('display', 'none');
            $('#first-line').css('display', 'none');
            $('#second-line').css('display', 'none');
            $('#chat p').css('background-color', ' rgba(255,255,255,0.6)');
            $('#chat p').css('color', 'black');
            $('input').addClass('input-color');
        }
    });
    $('#light').on({
        'click': function () {
            $('#logo').attr('src', '/static/pictures/LOGO-moodchat.png');
            $('header').css('background-color', '#faf7f7')
            $('h1').css('color', '#ffba00');
            $('h2').css('color', '#ffba00');
            $('.theme').css('color', '#000000');
            $('#name').css('color', '#ffba00');
            $('#section-left').css('background-color', '#f0f0f0');
            $('#section-right').css('background-image', 'url(/static/pictures/light.jpg)');
            $('#section-right').css('background-size', '');
            $('input').css('background-color', '#ffffff');
            $('input').css('color', 'black');
            $('button').css('background-color', '#ffffff');
            $('#button').css('background-color', '#ffffff');
            $('#button-emoji').css('background-image', 'url(/static/pictures/Group%201.png)');
            $('#button-send').css('background-image', 'url(/static/pictures/Path%201.png)');
            $('#button-gif').css('background-image', 'url(/static/pictures/gif.png)');
            $('h2').css('display', 'block');
            $('#first-line').css('display', 'block');
            $('#second-line').css('display', 'block');
            $('input').removeClass('input-color');

        }
    });

    // COLOR
    var color; 
    var color_text; 
    $('#red').on({
        'click': function () {
            color = '#ff0000';
            color_text = 'white'; 
            $('#chat p').css('background-color', '#ff0000');
            $('#chat p').css('color', '#ffffff');
        }
    });
    $('#orange').on({
        'click': function () {
            color = '#ffa700';
            color_text = 'white'; 
            $('#chat p').css('background-color', '#ffa700');
            $('#chat p').css('color', '#ffffff');
        }
    });
    $('#yellow').on({
        'click': function () {
            color = '#ffeb00'
            color_text = 'black'; 
            $('#chat p').css('background-color', '#ffeb00');
            $('#chat p').css('color', 'black');
        }
    });
    $('#green').on({
        'click': function () {
            color = '#45ff00'; 
            color_text = 'white'; 
            $('#chat p').css('background-color', '#45ff00');
            $('#chat p').css('color', '#ffffff');
        }
    });
    $('#turquoise').on({
        'click': function () {
            color = '#00ffb1'; 
            color_text = 'black'; 
            $('#chat p').css('background-color', '#00ffb1');
            $('#chat p').css('color', 'black');
        }
    });
    $('#light-blue').on({
        'click': function () {
            color = '#00fff5';
            color_text = 'black'; 
            $('#chat p').css('background-color', '#00fff5');
            $('#chat p').css('color', 'black');
        }
    });
    $('#blue').on({
        'click': function () {
            color = '#00d8ff';
            color_text = 'white'; 
            $('#chat p').css('background-color', '#00d8ff');
            $('#chat p').css('color', '#ffffff');
        }
    });
    $('#dark-blue').on({
        'click': function () {
            color = '#0089ff';
            color_text = 'white'; 
            $('#chat p').css('background-color', '#0089ff');
            $('#chat p').css('color', '#ffffff');
        }
    });
    $('#dark-blue1').on({
        'click': function () {
            color = '#2700ff'; 
            color_text = 'white'; 
            $('#chat p').css('background-color', '#2700ff');
            $('#chat p').css('color', '#ffffff');
        }
    });
    $('#purple').on({
        'click': function () {
            color = '#9d00ff';
            color_text = 'white'; 
            $('#chat p').css('background-color', '#9d00ff');
            $('#chat p').css('color', '#ffffff');
        }
    });
    $('#light-purple').on({
        'click': function () {
            color = '#e200ff';
            color_text = 'white'; 
            $('#chat p').css('background-color', '#e200ff');
            $('#chat p').css('color', '#ffffff');
        }
    });
    $('#pink').on({
        'click': function () {
            color = '#ff00a7'; 
            color_text = 'white'; 
            $('#chat p').css('background-color', '#ff00a7');
            $('#chat p').css('color', '#ffffff');
        }
    });
    $('#light-pink').on({
        'click': function () {
            color = '#ff98db'; 
            color_text = 'black'; 
            $('#chat p').css('background-color', '#ff98db');
            $('#chat p').css('color', 'black');
        }
    });
    $('#dark-color').on({
        'click': function () {
            color = '#000000';
            color_text = 'white'; 
            $('#chat p').css('background-color', '#000000');
            $('#chat p').css('color', '#ffffff');
        }
    });
    $('#grey').on({
        'click': function () {
            color = '#9b9b9b'; 
            color_text = 'black'; 
            $('#chat p').css('background-color', '#9b9b9b');
            $('#chat p').css('color', 'black');
        }
    });
    $('#white').on({
        'click': function () {
            color = '#ffffff'; 
            color_text = 'black'; 
            $('#chat p').css('background-color', '#ffffff');
            $('#chat p').css('color', 'black');

        }
    });
    //EMOJI
    $('#button-emoji').on({
        'click': function () {
            if (clik_emoji == 0) {
                $('#emoji').css('display', 'block');
                $('#gif').css('display', 'none');
                clik_emoji = 1;
            } else {
                $('#emoji').css('display', 'none');
                clik_emoji = 0;
            }
        }
    });

    //SEND EMOJI

 $("#emoji1").click(function () {
        var _smiley = $('#emoji1').find('p');
        var smiley = _smiley[0].innerText;
        var message = $('input').val();
        $('input').val(message + ' ' + smiley + ' ').focus();
    });

    $("#emoji2").click(function () {
        var _smiley = $('#emoji2').find('p');
        var smiley = _smiley[0].innerText;
        var message = $('input').val();
        $('input').val(message + ' ' + smiley + ' ').focus();
    });

    $("#emoji3").click(function () {
        var _smiley = $('#emoji3').find('p');
        var smiley = _smiley[0].innerText;
        var message = $('input').val();
        $('input').val(message + ' ' + smiley + ' ').focus();
    });

    $("#emoji4").click(function () {
        var _smiley = $('#emoji4').find('p');
        var smiley = _smiley[0].innerText;
        var message = $('input').val();
        $('input').val(message + ' ' + smiley + ' ').focus();
    });

    $("#emoji5").click(function () {
        var _smiley = $('#emoji5').find('p');
        var smiley = _smiley[0].innerText;
        var message = $('input').val();
        $('input').val(message + ' ' + smiley + ' ').focus();
    });

    $("#emoji6").click(function () {
        var _smiley = $('#emoji6').find('p');
        var smiley = _smiley[0].innerText;
        var message = $('input').val();
        $('input').val(message + ' ' + smiley + ' ').focus();
    });

    $("#emoji7").click(function () {
        var _smiley = $('#emoji7').find('p');
        var smiley = _smiley[0].innerText;
        var message = $('input').val();
        $('input').val(message + ' ' + smiley + ' ').focus();
    });

    $("#emoji8").click(function () {
        var _smiley = $('#emoji8').find('p');
        var smiley = _smiley[0].innerText;
        var message = $('input').val();
        $('input').val(message + ' ' + smiley + ' ').focus();
    });

    $("#emoji9").click(function () {
        var _smiley = $('#emoji9').find('p');
        var smiley = _smiley[0].innerText;
        var message = $('input').val();
        $('input').val(message + ' ' + smiley + ' ').focus();
    });

    $("#emoji10").click(function () {
        var _smiley = $('#emoji10').find('p');
        var smiley = _smiley[0].innerText;
        var message = $('input').val();
        $('input').val(message + ' ' + smiley + ' ').focus();
    });

    $("#emoji11").click(function () {
        var _smiley = $('#emoji11').find('p');
        var smiley = _smiley[0].innerText;
        var message = $('input').val();
        $('input').val(message + ' ' + smiley + ' ').focus();
    });

    $("#emoji12").click(function () {
        var _smiley = $('#emoji12').find('p');
        var smiley = _smiley[0].innerText;
        var message = $('input').val();
        $('input').val(message + ' ' + smiley + ' ').focus();
    });

    $("#emoji13").click(function () {
        var _smiley = $('#emoji13').find('p');
        var smiley = _smiley[0].innerText;
        var message = $('input').val();
        $('input').val(message + ' ' + smiley + ' ').focus();
    });

    $("#emoji14").click(function () {
        var _smiley = $('#emoji14').find('p');
        var smiley = _smiley[0].innerText;
        var message = $('input').val();
        $('input').val(message + ' ' + smiley + ' ').focus();
    });

    $("#emoji15").click(function () {
        var _smiley = $('#emoji15').find('p');
        var smiley = _smiley[0].innerText;
        var message = $('input').val();
        $('input').val(message + ' ' + smiley + ' ').focus();
    });

    $("#emoji16").click(function () {
        var _smiley = $('#emoji16').find('p');
        var smiley = _smiley[0].innerText;
        var message = $('input').val();
        $('input').val(message + ' ' + smiley + ' ').focus();
    });

    $("#emoji17").click(function () {
        var _smiley = $('#emoji17').find('p');
        var smiley = _smiley[0].innerText;
        var message = $('input').val();
        $('input').val(message + ' ' + smiley + ' ').focus();
    });

    $("#emoji18").click(function () {
        var _smiley = $('#emoji18').find('p');
        var smiley = _smiley[0].innerText;
        var message = $('input').val();
        $('input').val(message + ' ' + smiley + ' ').focus();
    });

    $("#emoji19").click(function () {
        var _smiley = $('#emoji19').find('p');
        var smiley = _smiley[0].innerText;
        var message = $('input').val();
        $('input').val(message + ' ' + smiley + ' ').focus();
    });

    $("#emoji20").click(function () {
        var _smiley = $('#emoji20').find('p');
        var smiley = _smiley[0].innerText;
        var message = $('input').val();
        $('input').val(message + ' ' + smiley + ' ').focus();
    });
    $("#emoji20").click(function () {
        var _smiley = $('#emoji20').find('p');
        var smiley = _smiley[0].innerText;
        var message = $('input').val();
        $('input').val(message + ' ' + smiley + ' ').focus();
    });

    $("#emoji21").click(function () {
        var _smiley = $('#emoji21').find('p');
        var smiley = _smiley[0].innerText;
        var message = $('input').val();
        $('input').val(message + ' ' + smiley + ' ').focus();
    });

    $("#emoji22").click(function () {
        var _smiley = $('#emoji22').find('p');
        var smiley = _smiley[0].innerText;
        var message = $('input').val();
        $('input').val(message + ' ' + smiley + ' ').focus();
    });

    $("#emoji23").click(function () {
        var _smiley = $('#emoji23').find('p');
        var smiley = _smiley[0].innerText;
        var message = $('input').val();
        $('input').val(message + ' ' + smiley + ' ').focus();
    });

    $("#emoji24").click(function () {
        var _smiley = $('#emoji24').find('p');
        var smiley = _smiley[0].innerText;
        var message = $('input').val();
        $('input').val(message + ' ' + smiley + ' ').focus();
    });

    $("#emoji25").click(function () {
        var _smiley = $('#emoji25').find('p');
        var smiley = _smiley[0].innerText;
        var message = $('input').val();
        $('input').val(message + ' ' + smiley + ' ').focus();
    });

    $("#emoji26").click(function () {
        var _smiley = $('#emoji26').find('p');
        var smiley = _smiley[0].innerText;
        var message = $('input').val();
        $('input').val(message + ' ' + smiley + ' ').focus();
    });

    $("#emoji27").click(function () {
        var _smiley = $('#emoji27').find('p');
        var smiley = _smiley[0].innerText;
        var message = $('input').val();
        $('input').val(message + ' ' + smiley + ' ').focus();
    });

    $("#emoji28").click(function () {
        var _smiley = $('#emoji28').find('p');
        var smiley = _smiley[0].innerText;
        var message = $('input').val();
        $('input').val(message + ' ' + smiley + ' ').focus();
    });

    $("#emoji29").click(function () {
        var _smiley = $('#emoji29').find('p');
        var smiley = _smiley[0].innerText;
        var message = $('input').val();
        $('input').val(message + ' ' + smiley + ' ').focus();
    });

    $("#emoji30").click(function () {
        var _smiley = $('#emoji30').find('p');
        var smiley = _smiley[0].innerText;
        var message = $('input').val();
        $('input').val(message + ' ' + smiley + ' ').focus();
    });

    $('#button-gif').on({
        'click': function () {
            if (clik_gif == 0) {
                $('#gif').css('display', 'block');
                $('#emoji').css('display', 'none');
                clik_gif = 1;
            } else {
                $('#gif').css('display', 'none');
                clik_gif = 0;
            }
        }
    });

    function list_gif(data) {
        for (var i = 0; i < data.length; i++) {
            var _t = data[i];

            var _li = $('<li>');
            var _img = $('<img>').attr('src', _t.images.preview_gif.url);

            _li.append(_img)
            $('#gif ul').append(_li);

            _img.on({
                'click': function () {
                    $('input').val('<img src="' + $(this).attr('src') + '"/>');
                }
            });
        }
    }

    //API GIPHY
    var url_giphy = "https://api.giphy.com/v1/stickers/search?q=all&api_key=dc6zaTOxFJmzC";

    $.get(url_giphy, function (data) {
        console.log(data); 
        list_gif(data.data);

    });
});
