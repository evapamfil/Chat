/*============================================================
#title            : Mood'Chat
#description      : JS for home page 
#author           : DUPRE ANTHONY
#date             : 2017/04/05
#version          : Constantly on progress
#usage            : JAVASCRIPT / JQUERY
#notes            : 
=============================================================*/

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

//Hover Avatar

var click = 0; 
//FILLION
$("#avatar_fillion").hover(function () {
    //IN
    $("#fillion").css("border", "#ffba00 2px solid");
    $("#fillion").css("border-radius", "35px");
    
    $("#avatar_fillion").click(function () {
        click=1; 
    });
    //OUT
    }, function () {
    if (click == 0){
        $("#fillion").css("border", "");
        $("#fillion").css("border-radius", "");
    } else {
        $("#fillion").css("border", "#ffba00 2px solid");
        $("#fillion").css("border-radius", "35px");
    };
});

//BYONCE
$("#avatar_byonce").hover(function () {
    //IN
    $("#byonce").css("border", "#ffba00 2px solid");
    $("#byonce").css("border-radius", "35px");
    
    $("#avatar_byonce").click(function () {
        click=1; 
    });
    //OUT
    }, function () {
    if (click == 0){
        $("#byonce").css("border", "");
        $("#byonce").css("border-radius", "");
    } else {
        $("#byonce").css("border", "#ffba00 2px solid");
        $("#byonce").css("border-radius", "35px");
    };
});

//Trump
$("#avatar_donald").hover(function () {
    //IN
    $("#donald").css("border", "#ffba00 2px solid");
    $("#donald").css("border-radius", "35px");
        
    $("#avatar_donald").click(function () {
        click=1; 
    });

    //OUT
    }, function () {

    if (click == 0){
        $("#donald").css("border", "");
        $("#donald").css("border-radius", "");
    } else {
        $("#donald").css("border", "#ffba00 2px solid");
        $("#donald").css("border-radius", "35px");
    }; 
});

//kim
$("#avatar_kim").hover(function () {
    //IN
    $("#kim").css("border", "#ffba00 2px solid");
    $("#kim").css("border-radius", "35px");
    
    $("#avatar_kim").click(function () {
        click=1; 
    });
    //OUT
    }, function () {
    if (click == 0){
        $("#fillion").css("border", "");
        $("#fillion").css("border-radius", "");
    } else {
        $("#fillion").css("border", "#ffba00 2px solid");
        $("#fillion").css("border-radius", "35px");
    };
});


