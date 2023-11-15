// Подключение свайпера
import { auto } from '@popperjs/core';
import Swiper, { Autoplay, Navigation, Pagination, Controller, EffectFade, } from 'swiper';
Swiper.use([Autoplay, Navigation, Pagination, Controller, EffectFade]);
const mobileSlider = new Swiper('.swiper-one', {
  slidesPerView: auto,
  loop: true,
});

