//mobile menu open
$('.header__menu').click(function () {
  $('.header__top').toggleClass('header__top--open');
  $('.header__dropdown').toggleClass('header__dropdown--open');
  $('body').toggleClass('no-scroll');
});

//smooth scroll
$(function () {
  $('.promo__link').on('click', function (e) {
    $('html,body').stop().animate({ scrollTop: $('#main_content').offset().top }, 1000);
    e.preventDefault();
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.scroll-up').fadeIn();
    } else {
      $('.scroll-up').fadeOut();
    }
  });
});

$(function () {
  $("a[href^='#']").click(function (e) {
    let _href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(_href).offset().top + "px" }, 1000);
    $('.header__top').removeClass('header__top--open');
    $('.header__dropdown').removeClass('header__dropdown--open');
    $('body').removeClass('no-scroll');
    e.preventDefault();
    return false;
  });
});

//slider

const slider = document.querySelector('.swiper-container');
const slider1 = document.querySelector('.swiper-container1');

let mySwiper = new Swiper(slider, {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: false,
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    320: {
      slidesPerView: 1,
    }
  }
});

let mySwiper1 = new Swiper(slider1, {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: false,
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    768: {
      slidesPerView: 5,
    }
  }
})
