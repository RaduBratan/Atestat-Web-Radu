/*
###################################
########### G L O B A L ###########
###################################
*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//luxy.init();



/*
######################################
----------------INTRO----------------
######################################
*/
$(document).ready(function () {
    $(".chapter-article").addClass("chapter-article-animation-reveal");

    $(".chapter-button").css("opacity", 0);
    $(".chapter-title").css("opacity", 0);
    $(".chapter-link-container").css("opacity", 0);
    $("p").css("opacity", 0);
    $("h3").css("opacity", 0);
    $("iframe").css("opacity", 0);

    setTimeout(() => {
        $(".chapter-button").css("opacity", 1);
        $(".chapter-title").css("opacity", 1);
        $(".chapter-link-container").css("opacity", 1);
    }, 1000);

    setTimeout(() => {
        $(".chapter-article").removeClass("chapter-article-animation-reveal");

        $("p").css("opacity", 1);
        $("h3").css("opacity", 1);
        $("iframe").css("opacity", 1);
    }, 1200);
});



/*
#####################################
----------------CLICK----------------
#####################################
*/
$(".chapter-button").click(function () {
    $(".chapter-article").addClass("chapter-article-animation-reveal");

    $(".chapter-button").css("animation-direction", "reverse");
    $(".chapter-title").css("animation-direction", "reverse");
    $(".chapter-link-container").css("animation-direction", "reverse");
    $("p").css("animation-direction", "reverse");
    $("h3").css("animation-direction", "reverse");
    $("iframe").css("animation-direction", "reverse");

    setTimeout(() => {
        $(".chapter-button").css("opacity", 0);
        $(".chapter-title").css("opacity", 0);
        $(".chapter-link-container").css("opacity", 0);
    }, 1000);

    setTimeout(() => {
        $(".chapter-article").removeClass("chapter-article-animation-reveal");

        $(".chapter-button").css("animation-direction", "reverse");
        $(".chapter-title").css("animation-direction", "reverse");
        $(".chapter-link-container").css("animation-direction", "reverse");
        $("p").css("animation-direction", "reverse");
        $("h3").css("animation-direction", "reverse");
        $("iframe").css("animation-direction", "reverse");

        $("p").css("opacity", 0);
        $("h3").css("opacity", 0);
        $("iframe").css("opacity", 0);
        history.back();
    }, 1200);
});