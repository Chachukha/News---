$('.burger-menu__burger').click(function (){
  if($('.burger-menu__nav').hasClass('menu--active')){
      $('.burger-menu__nav').removeClass('menu--active');
      $('.burger').removeClass('burger--active');
  } else {
      $('.burger-menu__nav').addClass('menu--active');
      $('.burger').addClass('burger--active');
  }
});
