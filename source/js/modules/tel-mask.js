import IMask from 'imask';

const forms = document.querySelectorAll('.form');

const maskOptions = {
  mask: '+{7}(000)000-00-00',
};

const initTelMask = () => {
  forms.forEach((form) => {
    let input = form.querySelector('[data-mask="phone"]');
    IMask(input, maskOptions);
    input.addEventListener('input', () => {
      if (input.value.length < 16) {
        input.classList.add('invalid');
      } else {
        input.classList.remove('invalid');
      }
    });
    form.addEventListener('submit', (evt) => {
      if (input.classList.contains('invalid')) {
        evt.preventDefault();
      }
    });
  });
};

export {initTelMask};
