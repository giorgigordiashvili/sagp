$(window).scroll(function () {
  $(".nav").toggleClass("doch", $(this).scrollTop() > window.innerHeight);
});
$(".nav-link").click(function () {
  $("#nav-check").prop("checked", false);
});
$(document).ready(function () {
  $(".swiper-wrapper").slick({
    dots: true,
    customPaging: function (slider, i) {
      // this example would render "tabs" with titles
      return '<div class="dot"></div>';
    },

    speed: 300,
    slidesToShow: 4,
    lazyload: "ondemand",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          arrows: true,
          lazyload: "ondemand",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },

      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
});

$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function (event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $("html, body").animate(
          {
            scrollTop: target.offset().top,
          },
          1000
        );
      }
    }
  });
