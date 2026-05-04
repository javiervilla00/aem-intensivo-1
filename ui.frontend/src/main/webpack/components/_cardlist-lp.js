document.addEventListener('DOMContentLoaded', function () {
  var swiperContainer = document.querySelector('.mySwiper');
  if (swiperContainer) {
    new Swiper('.mySwiper', {
      slidesPerView: 'auto',
      spaceBetween: 56,
      pagination: { el: '.swiper-pagination', clickable: true },
      breakpoints: {
        320: { spaceBetween: 24 },
        768: { spaceBetween: 56 },
      },
    });
  }
});
