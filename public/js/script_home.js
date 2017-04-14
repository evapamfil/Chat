/*============================================================
#title            : Mood'Chat
#description      : JS for home page 
#author           : DUPRE ANTHONY
#date             : 2017/04/05
#version          : Constantly on progress
#usage            : JAVASCRIPT / JQUERY
#notes            : 
=============================================================*/
$(document).ready(function() {
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

    var input_name = document.getElementById("name");

    //INPUT
    $("#button").click(function(e) {
        if (input_name.value == "") {
            alert("To continue we need your name ! ;)")
        } else {
            $("#button").attr('href', '/static/page.html')

            var avatar_val = $('input[name=avatar]:checked').val();
            console.log($('input[name=avatar]:checked').val());
            setCookie("CHOICE AVATAR", avatar_val, 30);

            var val_name = $("#name").val();
            setCookie("NAME USER", val_name, 30);
        }
    });

    //CLICK / FOCUS
    var click = 0;

    //FILLION
    $("#avatar_fillion").click(function() {
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
    $("#avatar_byonce").click(function() {
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
    $("#avatar_donald").click(function() {
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
    $("#avatar_kim").click(function() {
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
    $("#avatar_fillion").hover(function() {
        //IN
        $("#fillion").css("border", "#ffba00 2px solid");
        $("#fillion").css("border-radius", "35px");

        //OUT
    }, function() {
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
    $("#avatar_byonce").hover(function() {
        //IN
        $("#byonce").css("border", "#ffba00 2px solid");
        $("#byonce").css("border-radius", "35px");
        //OUT
    }, function() {
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
    $("#avatar_donald").hover(function() {
        //IN
        $("#donald").css("border", "#ffba00 2px solid");
        $("#donald").css("border-radius", "35px");
        //OUT
    }, function() {

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
    $("#avatar_kim").hover(function() {
        //IN
        $("#kim").css("border", "#ffba00 2px solid");
        $("#kim").css("border-radius", "35px");
        //OUT
    }, function() {
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