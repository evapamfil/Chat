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
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0)
            return c.substring(nameEQ.length, c.length);
    }
    return null;
}

//SOCKET
var socket = io('http://localhost:1337');
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
    if (name_user != data.user) {
        $("#name").html(data.user);

        switch (data.avatar) {
            case 'fillion':
                $("#user").attr('src', '/static/pictures/fillion.png');
                break;
            case 'beyonce':
                $("#user").attr('src', '/static/pictures/byonce.png');
                break;
            case 'donald':
                $("#user").attr('src', '/static/pictures/donald.png');
                break;
            case 'kim':
                $("#user").attr('src', '/static/pictures/kim.png');
                break;
            default:
                return;
        }
    }
});

//SEND A MESSAGE
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
    input.value = ''; 
    $('input').attr('value', ''); 
}

document.addEventListener('keydown', function(e) {
    if (e.keyCode === 13) {
        sendmessage();
    }
});

document.getElementById('button-send').addEventListener('click', sendmessage);

$(document).ready(function() {
    
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
            $('input').css('background-color', '#656464');
            $('[placeholder]').css('color','#ffffff');
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
            $('input').css('background-color', '#ffffff');
            $('button').css('background-color', '#ffffff');
            $('#button').css('background-color', '#ffffff');
            $('#button-emoji').css('background-image', 'url(/static/pictures/Group%201.png)');
            $('#button-send').css('background-image', 'url(/static/pictures/Path%201.png)');
            $('#button-gif').css('background-image', 'url(/static/pictures/GIF.png)');
        }
    });
    
    //EMOJI
    $('#button-emoji').on({
        'click': function() {
            if (clik_emoji == 0){
                $('#emoji').css('display', 'block');
                $('#gif').css('display', 'none');
                clik_emoji = 1;
            } else {
                $('#emoji').css('display', 'none');
                clik_emoji = 0;        
            }
        }
    });
    
      
    $('#emoji1').on({
        'click':function() {
            $('input').attr('value', '<img src="../static/pictures/emoji/emoji1.png"/>'); 
        }
    })
    $('#emoji2').on({
        'click':function() {
            $('input').attr('value', '<img src="../static/pictures/emoji/emoji2.png"/>'); 
        }
    })
    $('#emoji3').on({
        'click':function() {
            $('input').attr('value', '<img src="../static/pictures/emoji/emoji3.png"/>'); 
        }
    })
    
    $('#emoji4').on({
        'click':function() {
            $('input').attr('value', '<img src="../static/pictures/emoji/emoji4.png"/>'); 
        }
    })
    $('#emoji5').on({
        'click':function() {
            $('input').attr('value', '<img src="../static/pictures/emoji/emoji5.png"/>'); 
        }
    })
    $('#emoji6').on({
        'click':function() {
            $('input').attr('value', '<img src="../static/pictures/emoji/emoji6.png"/>'); 
        }
    })
    $('#emoji7').on({
        'click':function() {
            $('input').attr('value', '<img src="../static/pictures/emoji/emoji7.png"/>'); 
        }
    })
    $('#emoji8').on({
        'click':function() {
            $('input').attr('value', '<img src="../static/pictures/emoji/emoji8.png"/>'); 
        }
    })
    $('#emoji9').on({
        'click':function() {
            $('input').attr('value', '<img src="../static/pictures/emoji/emoji9.png"/>'); 
        }
    })
    $('#emoji10').on({
        'click':function() {
            $('input').attr('value', '<img src="../static/pictures/emoji/emoji10.png"/>'); 
        }
    })
    $('#emoji11').on({
        'click':function() {
            $('input').attr('value', '<img src="../static/pictures/emoji/emoji11.png"/>'); 
        }
    })
    $('#emoji12').on({
        'click':function() {
            $('input').attr('value', '<img src="../static/pictures/emoji/emoji13.png"/>'); 
        }
    })
    $('#emoji14').on({
        'click':function() {
            $('input').attr('value', '<img src="../static/pictures/emoji/emoji14.png"/>'); 
        }
    })
    $('#emoji15').on({
        'click':function() {
            $('input').attr('value', '<img src="../static/pictures/emoji/emoji15.png"/>'); 
        }
    })
    $('#emoji16').on({
        'click':function() {
            $('input').attr('value', '<img src="../static/pictures/emoji/emoji16.png"/>'); 
        }
    })
    $('#emoji17').on({
        'click':function() {
            $('input').attr('value', '<img src="../static/pictures/emoji/emoji17.png"/>'); 
        }
    })
    $('#emoji18').on({
        'click':function() {
            $('input').attr('value', '<img src="../static/pictures/emoji/emoji18.png"/>'); 
        }
    })
    $('#emoji19').on({
        'click':function() {
            $('input').attr('value', '<img src="../static/pictures/emoji/emoji19.png"/>'); 
        }
    })
    $('#emoji20').on({
        'click':function() {
            $('input').attr('value', '<img src="../static/pictures/emoji/emoji20.png"/>'); 
        }
    })
    $('#emoji21').on({
        'click':function() {
            $('input').attr('value', '<img src="../static/pictures/emoji/emoji21.png"/>'); 
        }
    })
    $('#emoji22').on({
        'click':function() {
            $('input').attr('value', '<img src="../static/pictures/emoji/emoji22.png"/>'); 
        }
    })
    $('#emoji23').on({
        'click':function() {
            $('input').attr('value', '<img src="../static/pictures/emoji/emoji23.png"/>'); 
        }
    })
    $('#emoji24').on({
        'click':function() {
            $('input').attr('value', '<img src="../static/pictures/emoji/emoji24.png"/>'); 
        }
    })
    $('#emoji25').on({
        'click':function() {
            $('input').attr('value', '<img src="../static/pictures/emoji/emoji25.png"/>'); 
        }
    })
    $('#emoji26').on({
        'click':function() {
            $('input').attr('value', '<img src="../static/pictures/emoji/emoji26.png"/>'); 
        }
    })
    $('#emoji27').on({
        'click':function() {
            $('input').attr('value', '<img src="../static/pictures/emoji/emoji27.png"/>'); 
        }
    })
    $('#emoji28').on({
        'click':function() {
            $('input').attr('value', '<img src="../static/pictures/emoji/emoji28.png"/>'); 
        }
    })
    $('#emoji29').on({
        'click':function() {
            $('input').attr('value', '<img src="../static/pictures/emoji/emoji29.png"/>'); 
        }
    })
    $('#emoji30').on({
        'click':function() {
            $('input').attr('value', '<img src="../static/pictures/emoji/emoji30.png"/>'); 
        }
    })
                                 
   
    //API GIPHY
    var url_giphy = "http://api.giphy.com/v1/stickers/search?q=cat&api_key=dc6zaTOxFJmzC ";

    $.get(url_giphy, function(data) {
        console.log(data);
        console.log(data.data[0].images.preview_gif.url);

        console.log(data.data);

        var list_gif = function(data) {
            for (var i = 0; i < data.length; i++) {
                var _t = data[i];
                console.log(_t.images.preview_gif.url);

                var _li = $('<li>');
                var _img = $('<img>').attr('src', _t.images.preview_gif.url);

                _li.append(_img)
                $('#gif ul').append(_li);
                
                $('#gif li').on({
                    'click':function() {
                        $('input').attr('value', '<img src="' + _t.images.preview_gif.url +'"/>'); 
                    }
                })
            }
        }

        list_gif(data.data);

    
    
    $('#button-gif').on({
        'click': function() {
            if(clik_gif == 0){
                $('#gif').css('display', 'block');
                $('#emoji').css('display', 'none');
                clik_gif = 1; 
            }else {
                $('#gif').css('display', 'none');
                clik_gif = 0; 
            }
        }
    });
    

    });

});