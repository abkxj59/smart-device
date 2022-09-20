import IMask from 'imask';

const telInputs = document.querySelectorAll('[data-mask="phone"]');

const maskOptions = {
  mask: '+{7}(000)000-00-00',
};

const initTelMask = () => {
  telInputs.forEach((input) => {
    IMask(input, maskOptions);
  });
};

export {initTelMask};
