'use strict';

(function () {

  var menu = document.querySelector('.navigation__list');

  menu.addEventListener('click', function (evt) {
    evt.preventDefault();

    var targetToScroll = document.querySelector(evt.target.dataset.id);

    window.scrollTo(0, targetToScroll.offsetTop);
  });

})();
