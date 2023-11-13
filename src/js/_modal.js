// call-modal
$(document).ready(function () {
  // При клике на кнопку с классом "open-modal-btn"
  $(".open-modal-btn").click(function () {
      // Показываем модальное окно с id "myModal"
      $("#myModal").show();
  });

  // При клике на кнопку закрытия или вне модального окна
  $("#closeModalBtn, .modal").click(function () {
      // Скрываем модальное окно
      $("#myModal").hide();
  });

  // Предотвращаем закрытие модального окна при клике внутри него
  $(".modal-content").click(function (e) {
      e.stopPropagation();
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


$(document).ready(function () {
  // При клике на кнопку с классом "open-modal-btn"
  $(".open-modal-order").click(function () {
      // Показываем модальное окно с id "myModal"
      $("#myModalOrder").show();
  });

  // При клике на кнопку закрытия или вне модального окна
  $("#closeModalOrder, .modal").click(function () {
      // Скрываем модальное окно
      $("#myModalOrder").hide();
  });

  // Предотвращаем закрытие модального окна при клике внутри него
  $(".modal-content").click(function (e) {
      e.stopPropagation();
  });
});


//структура html

{/* <button class="btn-reset header__btn btn--blue open-modal-btn">Заказать звонок</button>
        <div class="modal" id="myModal">
          <div class="modal__content call__container">
            <button class="btn-reset modal__close" id="closeModalBtn"></button>
            <div class="services-form__left">
              <h4 class="services-form__subtitle">
                СВЯЗАТЬСЯ С НАМИ
              </h4>
              <h2 class="services-form__title title border-bottom">
                Обратная связь
              </h2>
              <p class="services-form__descr">
                Закажите звонок и мы Вам перезвоним!
              </p>
              <form class="call-form">
                <div class="call-form__top">
                  <div class="call-form__item">
                    <label class="contacts-form__label" for="name">Имя</label>
                    <input type="text" class="contacts-form__input" id="name">
                  </div>
                  <div class="call-form__item">
                    <label class="call-form__label" for="name">Телефон</label>
                    <input class="call-form__input" type="text" id="name">
                  </div>
                </div>
                <button class="btn btn-reset btn--blue call-form__btn" type="submit">Заказать звонок</button>
              </form>
            </div>
          </div>
        </div> */}
