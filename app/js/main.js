/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/_burger.js":
/*!***************************!*\
  !*** ./src/js/_burger.js ***!
  \***************************/
/***/ (() => {

$('.burger-menu__burger').click(function (){
  if($('.burger-menu__nav').hasClass('menu--active')){
      $('.burger-menu__nav').removeClass('menu--active');
      $('.burger').removeClass('burger--active');
  } else {
      $('.burger-menu__nav').addClass('menu--active');
      $('.burger').addClass('burger--active');
  }
});


/***/ }),

/***/ "./src/js/_click.js":
/*!**************************!*\
  !*** ./src/js/_click.js ***!
  \**************************/
/***/ (() => {

// Функция для создания SVG элемента
function createSVG() {
  const svg = $('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M22 11.0801V12.0001C21.9988 14.1565 21.3005 16.2548 20.0093 17.9819C18.7182 19.7091 16.9033 20.9726 14.8354 21.584C12.7674 22.1954 10.5573 22.122 8.53447 21.3747C6.51168 20.6274 4.78465 19.2462 3.61096 17.4372C2.43727 15.6281 1.87979 13.4882 2.02168 11.3364C2.16356 9.18467 2.99721 7.13643 4.39828 5.49718C5.79935 3.85793 7.69279 2.71549 9.79619 2.24025C11.8996 1.76502 14.1003 1.98245 16.07 2.86011M22 4.00011L12 14.0101L9.00001 11.0101" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>');
  svg.css('margin-left', '8px');
  svg.css('min-height', '24px');
  svg.css('min-width', '24px');
  return svg;
}

// Функция для обработчика события
function handleButtonClick(link, className, newText) {
  link.on('click', function (event) {
    event.preventDefault();
    const svg = createSVG();
    link.addClass(className);
    link.text(newText);
    link.css('display', 'flex');
    link.css('align-items', 'center');
    link.css('justify-content', 'center');
    link.css('max-height', '64px');
    link.css('background-color', '#38434F');
    link.append(svg);
  });
}

// Находим ссылки и применяем обработчики
const linkContacts = $('.contacts-form__btn');
handleButtonClick(linkContacts, 'contacts-form__btn--active', 'Ваш запрос отправлен');

const linkQuestion = $('.question-form__btn');
handleButtonClick(linkQuestion, 'question-form__btn--active', 'Ваш вопрос отправлен');


/***/ }),

/***/ "./src/js/_dropdown.js":
/*!*****************************!*\
  !*** ./src/js/_dropdown.js ***!
  \*****************************/
/***/ (() => {

// $(document).ready(function () {


//   // При клике на элемент с классом "subburger-menu__btn"
//   $(".subburger-menu__btn").click(function () {
//       // Находим ближайший элемент с классом "subburger-menu" и переключаем его видимость
//       if($(this).hasClass('open')){
//         $(this).removeClass('open');
//     } else {
//       $(this).addClass('open');
//     }

//       $(".subburger-menu").slideToggle();
//   });

//   // При клике на элемент с классом "subburger-more__btn"
//   $(".subburger-menu__item").click(function () {
//     // Находим ближайший элемент с классом "subburger-more" и переключаем его видимость
//     if($(this).hasClass('open')){
//         $(this).removeClass('open');
//     } else {
//         $(this).addClass('open');
//     }
//     $(this).find('.subburger-more').slideToggle();
// });

// $(".subburger-more").click(function(event) {
//     event.stopPropagation(); // Предотвращаем распространение события клика
// });




// // клик по ссылке
// $(".subburger-more__item").click(function () {
//   var link = $(this).find(".subburger-more__link"); // Находим ссылку внутри элемента
//   var url = link.attr("href"); // Получаем URL из ссылки
// });














//   $(".nav-product__btn").click(function () {
//     // Находим ближайший элемент с классом "subburger-menu" и переключаем его видимость
//     if($(this).hasClass('open')){
//         $(this).removeClass('open');
//     } else {
//       $(this).addClass('open');
//     }

//     $(this).find(".sub-menu").slideToggle();
// });





// $(".nav-product__head").click(function () {
//   // Находим ближайший элемент с классом "subburger-menu" и переключаем его видимость
//   $(this).toggleClass('open');

//   if ($(this).hasClass('open')) {
//     $(this).addClass('nav-product__head--color');
//   } else {
//     $(this).removeClass('nav-product__head--color');
//   }

//   $(".nav-product__list").slideToggle();
// });
// });



// drop login
// $(document).ready(function() {
//   var $link = $(".header__right--link");
//   var $menuContent = $(".menu-content");

//   $link.hover(
//     function() {
//       $link.addClass("hovered");
//       $menuContent.stop(true, true).slideDown("fast");
//     },
//     function() {
//       $link.removeClass("hovered");
//     }
//   );

//   $menuContent.mouseenter(function() {
//     $link.addClass("hovered");
//   }).mouseleave(function() {
//     $link.removeClass("hovered");
//     $menuContent.stop(true, true).slideUp("fast");
//   });
// });

$(document).ready(function() {
  var $link = $(".header__right--link");
  var $menuContent = $(".menu-content");

  $(".header__right").hover(
    function() {
      $link.addClass("hovered");
      $menuContent.stop(true, true).slideDown("fast");
    },
    function() {
      $link.removeClass("hovered");
      $menuContent.slideUp("fast");
    }
  );
}); 




/***/ }),

/***/ "./src/js/_file.js":
/*!*************************!*\
  !*** ./src/js/_file.js ***!
  \*************************/
/***/ (() => {

$('#imageInput').on('change', function() {
	$input = $(this);
	if($input.val().length > 0) {
		fileReader = new FileReader();
		fileReader.onload = function (data) {
		$('.form-photo__preview').attr('src', data.target.result);
		}
		fileReader.readAsDataURL($input.prop('files')[0]);
		$('.form-photo__preview').css('display', 'block');
	}
});


/***/ }),

/***/ "./src/js/_functions.js":
/*!******************************!*\
  !*** ./src/js/_functions.js ***!
  \******************************/
/***/ (() => {

// // Подключение свайпера
// import { auto } from '@popperjs/core';
// import Swiper, { Autoplay, Navigation, Pagination, Controller, EffectFade, } from 'swiper';
// Swiper.use([Autoplay, Navigation, Pagination, Controller, EffectFade]);
// const mobileSlider = new Swiper('.swiper-one', {
//   slidesPerView: auto,
//   loop: true,
// });



/***/ }),

/***/ "./src/js/_modal.js":
/*!**************************!*\
  !*** ./src/js/_modal.js ***!
  \**************************/
/***/ (() => {

$(document).ready(function () {
  $(".open-modal-btn").click(function () {
    $("#myModal").show();
  });
  $("#closeModalBtn").click(function () {
    $("#myModal").hide();
  });
  $(document).on("click", function (event) {
    if ($(event.target).is("#myModal")) {
      $("#myModal").hide();
    }
  });
});


// burger

$(document).ready(function () {
  // При клике на кнопку с классом "open-modal-btn"
  $(".open-modal-burger").click(function () {
      // Показываем модальное окно с id "myModal"
      $("#myModalBurger").show();
  });

  // При клике на кнопку закрытия или вне модального окна
  $("#closeModalBtn, .modal").click(function () {
      // Скрываем модальное окно
      $("#myModalBurger").hide();
  });

  // Предотвращаем закрытие модального окна при клике внутри него
  $(".modal-content").click(function (e) {
      e.stopPropagation();
  });
});
//




/***/ }),

/***/ "./src/js/_slider-card.js":
/*!********************************!*\
  !*** ./src/js/_slider-card.js ***!
  \********************************/
/***/ (() => {

const mainImage = document.getElementById("card-slider__home--image");
const thumbnails = document.querySelectorAll(".card-slider__thumbnail img");

// Устанавливаем обработчики кликов для миниатюр
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", () => {
        // Устанавливаем эффект opacity: 0.5 для всех миниатюр
        thumbnails.forEach((thumb) => {
            thumb.style.opacity = 0.5;
        });

        // Устанавливаем opacity: 1 для выбранной миниатюры
        thumbnail.style.opacity = 1;

        // Меняем основную картинку на выбранную миниатюру
        mainImage.src = thumbnail.src;
    });
});


// структура html

{/* <div class="card-slider__wrapper">
      <div class="card-slider__container">
        <div class="card-slider__home">
            <img id="card-slider__home--image" src="../img/slider.png" alt="Основная картинка">
        </div>
        <div class="card-slider__thumbnails">
            <div class="card-slider__thumbnail card-slider__thumbnail--active">
                <img src="../img/slider.png" alt="Маленькая картинка 1"  height="97">
            </div>
            <div class="card-slider__thumbnail">
                <img src="../img/slider.png" alt="Маленькая картинка 2"  height="97" style="opacity: 0.5;">
            </div>
            <div class="card-slider__thumbnail">
                <img src="../img/loader-big2.png" alt="Маленькая картинка 3"  height="97" style="opacity: 0.5;">
            </div>
            <div class="card-slider__thumbnail">
                <img src="../img/slider.png" alt="Маленькая картинка 4"  height="97" style="opacity: 0.5;">
            </div>
        </div>
      </div>

      <div class="card-slider__content">
        <div class="card-slider__list">
          <div class="card-slider__item">
            <span>QAY130</span>
            <p class="card-slider__descr">
              Номер модели
            </p>
          </div>
          <div class="card-slider__item">
            <span>15028 / 3000 / 3990</span>
            <p class="card-slider__descr">
              Длина / ширина / высота (мм)
            </p>
          </div>
          <div class="card-slider__item">
            <span>130</span>
            <p class="card-slider__descr">
              Грузоподъёмность (тонн)
            </p>
          </div>
          <div class="card-slider__item">
            <span>60000</span>
            <p class="card-slider__descr">
              Масса (кг)
            </p>
          </div>
          <div class="card-slider__item">
            <span>Китай</span>
            <p class="card-slider__descr">
              Страна производства
            </p>
          </div>
        </div>
        <div class="card-slider__button">
          <a href="#" class="card-slider__btn card-slider__btn--blue open-modal-order">Заказать</a>
          <a href="#" class="card-slider__btn card-slider__btn--dark">Скачать документацию</a>
        </div>
      </div>
</div> */}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_functions */ "./src/js/_functions.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_functions__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _slider_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_slider-card */ "./src/js/_slider-card.js");
/* harmony import */ var _slider_card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_slider_card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _burger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_burger */ "./src/js/_burger.js");
/* harmony import */ var _burger__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_burger__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_modal */ "./src/js/_modal.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_dropdown */ "./src/js/_dropdown.js");
/* harmony import */ var _dropdown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_dropdown__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _click__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_click */ "./src/js/_click.js");
/* harmony import */ var _click__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_click__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _file__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_file */ "./src/js/_file.js");
/* harmony import */ var _file__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_file__WEBPACK_IMPORTED_MODULE_6__);








})();

/******/ })()
;
//# sourceMappingURL=main.js.map