// Функція для закриття меню
const closeMenu = () => {
  const burgerMenu = document.getElementById("burger");
  if (!burgerMenu) return;

  burgerMenu.classList.remove("is-open"); // Запускаємо анімацію виїзду
  document.body.classList.remove("disable-scroll"); // Повертаємо скрол

  // Чекаємо, поки закінчиться анімація (300мс), і ховаємо блок повністю
  setTimeout(() => {
    if (!burgerMenu.classList.contains("is-open")) {
      burgerMenu.classList.add("visually-hidden");
    }
  }, 300);
};

// Вішаємо один глобальний слухач кліків на весь документ
document.addEventListener('click', (e) => {
  // 1. Якщо клікнули на кнопку ВІДКРИТТЯ (або іконку всередині неї)
  const openBtn = e.target.closest('#burger-menu-open');
  if (openBtn) {
    const burgerMenu = document.getElementById("burger");
    if (burgerMenu) {
      burgerMenu.classList.remove("visually-hidden"); // Робимо видимим
      
      // Мікро-затримка для того, щоб спрацювала CSS анімація
      setTimeout(() => {
        burgerMenu.classList.add("is-open");
      }, 10);
      
      document.body.classList.add("disable-scroll"); // Зупиняємо скрол
    }
    return; // Зупиняємо подальшу перевірку
  }

  // 2. Якщо клікнули на кнопку ЗАКРИТТЯ (хрестик)
  const closeBtn = e.target.closest('#burger-button-close');
  if (closeBtn) {
    closeMenu();
    return;
  }

  // 3. Якщо клікнули на посилання всередині меню
  const link = e.target.closest('.burger-pages-list-item');
  if (link) {
    closeMenu();
  }
});

// Закриття на клавішу Escape
document.addEventListener("keydown", (e) => {
  if (e.key === 'Escape') {
    closeMenu();
  }
});