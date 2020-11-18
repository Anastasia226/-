let menuToggle = document.querySelector(".menu-toggle");
let menu = document.querySelector("nav .items");
let arrow = document.querySelector(".news-arrow");
let widthRewiew_1 = $(".rewiew-1").innerWidth(); //ширина блока отзывов 1
let widthRewiew_2 = $(".rewiew-3").innerWidth(); //ширина блока отзывов 3
//меню для мобильной версии
menuToggle.addEventListener("click", function (event) {
  event.preventDefault();
  menu.classList.toggle("visible");
});

$(document).ready(function () {
  $(".rewiew-block-1").css("left", widthRewiew_1 - 185);
  $(".rewiew-block-3").css("left", widthRewiew_2 - 185);
  //слайдер новостей
  arrow.classList.toggle("slick-next");
  $(".slider-news").slick({
    slidesToShow: 2,
    prevArrow: false,
    nextArrow: `
       <svg class="icon-arrow slick-next">
                    <use xlink:href="img/icons.svg#arrow"></use>
                  </svg>
      `,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  $(".news-arrow").append($(".slider-news>.slick-next"));
  let currentSlide = $(".slider-news").slick("slickCurrentSlide") + 1;
  $(".page-news-active").text(currentSlide);
  //слайдер отзывов
  $(".slider-rewiew").slick({
    slidesToShow: 1,
    centerPadding: "-100px",
    centerMode: true,
    prevArrow: ` <svg class="icon icon-back slick-prev">
                <use xlink:href="img/icons.svg#arrow"></use>
              </svg>`,
    nextArrow: ` <svg class="icon icon-front slick-next">
                <use xlink:href="img/icons.svg#arrow"></use>
              </svg>`,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  //сладйер партнеров
  $(".slider-partners").slick({
    arrows: false,
    slidesToShow: 5,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1180,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  });
  $(".rewiew-arrow-prev").append($(".slider-rewiew>.slick-prev"));
  $(".rewiew-arrow-next").append($(".slider-rewiew>.slick-next"));
  let currentSlide_r = $(".slider-rewiew").slick("slickCurrentSlide") + 1;
});
$(".slider-news").on("afterChange", function (event, slick, currentSlide) {
  $(".page-news-active").text(currentSlide + 1);
});
$(".slider-rewiew").on("afterChange", function (event, slick, currentSlide_r) {
  $(".page-active").text(currentSlide_r + 1);
});
$(window).resize(function (e) {
  $(".rewiew-arrow-prev").append($(".slider-rewiew>.slick-prev"));
  $(".rewiew-arrow-next").append($(".slider-rewiew>.slick-next"));
  $(".news-arrow").append($(".slider-news>.slick-next"));
  $(".rewiew-block-1").css("left", widthRewiew_1 - 185);
  $(".rewiew-block-3").css("left", widthRewiew_2 - 185);
});
