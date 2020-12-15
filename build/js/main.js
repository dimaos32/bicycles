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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1cmdlci1tZW51LmpzIiwiZm9ybS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG4oZnVuY3Rpb24gKCkge1xuXG4gIHZhciBwYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2UnKTtcbiAgdmFyIG5hdmlnYXRpb24gPSBwYWdlLnF1ZXJ5U2VsZWN0b3IoJy5uYXZpZ2F0aW9uJyk7XG4gIHZhciBuYXZpZ2F0aW9uVG9nZ2xlID0gbmF2aWdhdGlvbi5xdWVyeVNlbGVjdG9yKCcubmF2aWdhdGlvbl9fdG9nZ2xlJyk7XG4gIHZhciBuYXZpZ2F0aW9uTGlzdCA9IG5hdmlnYXRpb24ucXVlcnlTZWxlY3RvcignLm5hdmlnYXRpb25fX2xpc3QnKTtcblxuICB2YXIgb3Blbk1lbnUgPSBmdW5jdGlvbiAoKSB7XG4gICAgcGFnZS5jbGFzc0xpc3QuYWRkKCdwYWdlLS1uby1zY3JvbGwnKTtcbiAgICBuYXZpZ2F0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ25hdmlnYXRpb24tLWNsb3NlZCcpO1xuICAgIG5hdmlnYXRpb24uY2xhc3NMaXN0LmFkZCgnbmF2aWdhdGlvbi0tb3BlbmVkJyk7XG4gICAgbmF2aWdhdGlvbkxpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbk91dHNpZGVNZW51Q2xpY2spO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBvbk9wZW5NZW51RXNjUHJlc3MpO1xuICB9O1xuXG4gIHZhciBjbG9zZU1lbnUgPSBmdW5jdGlvbiAoKSB7XG4gICAgcGFnZS5jbGFzc0xpc3QucmVtb3ZlKCdwYWdlLS1uby1zY3JvbGwnKTtcbiAgICBuYXZpZ2F0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ25hdmlnYXRpb24tLW9wZW5lZCcpO1xuICAgIG5hdmlnYXRpb24uY2xhc3NMaXN0LmFkZCgnbmF2aWdhdGlvbi0tY2xvc2VkJyk7XG4gICAgbmF2aWdhdGlvbkxpc3QucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbk91dHNpZGVNZW51Q2xpY2spO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBvbk9wZW5NZW51RXNjUHJlc3MpO1xuICB9O1xuXG4gIHZhciBvbk91dHNpZGVNZW51Q2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgY2xvc2VNZW51KCk7XG4gIH07XG5cbiAgdmFyIG9uT3Blbk1lbnVFc2NQcmVzcyA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICBpZiAoZXZ0LmtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY2xvc2VNZW51KCk7XG4gICAgfVxuICB9O1xuXG4gIG5hdmlnYXRpb24uY2xhc3NMaXN0LnJlbW92ZSgnbmF2aWdhdGlvbi0tbm9qcycpO1xuICBuYXZpZ2F0aW9uLmNsYXNzTGlzdC5hZGQoJ25hdmlnYXRpb24tLWNsb3NlZCcpO1xuXG4gIG5hdmlnYXRpb25Ub2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKG5hdmlnYXRpb24uY2xhc3NMaXN0LmNvbnRhaW5zKCduYXZpZ2F0aW9uLS1vcGVuZWQnKSkge1xuICAgICAgY2xvc2VNZW51KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9wZW5NZW51KCk7XG4gICAgfVxuICB9KTtcblxufSkoKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuKGZ1bmN0aW9uICgpIHtcblxuICB2YXIgd3JpdGVVc0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud3JpdGUtdXMnKTtcbiAgdmFyIGN1c3RvbWVySW5wdXQgPSB3cml0ZVVzRm9ybS5xdWVyeVNlbGVjdG9yKCcjY3VzdG9tZXInKTtcbiAgdmFyIHBob25lSW5wdXQgPSB3cml0ZVVzRm9ybS5xdWVyeVNlbGVjdG9yKCcjcGhvbmUnKTtcblxuICB3cml0ZVVzRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgaWYgKCFjdXN0b21lcklucHV0LnZhbHVlIHx8ICFwaG9uZUlucHV0LnZhbHVlKSB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgaWYgKCFwaG9uZUlucHV0LnZhbHVlKSB7XG4gICAgICAgIHBob25lSW5wdXQuY2xhc3NMaXN0LmFkZCgnd3JpdGUtdXNfX2Vycm9yJyk7XG4gICAgICAgIHBob25lSW5wdXQuZm9jdXMoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFjdXN0b21lcklucHV0LnZhbHVlKSB7XG4gICAgICAgIGN1c3RvbWVySW5wdXQuY2xhc3NMaXN0LmFkZCgnd3JpdGUtdXNfX2Vycm9yJyk7XG4gICAgICAgIGN1c3RvbWVySW5wdXQuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwaG9uZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24gKCkge1xuICAgICAgcGhvbmVJbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCd3cml0ZS11c19fZXJyb3InKTtcbiAgICB9KTtcblxuICAgIGN1c3RvbWVySW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBjdXN0b21lcklucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ3dyaXRlLXVzX19lcnJvcicpO1xuICAgIH0pO1xuICB9KTtcblxufSkoKTtcbiJdfQ==
