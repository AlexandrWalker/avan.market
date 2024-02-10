(() => {
  document.addEventListener('DOMContentLoaded', () => {

    (function () {
      var button = document.querySelectorAll('.button'),
        active = document.getElementsByClassName('active');

      Array.from(button).forEach(function (item, i, button) {
        item.addEventListener('click', function (e) {
          if (active.length > 0 && active[0] !== this)
            active[0].classList.remove('active');

          this.classList.toggle('active');
        });
      });
    })();

    document.getElementById("burger").addEventListener("click", function () {
      document.getElementById("burger").classList.toggle("open")
      document.getElementById("nav").classList.toggle("open")
      document.body.classList.toggle("no-scroll")
    })

    // Закрыть меню при нажатии на Esc
    window.addEventListener('keydown', (e) => {
      if (e.key === "Escape") {
        // Действие при клике
        document.getElementById("burger").classList.remove("open")
        document.body.classList.remove("no-scroll")
      }
    });

    // Закрыть меню при клике вне его
    document.getElementById("nav").addEventListener('click', event => {
      event._isClickWithInMenu = true;
    });
    document.getElementById("burger").addEventListener('click', event => {
      event._isClickWithInMenu = true;
    });
    document.body.addEventListener('click', event => {
      if (event._isClickWithInMenu) return;
      // Действие при клике
      document.getElementById("nav").classList.remove("open")
      document.body.classList.remove("no-scroll")
    });

    $('.liveline__slider').slick({
      infinite: true,
      slidesToShow: 7,
      slidesToScroll: 1,
      swipeToSlide: true,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false
    });

    $('.reviews__slider').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      swipeToSlide: true,
      autoplay: false,
      autoplaySpeed: 2000,
      prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="14" viewBox="0 0 10 16" fill="none"><path d="M8 2L2 8L8 14" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
      nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="14" viewBox="0 0 10 16" fill="none"><path d="M2 2L8 8L2 14" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',

      responsive: [
        {
          breakpoint: 1389,
          settings: {
            arrows: false,
            centerMode: true,
            slidesToShow: 3,
            variableWidth: true
          }
        }
      ]
    });

    $('.rec__slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipeToSlide: true,
      centerMode: true,
      variableWidth: true,
      autoplay: false,
      autoplaySpeed: 2000,
      prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="14" viewBox="0 0 10 16" fill="none"><path d="M8 2L2 8L8 14" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
      nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="14" viewBox="0 0 10 16" fill="none"><path d="M2 2L8 8L2 14" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>'
    });

    $(function () {
      $('.liveline__stat').each(function () {
        $(this).prop('Counter', 0).animate({
          Counter: $(this).text()
        }, {
          duration: 1500,
          easing: 'swing',
          step: function (now) {
            $(this).text(Math.ceil(now));
          }
        });
      });
    });

    $(function () {
      $('.stat__title').each(function () {
        $(this).prop('Counter', 0).animate({
          Counter: $(this).text()
        }, {
          duration: 3000,
          easing: 'swing',
          step: function (now) {
            $(this).text(Math.ceil(now));
          }
        });
      });
    });

    (function () {
      var close = document.querySelectorAll('.modal__close-btn');
      var openBtn = document.querySelectorAll('.hero__btn');

      Array.from(openBtn, openButton => {
        openButton.addEventListener('click', e => {
          let modalId = e.target.getAttribute('data-id');
          document.getElementById(modalId).classList.add("open");

          Array.from(close, closeButton => {
            closeButton.addEventListener('click', e => document.getElementById(modalId).classList.remove("open"));

            window.addEventListener('keydown', (e) => {
              if (e.key === "Escape") {
                document.getElementById(modalId).classList.remove("open")
              }
            });

            document.querySelector(".modal.open .modal__box").addEventListener('click', event => {
              event._isClickWithInModal = true;
            });

            document.getElementById(modalId).addEventListener('click', event => {
              if (event._isClickWithInModal) return;
              event.currentTarget.classList.remove('open');
            });
          });
        });
      });
    })();

  });
})();