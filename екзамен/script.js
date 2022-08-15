"use strict";

function topSlider() {
  console.log('g');
  let slider = document.querySelectorAll('slider.promo .slide');
  for (let i = 0; i < slider.length; i++) {
    $(slider[i]).show(1000);
    if (i != 0) {
      $(slider[i] - 1).hide(1000);
    } else {
      $(slider[slider.length]).hide(1000);
    }
  }
}
let slider = $('.slider.promo .slide');
let i = 0;
let start = setInterval(() => {


  $(slider[i]).fadeIn(1000);
  if (i != 0) {
    $(slider[i - 1]).fadeOut(1000);
  }
  if (i == 0) {
    $(slider[slider.length - 1]).fadeOut(1000);
  }
  i++;
  if (i == slider.length) i = 0;


}, 3000);

/**Tabs */

$(function () {
  $("#tabs").tabs();
});


/**Slick sliders */

$("#products .product-slider").slick({
  dots: true,
  // vertical: true,
  //centerMode: true,
  slidesToShow: 3,
  slidesToScroll: 2,
  centerMode: true,
  centerPadding: '60px',
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        centerMode: false,
      }
    },
  ]
});

$("#products .sushi-slider").slick({
  //dots: true,
  // vertical: true,
  //centerMode: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: '60px',
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        centerMode: false,
      }
    },
  ]
});

/** FAQ Accordion */

$(function () {
  $("#accordion").accordion({
    active: 0,
    animate: {
      duration: 200,
      easing: "swing",
    },
    classes: {
      "ui-accordion-header": "highlight",
    },
    collapsible: true,
    heightStyle: 'content',

    icons: { "header": "ui-icon-plus", "activeHeader": "ui-icon-minus" }
  });
});

/** Modal Window */

let btn = document.querySelector('#btn_modal');
let modal = document.querySelector('.modal_window');
let closeBtn = document.querySelector('.close');

btn.onclick = function () {
  modal.style.display = "block";
  btn.style.display = "none";
};

closeBtn.onclick = function () {
  modal.style.display = "none";
  btn.style.display = "block";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    btn.style.display = "block";
  }
};

$('li.bar').on('click', function () {
  const menu = $('.menu-list');

  if (menu.css('display') == 'block') {
    menu.css('display', 'none');
  } else {
    menu.css('display', 'block');
  }

  //$(menu).toggleClass('move');
});
$(document).on('click', function (e) {
  if (!e.target.closest('.menu')) {
    const menu = $('.menu-list');
    menu.css('display', 'none');
  }
})






// Button


