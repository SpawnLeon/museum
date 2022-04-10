// Import Swiper and modules
import { Swiper, Navigation, Pagination } from 'swiper/js/swiper.esm.js';

import('swiper/css/swiper.min.css');

// Install modules
Swiper.use([Navigation, Pagination]);

// Now you can use Swiper
const swiper = new Swiper('.swiper-container', {
  speed: 500,
  loop: true,
  navigation: {
    nextEl: '.main-slider__btn--next',
    prevEl: '.main-slider__btn--prev',
  },
  pagination: {
    el: '.main-slider__pagination',
    type: 'bullets',
    clickable: true,
  },
});

const current = document.querySelector('.main-slider-counter__current');
const all = document.querySelector('.main-slider-counter__all');
swiper.on('slideChange', function() {
  const { activeIndex, slides } = this;
  current.innerHTML = String(activeIndex).padStart(2, '0');
  all.innerHTML = String(slides.length - 2).padStart(2, '0');

});
