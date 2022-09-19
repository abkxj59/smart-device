const aboutToggleButton = document.querySelector('.about__button');
const hiddenText = document.querySelectorAll('.about__text--switchable');
const hiddenMobileText = document.querySelectorAll('.about__text--mobile-switchable');

const switchAbout = () => {
  if (aboutToggleButton.classList.contains('about__button--open')) {
    hiddenText.forEach((item) => {
      item.hidden = false;
    });
    hiddenMobileText.forEach((item) => {
      item.classList.remove('about__text--mobile-hidden');
    });
    aboutToggleButton.textContent = 'Свернуть';
  } else {
    hiddenText.forEach((item) => {
      item.hidden = true;
    });
    hiddenMobileText.forEach((item) => {
      item.classList.add('about__text--mobile-hidden');
    });
    aboutToggleButton.textContent = 'Подробнее';
  }
  aboutToggleButton.classList.toggle('about__button--open');
};

const initAboutToggle = () => {
  hiddenText.forEach((item) => {
    item.hidden = true;
  });
  hiddenMobileText.forEach((item) => {
    item.classList.add('about__text--mobile-hidden');
  });
  aboutToggleButton.addEventListener('click', switchAbout);
};

export {initAboutToggle};
