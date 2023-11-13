// Подключение свайпера
import Swiper, { Autoplay, Navigation, Pagination, Controller, EffectFade, } from 'swiper';
Swiper.use([Autoplay, Navigation, Pagination, Controller, EffectFade]);
const mobileSlider = new Swiper('.swiper-one', {
  slidesPerView: 3,
  loop: true,
  navigation: {
    nextEl: '.swiper-one__next',
    prevEl: '.swiper-one__prev',
  },
  breakpoints: {// настройки для разных разрешений
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    768: {
        slidesPerView: 3,
        spaceBetween: 20
    },
}
});

const slides = document.querySelectorAll('.swiper-one .swiper-slide');

// Установите ширину 310px для каждого слайда
slides.forEach(slide => {
  slide.style.width = '310px';
});

