$(window).bind('scroll', function (e) {
    parallaxScroll();
});

function parallaxScroll() {
    var scrolled = $(window).scrollTop();
    $('#one_column').css('top', (450 - (scrolled * .2)) + 'px');
    $('#two_column').css('top', (220 - (scrolled * .3)) + 'px');
    $('#three_column').css('top', (1100 - (scrolled * .3)) + 'px');
    $('#four_column').css('top', (960 - (scrolled * .3)) + 'px');

    $('#tyto_first_slide').css('top', (60 - (scrolled * 1)) + 'px');

}


$(document).ready(function () {
        $("html").niceScroll({cursorcolor: "#1E90FF", cursorborder: "", scrollspeed: "90"});
    }
);

var styleSheetElement = document.createElement("style"), customStyleSheet;
document.head.appendChild(styleSheetElement);
customStyleSheet = document.styleSheets[0];

var i = 0;
var count = setInterval(function () {
    dynamic_number1()
}, 15)
function dynamic_number1() {
    if (window.scrollY > 500) {
        $("#dynamic_number1").text(i += 10);
        if (i > 1970) {
            clearInterval(count);
        }
        ;
    }
    ;
};

var count1 = setInterval(function () {
    dynamic_population1()
}, 15)
var i1 = 0;
function dynamic_population1() {
    if (window.scrollY > 500) {
        $("#dynamic_population1").text(i1 += 500);
        if (i1 > 100000) {
            clearInterval(count1)
        }
        ;
    }
    ;
};

var count2 = setInterval(function () {
    dynamic_number2()
}, 15)
var i2 = 0;
function dynamic_number2() {
    if (window.scrollY > 500) {
        $("#dynamic_number2").text(i2 += 10);
        if (i2 > 1980) {
            clearInterval(count2)
        }
        ;
    }
    ;
};

var count3 = setInterval(function () {
    dynamic_population2()
}, 15)
var i3 = 0;
function dynamic_population2() {
    if (window.scrollY > 500) {
        $("#dynamic_population2").text(i3 += 500);
        if (i3 > 200000) {
            clearInterval(count3)
        }
        ;
    }
    ;
};

var count4 = setInterval(function () {
    dynamic_number3()
}, 15)
var i4 = 0;
function dynamic_number3() {
    if (window.scrollY > 500) {
        $("#dynamic_number3").text(i4 += 10);
        if (i4 > 1990) {
            clearInterval(count4)
        }
        ;
    }
    ;
};

var count5 = setInterval(function () {
    dynamic_population3()
}, 15)
var i5 = 0;
function dynamic_population3() {
    if (window.scrollY > 500) {
        $("#dynamic_population3").text(i5 += 500);
        if (i5 > 300000) {
            clearInterval(count5)
        }
        ;
    }
    ;
};

var count6 = setInterval(function () {
    dynamic_population4()
}, 1)
var i6 = 0;
function dynamic_population4() {
    if (window.scrollY > 500) {
        $("#dynamic_population4").text(i6 += 200);
        if (i6 > 200000) {
            clearInterval(count6)
        }
        ;
    }
    ;
};

window.onscroll = function () {

    if ($(window).scrollTop() > 550) {
        $("#line_one").animate({
            width: "350"
        }, 700);
    }
    ;

    if ($(window).scrollTop() > 500) {
        $("#line_two").delay(700).animate({
            width: "450"
        }, 700);
    }
    ;

    if ($(window).scrollTop() > 500) {
        $("#line_three").delay(1400).animate({
            width: "550"
        }, 700);
    }
    ;

    if ($(window).scrollTop() > 500) {
        $("#visibity_population").delay(1600).animate({
            opacity: 1,
        }, 900);
    }
    ;

    if ($(window).scrollTop() > 500) {
        $("#dynamic_population4").delay(1800).animate({
            opacity: 1,
        }, 200);
    }
    ;

    if ($(window).scrollTop() > 500) {
        customStyleSheet.insertRule("@-webkit-keyframes load { 0% { opacity: 0; stroke-dashoffset: 1300;} 100% { opacity: 1; stroke-dashoffset:500;} to {opacity: 1;}}");
        $("#one").delay(3100).animate({
            opacity: "1"
        }, 2000)
    }
    ;

    if ($(window).scrollTop() > 500) {
        $("#three_column").delay(3500).animate({
            opacity: 1,
        }, 1000)
    }
    ;

    if ($(window).scrollTop() > 500) {
        $("#four_column").delay(3500).animate({
            opacity: 1,
        }, 1000)
    }
    ;
    5

    if ($(window).scrollTop() > 1000) {
        $("#fact_one").animate({
            opacity: 1,
        }, 1000)
    }
    ;

    if ($(window).scrollTop() > 1000) {
        $("#svg_one").delay(1700).animate({
            opacity: 1,
        }, 1000)
    }
    ;

    if ($(window).scrollTop() > 1000) {
        $("#fact_two").delay(200).animate({
            opacity: 1,
        }, 1000)
    }
    ;

    if ($(window).scrollTop() > 1000) {
        $("#svg_two").delay(1900).animate({
            opacity: 1,
        }, 1000)
    }
    ;

    if ($(window).scrollTop() > 1000) {
        $("#fact_three").delay(400).animate({
            opacity: 1,
        }, 1000)
    }
    ;

    if ($(window).scrollTop() > 1000) {
        $("#svg_three").delay(2200).animate({
            opacity: 1,
        }, 1000)
    }
    ;

    if ($(window).scrollTop() > 1000) {
        $("#fact_four").delay(600).animate({
            opacity: 1,
        }, 1000)
    }
    ;

    if ($(window).scrollTop() > 1000) {
        $("#svg_four").delay(2300).animate({
            opacity: 1,
        }, 1000)
    }
    ;

    if ($(window).scrollTop() > 1000) {
        $("#fact_five").delay(800).animate({
            opacity: 1,
        }, 1000)
    }
    ;

    if ($(window).scrollTop() > 1000) {
        $("#svg_five").delay(2500).animate({
            opacity: 1,
        }, 1000)
    }
    ;

    if ($(window).scrollTop() > 1000) {
        $("#fact_six").delay(1000).animate({
            opacity: 1,
        }, 1000)
    }
    ;

    if ($(window).scrollTop() > 1000) {
        $("#svg_six").delay(2700).animate({
            opacity: 1,
        }, 1000)
    }
    ;

    if ($(window).scrollTop() > 1000) {
        $("#fact_seven").delay(1200).animate({
            opacity: 1,
        }, 1000)
    }
    ;

    if ($(window).scrollTop() > 1000) {
        $("#svg_seven").delay(2900).animate({
            opacity: 1,
        }, 1000)
    }
    ;

    if ($(window).scrollTop() > 4100) {
        $("#six_slide_banner").animate({opacity: 1}, 3000);
        $("#runa").delay(1000).animate({opacity: 1, top: "2600px"}, 1000)
    }
    ;

    if ($(window).scrollTop() > 1900) {
        document.getElementById('video_four_slide').play();
    }
    ;
    if ($(window).scrollTop() < 1900 || $(window).scrollTop() > 2900) {
        document.getElementById('video_four_slide').pause();
    }
    ;
};


$(window).scroll(function () {
    var ratio = $(document).scrollTop() / (($(document).height() - $(window).height()) / 100);
    $("#progress").width(ratio + "%");
    var anchor = $(window).height() / 200;

    if ($(window).scrollTop() > 500) {
        //$("#progress").css("height", "10px");
    }
    ;
});
