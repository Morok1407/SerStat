$(function () {
  var mixer = mixitup(".blog__list");

  $(".blog__button-item").on("click", function name() {
    $(".blog__button-item").removeClass("blog__button-item--active");
    $(this).addClass("blog__button-item--active");
  });

  $("#rateYo").rateYo({
    rating: 4.5,
    halfStar: true,
  });

  $(".testimonials__slider").slick({
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    appendDots: $(".testimonials__dots"),
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(document).ready(function () {
    $(".faq__accard-link").on("click", function (e) {
      e.preventDefault();
      if ($(this).hasClass("faq__accard-link--active")) {
        $(this).removeClass("faq__accard-link--active");
        $(this).children(".faq__accard-text").slideUp();
      } else {
        $(".faq__accard-link").removeClass("faq__accard-link--active");
        $(".faq__accard-text").slideUp();
        $(this).addClass("faq__accard-link--active");
        $(this).children(".faq__accard-text").slideDown();
      }
    });
  });

  $(document).ready(function () {
    $(".header__nav-list, .footer__logo, .footer__nav-list").on(
      "click",
      "a",
      function (event) {
        event.preventDefault();
        var id = $(this).attr("href"),
          top = $(id).offset().top;
        $("body,html").animate({ scrollTop: top }, 1500);
      }
    );
  });
  $(document).ready(function () {
    $(".burder__btn").click(function () {
      var currentColor = $(this).css("background-color");
      var newColor =
        currentColor === "rgb(255, 100, 51)" ? "black" : "rgb(255, 100, 51)";
      $(this).css("background-color", newColor); // Устанавливаем цвет в зависимости от текущего цвета
    });
  });

  $(".burder__btn, overlay--show").on("click", function (e) {
    e.preventDefault();
    $(".header__nav").toggleClass("header__nav--open");
    $(".overlay").toggleClass("overlay--show");
  });
});
