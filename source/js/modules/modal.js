const body = document.querySelector('.page__body');
const modal = document.querySelector('.modal');
const nameInput = document.querySelector('#modal-name');
const overlay = document.querySelector('.modal__overlay');
const openModalButton = document.querySelector('.page-header__button');
const closeModalButton = document.querySelector('.modal__close-button');
const form = document.querySelector('.modal__form');

const closeModal = () => {
  modal.hidden = true;
  body.classList.remove('page__body--modal-opened');
  form.reset();
};

const initModal = () => {
  if (modal !== null) {
    openModalButton.addEventListener('click', () => {
      modal.hidden = false;
      body.classList.add('page__body--modal-opened');
      nameInput.focus();
    });
    closeModalButton.addEventListener('click', () => {
      closeModal();
    });
    overlay.addEventListener('click', () => {
      closeModal();
    });
    document.addEventListener('keydown', (evt) => {
      if (evt.key === 'Escape') {
        closeModal();
      }
    });
    form.addEventListener('submit', () => {
      closeModal();
    });
  }
};

export {initModal};
