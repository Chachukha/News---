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

