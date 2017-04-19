/*============================================================
#title            : Mood'Chat
#description      : JS for Chat socket
#author           : DUPRE ANTHONY & EVA PAMFIL
#date             : 2017/04/05
#version          : Constantly on progress
#usage            : JAVASCRIPT
#notes            : 
=============================================================*/
$(document).ready(function() {
    /* Script for Socket */
    //COOKIE
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

    //SOCKET
    var socket = io('https://mood-chat-anthony91.c9users.io:8080');
    var name_user = getCookie("user");
    var my_avatar = getCookie("avatar");

    function send() {
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

    //AVATAR AND NAME OF USER
    socket.on('user_avatar', function(data) {
        $("#name").remove();
            for (var i=0; i<data.length; i++){
                if (name_user != data[i].user) {
                    
                    switch (data[i].avatar) {
                        case 'fillion':
                            $("#user").append('<img src="/static/pictures/fillion.png" alt="user">');
                            $("#user").append('<p>' + data[i].user + '</p>');
                            break;
                        case 'beyonce':
                            $("#user").append('<img src="/static/pictures/byonce.png" alt="user">');
                            $("#user").append('<p>' + data[i].user + '</p>');
                            break;
                        case 'donald':
                            $("#user").append('<img src="/static/pictures/donald.png" alt="user">');
                            $("#user").append('<p>' + data[i].user + '</p>');
                            break;
                        case 'kim':
                            $("#user").append('<img src="/static/pictures/kim.png" alt="user">');
                            $("#user").append('<p>' + data[i].user + '</p>');
                            break;
                        default:
                            return;
                    }
            }
        }
    });

    //SEND A MESSAGE
    socket.on('newmessage', function(toto) {
       console.log('newmessage', toto)
       var avatar = document.createElement('img');
       var li = document.createElement('li');
       var text = document.createElement('p');
       text.innerHTML = toto;
       li.setAttribute("class", "li-chat");
       avatar.setAttribute("src", "/static/pictures/byonce.png");
       li.appendChild(avatar);
       li.appendChild(text);
       document.getElementById('chat').appendChild(li);
    });


    function sendmessage() {
        var input = $('input');

        if (input.val() == '') {
            return alert('please write something');
        }

        socket.emit('message', input.val())
        input.val('');
    }

    document.addEventListener('keydown', function(e) {
        if (e.keyCode === 13) {
            sendmessage();
        }
    });

    document.getElementById('button-send').addEventListener('click', sendmessage);

    var clik_emoji = 0,
        clik_gif = 0;

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
            $('#section-right').css('background-size', '');
            $('input').css('background-color', '#656464');
            $('[placeholder]').css('color', '#ffffff');
            $('button').css('background-color', '#656464');
            $('#button').css('background-color', '#656464');
            $('#button-emoji').css('background-image', 'url(/static/pictures/Group%202.png)');
            $('#button-send').css('background-image', 'url(/static/pictures/Path%208.png)');
            $('#button-gif').css('background-image', 'url(/static/pictures/GIF_white.png)');
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
            $('#section-right').css('background-size', 'cover');
            $('input').css('background-color', '#636A89');
            $('button').css('background-color', '#636A89');
            $('#button').css('background-color', '#636A89');
            $('#button-emoji').css('background-image', 'url(/static/pictures/Group%202.png)');
            $('#button-send').css('background-image', 'url(/static/pictures/Path%208.png)');
            $('#button-gif').css('background-image', 'url(/static/pictures/GIF_white.png)');

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
            $('#section-right').css('background-size', 'cover');
            $('input').css('background-color', '#86B64B');
            $('button').css('background-color', '#86B64B');
            $('#button').css('background-color', '#86B64B');
            $('#button-emoji').css('background-image', 'url(/static/pictures/Group%202.png)');
            $('#button-send').css('background-image', 'url(/static/pictures/Path%208.png)');
            $('#button-gif').css('background-image', 'url(/static/pictures/GIF_white.png)');
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
            $('#section-right').css('background-size', 'cover');
            $('input').css('background-color', '#BB582A');
            $('button').css('background-color', '#BB582A');
            $('#button').css('background-color', '#BB582A');
            $('#button-emoji').css('background-image', 'url(/static/pictures/Group%202.png)');
            $('#button-send').css('background-image', 'url(/static/pictures/Path%208.png)');
            $('#button-gif').css('background-image', 'url(/static/pictures/GIF_white.png)');
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
            $('#section-right').css('background-size', 'cover');
            $('input').css('background-color', '#1DA3F7');
            $('button').css('background-color', '#1DA3F7');
            $('#button').css('background-color', '#1DA3F7');
            $('#button-emoji').css('background-image', 'url(/static/pictures/Group%202.png)');
            $('#button-send').css('background-image', 'url(/static/pictures/Path%208.png)');
            $('#button-gif').css('background-image', 'url(/static/pictures/GIF_white.png)');
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
            $('#section-right').css('background-size', '');
            $('input').css('background-color', '#ffffff');
            $('button').css('background-color', '#ffffff');
            $('#button').css('background-color', '#ffffff');
            $('#button-emoji').css('background-image', 'url(/static/pictures/Group%201.png)');
            $('#button-send').css('background-image', 'url(/static/pictures/Path%201.png)');
            $('#button-gif').css('background-image', 'url(/static/pictures/GIF.png)');

        }
    });

    //EMOJI
    $('#button-emoji').on({'click': function() {
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

    $("#emoji1").click(function() {
        var _smiley = $('#emoji1').find('img');
        var smiley = _smiley[0].outerHTML;
        var message = $('input').val();
        $('input').val(message + ' ' + smiley + ' ').focus();
    });

    $("#emoji2").click(function() {
        var _smiley = $('#emoji2').find('img');
        var smiley = _smiley[0].outerHTML;
        var message = $('input').val();
        $('input').val(message + ' ' + smiley + ' ').focus();
    });

    $("#emoji3").click(function() {
        var _smiley = $('#emoji3').find('img');
        var smiley = _smiley[0].outerHTML;
        var message = $('input').val();
        $('input').val(message + ' ' + smiley + ' ').focus();
    });

    $("#emoji4").click(function() {
        var _smiley = $('#emoji4').find('img');
        var smiley = _smiley[0].outerHTML;
        var message = $('input').val();
        $('input').val(message + ' ' + smiley + ' ').focus();
    });

    $("#emoji5").click(function() {
        var _smiley = $('#emoji5').find('img');
        var smiley = _smiley[0].outerHTML;
        var message = $('input').val();
        $('input').val(message + ' ' + smiley + ' ').focus();
    });

    $("#emoji6").click(function() {
        var _smiley = $('#emoji6').find('img');
        var smiley = _smiley[0].outerHTML;
        var message = $('input').val();
        $('input').val(message + ' ' + smiley + ' ').focus();
    });

    $("#emoji7").click(function() {
        var _smiley = $('#emoji7').find('img');
        var smiley = _smiley[0].outerHTML;
        var message = $('input').val();
        $('input').val(message + ' ' + smiley + ' ').focus();
    });

    $("#emoji8").click(function() {
        var _smiley = $('#emoji8').find('img');
        var smiley = _smiley[0].outerHTML;
        var message = $('input').val();
        $('input').val(message + ' ' + smiley + ' ').focus();
    });

    $("#emoji9").click(function() {
        var _smiley = $('#emoji9').find('img');
        var smiley = _smiley[0].outerHTML;
        var message = $('input').val();
        $('input').val(message + ' ' + smiley + ' ').focus();
    });

    $("#emoji10").click(function() {
        var _smiley = $('#emoji10').find('img');
        var smiley = _smiley[0].outerHTML;
        var message = $('input').val();
        $('input').val(message + ' ' + smiley + ' ').focus();
    });

    $("#emoji11").click(function() {
        var _smiley = $('#emoji11').find('img');
        var smiley = _smiley[0].outerHTML;
        var message = $('input').val();
        $('input').val(message + ' ' + smiley + ' ').focus();
    });

    $("#emoji12").click(function() {
        var _smiley = $('#emoji12').find('img');
        var smiley = _smiley[0].outerHTML;
        var message = $('input').val();
        $('input').val(message + ' ' + smiley + ' ').focus();
    });

    $("#emoji13").click(function() {
        var _smiley = $('#emoji13').find('img');
        var smiley = _smiley[0].outerHTML;
        var message = $('input').val();
        $('input').val(message + ' ' + smiley + ' ').focus();
    });

    $("#emoji14").click(function() {
        var _smiley = $('#emoji14').find('img');
        var smiley = _smiley[0].outerHTML;
        var message = $('input').val();
        $('input').val(message + ' ' + smiley + ' ').focus();
    });

    $("#emoji15").click(function() {
        var _smiley = $('#emoji15').find('img');
        var smiley = _smiley[0].outerHTML;
        var message = $('input').val();
        $('input').val(message + ' ' + smiley + ' ').focus();
    });

    $("#emoji16").click(function() {
        var _smiley = $('#emoji16').find('img');
        var smiley = _smiley[0].outerHTML;
        var message = $('input').val();
        $('input').val(message + ' ' + smiley + ' ').focus();
    });

    $("#emoji17").click(function() {
        var _smiley = $('#emoji17').find('img');
        var smiley = _smiley[0].outerHTML;
        var message = $('input').val();
        $('input').val(message + ' ' + smiley + ' ').focus();
    });

    $("#emoji18").click(function() {
        var _smiley = $('#emoji18').find('img');
        var smiley = _smiley[0].outerHTML;
        var message = $('input').val();
        $('input').val(message + ' ' + smiley + ' ').focus();
    });

    $("#emoji19").click(function() {
        var _smiley = $('#emoji19').find('img');
        var smiley = _smiley[0].outerHTML;
        var message = $('input').val();
        $('input').val(message + ' ' + smiley + ' ').focus();
    });

    $("#emoji20").click(function() {
        var _smiley = $('#emoji20').find('img');
        var smiley = _smiley[0].outerHTML;
        var message = $('input').val();
        $('input').val(message + ' ' + smiley + ' ').focus();
    });
    $("#emoji20").click(function() {
        var _smiley = $('#emoji20').find('img');
        var smiley = _smiley[0].outerHTML;
        var message = $('input').val();
        $('input').val(message + ' ' + smiley + ' ').focus();
    });

    $("#emoji21").click(function() {
        var _smiley = $('#emoji21').find('img');
        var smiley = _smiley[0].outerHTML;
        var message = $('input').val();
        $('input').val(message + ' ' + smiley + ' ').focus();
    });

    $("#emoji22").click(function() {
        var _smiley = $('#emoji22').find('img');
        var smiley = _smiley[0].outerHTML;
        var message = $('input').val();
        $('input').val(message + ' ' + smiley + ' ').focus();
    });

    $("#emoji23").click(function() {
        var _smiley = $('#emoji23').find('img');
        var smiley = _smiley[0].outerHTML;
        var message = $('input').val();
        $('input').val(message + ' ' + smiley + ' ').focus();
    });

    $("#emoji24").click(function() {
        var _smiley = $('#emoji24').find('img');
        var smiley = _smiley[0].outerHTML;
        var message = $('input').val();
        $('input').val(message + ' ' + smiley + ' ').focus();
    });

    $("#emoji25").click(function() {
        var _smiley = $('#emoji25').find('img');
        var smiley = _smiley[0].outerHTML;
        var message = $('input').val();
        $('input').val(message + ' ' + smiley + ' ').focus();
    });

    $("#emoji26").click(function() {
        var _smiley = $('#emoji26').find('img');
        var smiley = _smiley[0].outerHTML;
        var message = $('input').val();
        $('input').val(message + ' ' + smiley + ' ').focus();
    });

    $("#emoji27").click(function() {
        var _smiley = $('#emoji27').find('img');
        var smiley = _smiley[0].outerHTML;
        var message = $('input').val();
        $('input').val(message + ' ' + smiley + ' ').focus();
    });

    $("#emoji28").click(function() {
        var _smiley = $('#emoji28').find('img');
        var smiley = _smiley[0].outerHTML;
        var message = $('input').val();
        $('input').val(message + ' ' + smiley + ' ').focus();
    });

    $("#emoji29").click(function() {
        var _smiley = $('#emoji29').find('img');
        var smiley = _smiley[0].outerHTML;
        var message = $('input').val();
        $('input').val(message + ' ' + smiley + ' ').focus();
    });

    $("#emoji30").click(function() {
        var _smiley = $('#emoji30').find('img');
        var smiley = _smiley[0].outerHTML;
        var message = $('input').val();
        $('input').val(message + ' ' + smiley + ' ').focus();
    });

    $('#button-gif').on({'click': function() {
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
                'click': function() {
                    $('input').val('<img src="' + $(this).attr('src') + '"/>');
                }
            });
        }
    }

    //API GIPHY
    var url_giphy = "https://api.giphy.com/v1/stickers/search?q=cat&api_key=dc6zaTOxFJmzC ";

    $.get(url_giphy, function(data) {

        list_gif(data.data);

    });
});