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


