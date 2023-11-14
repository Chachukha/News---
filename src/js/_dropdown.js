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


