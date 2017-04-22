/*============================================================
#title            : Mood'Chat
#description      : JS for home page 
#author           : DUPRE ANTHONY
#date             : 2017/04/05
#version          : Constantly on progress
#usage            : JAVASCRIPT / JQUERY
#notes            : 
=============================================================*/
$(document).ready(function () {

    var input_name = document.getElementById("name");

    //SWIPER
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        speed: 400,
        keyboardControl: true,
        freeMode: true,
        loop: true,
        autoplay: 3000
    });

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

    //INPUT
    $("#button").click(function (e) {
        if (input_name.value == "") {
            alert("To continue we need your name ! ;)")
        } else {
            var name = $("#name").val();
            var avatar = $('input[name=avatar]:checked').val();
            setCookie("user", name, 30);
            setCookie("avatar", avatar, 30);
            $("#button").attr('href', '/static/page.html')
        }
    });

    //CLICK / FOCUS
    var click = 0;

    //FILLION
    $("#avatar_fillion").click(function () {
        console.log("hi");
        $("#fillion").css("border", "#ffba00 2px solid");
        $("#fillion").css("border-radius", "35px");

        $("#byonce").css("border", "");
        $("#byonce").css("border-radius", "");

        $("#donald").css("border", "");
        $("#donald").css("border-radius", "");

        $("#kim").css("border", "");
        $("#kim").css("border-radius", "");
        click = 1;

    });

    //BYONCE
    $("#avatar_byonce").click(function () {
        $("#byonce").css("border", "#ffba00 2px solid");
        $("#byonce").css("border-radius", "35px");

        $("#fillion").css("border", "");
        $("#fillion").css("border-radius", "");

        $("#donald").css("border", "");
        $("#donald").css("border-radius", "");

        $("#kim").css("border", "");
        $("#kim").css("border-radius", "");
        click = 1;
    });

    //DONALD
    $("#avatar_donald").click(function () {
        $("#donald").css("border", "#ffba00 2px solid");
        $("#donald").css("border-radius", "35px");

        $("#byonce").css("border", "");
        $("#byonce").css("border-radius", "");

        $("#fillion").css("border", "");
        $("#fillion").css("border-radius", "");

        $("#kim").css("border", "");
        $("#kim").css("border-radius", "");
        click = 1;
    });

    //KIM
    $("#avatar_kim").click(function () {
        $("#kim").css("border", "#ffba00 2px solid");
        $("#kim").css("border-radius", "35px");

        $("#byonce").css("border", "");
        $("#byonce").css("border-radius", "");

        $("#fillion").css("border", "");
        $("#fillion").css("border-radius", "");

        $("#donald").css("border", "");
        $("#donald").css("border-radius", "");
        click = 1;

    });

    //Hover Avatar
    //FILLION
    $("#avatar_fillion").hover(function () {
        //IN
        $("#fillion").css("border", "#ffba00 2px solid");
        $("#fillion").css("border-radius", "35px");

        //OUT
    }, function () {
        if (click == 1) {
            $("#fillion").css("border", "#ffba00 2px solid");
            $("#fillion").css("border-radius", "35px");

            $("#byonce").css("border", "");
            $("#byonce").css("border-radius", "");

            $("#donald").css("border", "");
            $("#donald").css("border-radius", "");

            $("#kim").css("border", "");
            $("#kim").css("border-radius", "");
            click = 0;

        } else {
            $("#fillion").css("border", "");
            $("#fillion").css("border-radius", "");

        }
    });

    //BYONCE
    $("#avatar_byonce").hover(function () {
        //IN
        $("#byonce").css("border", "#ffba00 2px solid");
        $("#byonce").css("border-radius", "35px");
        //OUT
    }, function () {
        if (click == 1) {
            $("#byonce").css("border", "#ffba00 2px solid");
            $("#byonce").css("border-radius", "35px");

            $("#fillion").css("border", "");
            $("#fillion").css("border-radius", "");

            $("#donald").css("border", "");
            $("#donald").css("border-radius", "");

            $("#kim").css("border", "");
            $("#kim").css("border-radius", "");

        } else {
            $("#byonce").css("border", "");
            $("#byonce").css("border-radius", "");
            click = 0;
        }
    });

    //TRUMP
    $("#avatar_donald").hover(function () {
        //IN
        $("#donald").css("border", "#ffba00 2px solid");
        $("#donald").css("border-radius", "35px");
        //OUT
    }, function () {

        if (click == 1) {
            $("#donald").css("border", "#ffba00 2px solid");
            $("#donald").css("border-radius", "35px");

            $("#byonce").css("border", "");
            $("#byonce").css("border-radius", "");

            $("#fillion").css("border", "");
            $("#fillion").css("border-radius", "");

            $("#kim").css("border", "");
            $("#kim").css("border-radius", "");

        } else {
            $("#donald").css("border", "");
            $("#donald").css("border-radius", "");
            click = 0;
        }
    });

    //KIM
    $("#avatar_kim").hover(function () {
        //IN
        $("#kim").css("border", "#ffba00 2px solid");
        $("#kim").css("border-radius", "35px");
        //OUT
    }, function () {
        if (click == 1) {
            $("#kim").css("border", "#ffba00 2px solid");
            $("#kim").css("border-radius", "35px");

            $("#byonce").css("border", "");
            $("#byonce").css("border-radius", "");

            $("#fillion").css("border", "");
            $("#fillion").css("border-radius", "");

            $("#donald").css("border", "");
            $("#donald").css("border-radius", "");

        } else {
            $("#kim").css("border", "");
            $("#kim").css("border-radius", "");
            click = 0;
        }
    });

});
