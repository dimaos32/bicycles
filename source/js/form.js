'use strict';

(function () {

  var RE_PHONE = /^[\d]{10,11}$/;

  var phoneInput = document.querySelector('#phone');

  var onPhoneInput = function () {
    if (phoneInput.value && RE_PHONE.test(phoneInput.value)) {
      phoneInput.classList.remove('write-us__error');
      phoneInput.setCustomValidity('');
    } else {
      phoneInput.classList.add('write-us__error');
      phoneInput.setCustomValidity('Введите корректный номер телефона из 10 или 11 цифр без пробелов и тире.');
    }

    phoneInput.reportValidity();
  };

  phoneInput.addEventListener('input', onPhoneInput);

})();
