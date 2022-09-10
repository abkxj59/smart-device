const aboutToggleButton = document.querySelector('.about__button');
const hiddenText = document.querySelectorAll('.about__text--switchable');

const switchAbout = () => {
  if (aboutToggleButton.classList.contains('about__button--open')) {
    hiddenText.forEach((item) => {
      item.hidden = false;
    });
    aboutToggleButton.textContent = 'Свернуть';
  } else {
    hiddenText.forEach((item) => {
      item.hidden = true;
    });
    aboutToggleButton.textContent = 'Подробнее';
  }
  aboutToggleButton.classList.toggle('about__button--open');
};

aboutToggleButton.addEventListener('click', switchAbout);

// import {iosVhFix} from './utils/ios-vh-fix';
// import {initModals} from './modules/modals/init-modals';

// // ---------------------------------

// window.addEventListener('DOMContentLoaded', () => {

//   // Utils
//   // ---------------------------------

//   iosVhFix();

//   // Modules
//   // ---------------------------------

//   // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
//   // в load следует добавить скрипты, не участвующие в работе первого экрана
//   window.addEventListener('load', () => {
//     initModals();
//   });
// });

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
