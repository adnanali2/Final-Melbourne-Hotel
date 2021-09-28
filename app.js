//Navbar burger Menu bars
const navBtn = document.getElementById("nav-toggle");
const links = document.getElementById("nav-links");

navBtn.addEventListener("click", function () {
  links.classList.toggle("show-links")
});

// Navbar transparent scroll time 
const navbar = document.querySelector(".navbar");
let scrolled = false;

window.onscroll = function () {
  if (window.pageYOffset > 100) {
    navbar.classList.remove("top");
    if (!scrolled) {
      navbar.style.transform = "translateY(-70px)";
    }
    setTimeout(function () {
      navbar.style.transform = "translateY(0)";
      scrolled = true;
    }, 200);
  } else {
    navbar.classList.add("top");
    scrolled = false;
  }
};

// smooth scrolling 
$('#navbar a, .btn').on('click', function (e) {
  if (this.hash !== "") {
    e.preventDefault();
    const hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top - 100,
    },
      800
    );
  }
});


// hide video navigation bar bottom 
var vids = $("video");
$.each(vids, function () {
  this.controls = false;
});
//Loop though all Video tags and set Controls as false

$("video").click(function () {
  //console.log(this); 
  if (this.paused) {
    this.play();
  } else {
    this.pause();
  }
});


// jquery ripple effects 

$(document).ready(function () {

  $(".hero-banner, .navbar").ripples({
    dropRadius: 45,
    perturbance: 0.6,
  })
});

$(document).ready(function () {

  $(".box").ripples({
    dropRadius: 55,
    perturbance: 0.6,

  })
});

// jquery magific 

$(document).ready(function () {

  $('.gallery-center').magnificPopup({
    delegate: 'a',
    type: 'image',

  });
});

$(document).ready(function () {

  $('.section-center').magnificPopup({
    delegate: 'a',
    type: 'image',

  });
});




