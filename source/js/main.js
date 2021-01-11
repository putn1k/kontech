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
let carousel_1;
let carousel_2;
if (window.matchMedia('(max-width: 767px)').matches) {
  $(document).ready(function () {
    carousel_1 = $(".documents__licenses");
    carousel_2 = $(".partners__list");
    carousel_1.itemslide();
    carousel_2.itemslide();
  });
}
