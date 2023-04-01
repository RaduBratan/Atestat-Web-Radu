/*
###################################
########### G L O B A L ###########
###################################
*/
/*var firebaseConfig = {
  apiKey: "ABCDE",
  authDomain: "???.firebaseapp.com",
  projectId: "???",
  storageBucket: "???.appspot.com",
  messagingSenderId: "ABCDE",
  appId: "ABCDE",
  measurementId: "ABCDE"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();*/

var firebaseConfig = {
  apiKey: "ABCDE",
  authDomain: "???.firebaseapp.com",
  projectId: "???",
  storageBucket: "???.appspot.com",
  messagingSenderId: "ABCDE",
  appId: "ABCDE",
  measurementId: "ABCDE"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const nameTime = 2000; //amount of seconds the intro name takes to actually animate
const introTime = 3000; //amount of seconds the intro lasts for (it's nameTime + 1 second to make it fresh)
const introDelay = 300; //amount of seconds the page is white before the intro name appears
const letterTime = 1000; //amount of time the chapters' letters take to animate
const letterDelay = 500; //amount of time the page is white before the chapters' letters animate

var colors = {
  blue: '#70d6ff',
  white: '#fff',
  black: '#000'
};

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


/*
#################################
########### I N T R O ###########
#################################
*/
$(document).ready(function () {
  $("nav").css("display", "none");
  $("main").css("display", "none");
  setTimeout(() => {
    $("nav").css("display", "flex");
    $("main").css("display", "flex");
    $(".intro-container").css("display", none);
    $(".creator").css("display", none);
  }, introDelay + introTime);

  const title = document.querySelector(".creator");

  setTimeout(() => {
    gsap.to(".distort feDisplacementMap", 0, {
      attr: { scale: 200 },
      ease: "circ.out"
    });
    gsap.to(".distort feTurbulence", 0, {
      attr: { baseFrequency: '2.08 .08' },
      ease: "circ.out"
    });
    gsap.to(title, 0, {
      fontVariationSettings: "'wght' 650",
      ease: "back.out",
      opacity: 0
    });

    setTimeout(() => {
      gsap.to(".distort feDisplacementMap", 1, {
        attr: { scale: 0 },
        ease: "circ.in",
        opacity: 0
      });
      gsap.to(".distort feTurbulence", 1, {
        attr: { baseFrequency: '2.08 .08' },
        ease: "circ.in"
      });
      gsap.to(title, 1, {
        fontVariationSettings: "'wght' 650",
        ease: "back.in",
        opacity: 1
      });
    }, 0);

    setTimeout(() => {
      gsap.to(".distort feDisplacementMap", 1, {
        attr: { scale: 200 },
        ease: "circ.out"
      });
      gsap.to(".distort feTurbulence", 1, {
        attr: { baseFrequency: '2.08 .08' },
        ease: "circ.out"
      });
      gsap.to(title, 1, {
        fontVariationSettings: "'wght' 650",
        ease: "back.out",
        opacity: 0
      });
    }, nameTime);
  }, introDelay);
});



/*
###################################
########### R E V E A L ###########
###################################
*/
$(document).ready(function () {
  setTimeout(() => {
    /*$(".chapters").html((i, html) => {
      return "<span><i>" + $.trim(html).split("").join("</i><i>") + "</i></span>";
    });

    $(".chapters").addClass("before");*/

    const tlmx = new TimelineMax();
    const chapters_row = document.querySelectorAll(".chapters-row div");

    tlmx.fromTo(
      chapters_row,
      1.5,
      {
        autoAlpha: 0,
        yPercent: 100
      },
      {
        autoAlpha: 1,
        yPercent: 0,
        ease: Power4.easeInOut
      },
      0
    );
    tlmx.play();

    $(".name").addClass("name-reveal");
    $(".menu").addClass("menu-reveal");

    setTimeout(() => {
      $(".chapters").css("visibility", "visible");
    }, letterDelay);

    setTimeout(() => {
      //$(".chapters").removeClass("before");
      $(".name").removeClass("name-reveal");
      $(".menu").removeClass("menu-reveal");
    }, letterTime);
  }, introDelay + introTime);
});



/*
#################################
########### H O V E R ###########
#################################
*/
$(document).ready(function () {
  setTimeout(() => {
    $(".chapters").mouseenter(function () {
      $("body").css("background-color", colors.blue);
      $(".name").css("color", colors.black);
      $("body").css("transition", "0.5s");
      $(".name").css("transition", "0.5s");
    });
    $(".chapters").mouseleave(function () {
      $("body").css("background-color", colors.white);
      $(".name").css("color", colors.blue);
      $("body").css("transition", "0.5s");
      $(".name").css("transition", "0.5s");
    });

    $(".name").mouseenter(function () {
      $(".name").css("color", colors.black);
      $(".name").css("transition", "0.5s");
    });
    $(".name").mouseleave(function () {
      $(".name").css("color", colors.blue);
      $(".name").css("transition", "0.5s");
    });
  }, 2 * introDelay + introTime + letterTime);
});



/*
#################################
########### C L I C K ###########
#################################
*/
$(document).ready(function () {
  $(".chapters").click(function () {

    /*$(".chapters").html((a, html) => {
      return "<span><a>" + $.trim(html).split("").join("</a><a>") + "</a></span>";
    });*/

    $("body").css("background-color", colors.white);
    $(".chapters").css("color", colors.black);
    //$(".chapters").addClass("after");
    $(".name").addClass("name-reveal");
    $(".menu").addClass("menu-reveal");
    $(".name").css("animation-direction", "reverse");
    $(".menu").css("animation-direction", "reverse");

    const tlmx = new TimelineMax();
    const chapters_row = document.querySelectorAll(".chapters-row div");

    tlmx.fromTo(
      chapters_row,
      1.5,
      {
        autoAlpha: 1,
        yPercent: 0
      },
      {
        autoAlpha: 0,
        yPercent: 100,
        ease: Power4.easeInOut
      },
      0
    );
    tlmx.play();

    setTimeout(() => {
      //$(".chapters").removeClass("after");
      $(".name").removeClass("name-reveal");
      $(".menu").removeClass("menu-reveal");
      $(".name").css("animation-direction", "reverse");
      $(".menu").css("animation-direction", "reverse");
      $("main").css("display", "none");
      $("nav").css("display", "none");
    }, letterTime);
  });

  $("#chapter1").click(function () {
    setTimeout(() => {
      window.location.href = "chapters/informatica.html";
    }, letterTime);
  });

  $("#chapter2").click(function () {
    setTimeout(() => {
      window.open("chapters/algoritmi.html", "_top");
    }, letterTime);
  });

  $("#chapter3").click(function () {
    setTimeout(() => {
      window.open("chapters/backtracking.html", "_top");
    }, letterTime);
  });

  $("#chapter4").click(function () {
    setTimeout(() => {
      window.open("chapters/iterativitate.html", "_top");
    }, letterTime);
  });
});