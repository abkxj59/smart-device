const sections = document.querySelectorAll('.accordion');
const buttons = document.querySelectorAll('.accordion__button');

const closeSection = (section) => {
  section.classList.add('accordion--closed');
  section.classList.remove('accordion--opened');
};

const openSection = (section) => {
  sections.forEach(closeSection);
  section.classList.add('accordion--opened');
  section.classList.remove('accordion--closed');
};

const initFooterAccordion = () => {
  for (let i = 0; i < sections.length; i++) {
    closeSection(sections[i]);
    buttons[i].hidden = false;
  }

  buttons.forEach((button, i) => {
    button.addEventListener('click', () => {
      if (sections[i].classList.contains('accordion--opened')) {
        closeSection(sections[i]);
      } else {
        openSection(sections[i]);
      }
    });
  });
};

export {initFooterAccordion};
