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
