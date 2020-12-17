'use strict';

(function () {

  var page = document.querySelector('.page');
  var navigation = page.querySelector('.navigation');
  var navigationToggle = navigation.querySelector('.navigation__toggle');
  var navigationList = navigation.querySelector('.navigation__list');

  var openMenu = function () {
    page.classList.add('page--no-scroll');
    navigation.classList.remove('navigation--closed');
    navigation.classList.add('navigation--opened');
    navigationList.addEventListener('click', onOutsideMenuClick);
    document.addEventListener('keydown', onOpenMenuEscPress);
  };

  var closeMenu = function () {
    page.classList.remove('page--no-scroll');
    navigation.classList.remove('navigation--opened');
    navigation.classList.add('navigation--closed');
    navigationList.removeEventListener('click', onOutsideMenuClick);
    document.removeEventListener('keydown', onOpenMenuEscPress);
  };

  var onOutsideMenuClick = function () {
    closeMenu();
  };

  var onOpenMenuEscPress = function (evt) {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      closeMenu();
    }
  };

  navigation.classList.remove('navigation--nojs');
  navigation.classList.add('navigation--closed');

  navigationToggle.addEventListener('click', function () {
    if (navigation.classList.contains('navigation--opened')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

})();

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

'use strict';

(function () {

  var menu = document.querySelector('.navigation__list');

  menu.addEventListener('click', function (evt) {
    evt.preventDefault();

    var targetToScroll = document.querySelector(evt.target.dataset.id);

    window.scrollTo(0, targetToScroll.offsetTop);
  });

})();
