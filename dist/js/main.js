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

  });
})();