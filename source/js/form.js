'use strict';

(function () {

  var writeUsForm = document.querySelector('.write-us');
  var customerInput = writeUsForm.querySelector('#customer');
  var phoneInput = writeUsForm.querySelector('#phone');

  writeUsForm.addEventListener('submit', function (evt) {
    if (!customerInput.value || !phoneInput.value) {
      evt.preventDefault();

      if (!phoneInput.value) {
        phoneInput.classList.add('write-us__error');
        phoneInput.focus();
      }

      if (!customerInput.value) {
        customerInput.classList.add('write-us__error');
        customerInput.focus();
      }
    }

    phoneInput.addEventListener('input', function () {
      phoneInput.classList.remove('write-us__error');
    });

    customerInput.addEventListener('input', function () {
      customerInput.classList.remove('write-us__error');
    });
  });

})();
