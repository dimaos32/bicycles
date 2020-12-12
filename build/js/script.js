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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1cmdlci1tZW51LmpzIiwiZm9ybS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG4oZnVuY3Rpb24gKCkge1xuXG4gIHZhciBwYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2UnKTtcbiAgdmFyIG5hdmlnYXRpb24gPSBwYWdlLnF1ZXJ5U2VsZWN0b3IoJy5uYXZpZ2F0aW9uJyk7XG4gIHZhciBuYXZpZ2F0aW9uVG9nZ2xlID0gbmF2aWdhdGlvbi5xdWVyeVNlbGVjdG9yKCcubmF2aWdhdGlvbl9fdG9nZ2xlJyk7XG4gIHZhciBuYXZpZ2F0aW9uTGlzdCA9IG5hdmlnYXRpb24ucXVlcnlTZWxlY3RvcignLm5hdmlnYXRpb25fX2xpc3QnKTtcblxuICB2YXIgb3Blbk1lbnUgPSBmdW5jdGlvbiAoKSB7XG4gICAgcGFnZS5jbGFzc0xpc3QuYWRkKCdwYWdlLS1uby1zY3JvbGwnKTtcbiAgICBuYXZpZ2F0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ25hdmlnYXRpb24tLWNsb3NlZCcpO1xuICAgIG5hdmlnYXRpb24uY2xhc3NMaXN0LmFkZCgnbmF2aWdhdGlvbi0tb3BlbmVkJyk7XG4gICAgbmF2aWdhdGlvbkxpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbk91dHNpZGVNZW51Q2xpY2spO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBvbk9wZW5NZW51RXNjUHJlc3MpO1xuICB9O1xuXG4gIHZhciBjbG9zZU1lbnUgPSBmdW5jdGlvbiAoKSB7XG4gICAgcGFnZS5jbGFzc0xpc3QucmVtb3ZlKCdwYWdlLS1uby1zY3JvbGwnKTtcbiAgICBuYXZpZ2F0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ25hdmlnYXRpb24tLW9wZW5lZCcpO1xuICAgIG5hdmlnYXRpb24uY2xhc3NMaXN0LmFkZCgnbmF2aWdhdGlvbi0tY2xvc2VkJyk7XG4gICAgbmF2aWdhdGlvbkxpc3QucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbk91dHNpZGVNZW51Q2xpY2spO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBvbk9wZW5NZW51RXNjUHJlc3MpO1xuICB9O1xuXG4gIHZhciBvbk91dHNpZGVNZW51Q2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgY2xvc2VNZW51KCk7XG4gIH07XG5cbiAgdmFyIG9uT3Blbk1lbnVFc2NQcmVzcyA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICBpZiAoZXZ0LmtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY2xvc2VNZW51KCk7XG4gICAgfVxuICB9O1xuXG4gIG5hdmlnYXRpb24uY2xhc3NMaXN0LnJlbW92ZSgnbmF2aWdhdGlvbi0tbm9qcycpO1xuICBuYXZpZ2F0aW9uLmNsYXNzTGlzdC5hZGQoJ25hdmlnYXRpb24tLWNsb3NlZCcpO1xuXG4gIG5hdmlnYXRpb25Ub2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKG5hdmlnYXRpb24uY2xhc3NMaXN0LmNvbnRhaW5zKCduYXZpZ2F0aW9uLS1vcGVuZWQnKSkge1xuICAgICAgY2xvc2VNZW51KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9wZW5NZW51KCk7XG4gICAgfVxuICB9KTtcblxufSkoKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuKGZ1bmN0aW9uICgpIHtcblxuICB2YXIgUkVfUEhPTkUgPSAvXltcXGRdezEwLDExfSQvO1xuXG4gIHZhciBwaG9uZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Bob25lJyk7XG5cbiAgdmFyIG9uUGhvbmVJbnB1dCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAocGhvbmVJbnB1dC52YWx1ZSAmJiBSRV9QSE9ORS50ZXN0KHBob25lSW5wdXQudmFsdWUpKSB7XG4gICAgICBwaG9uZUlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ3dyaXRlLXVzX19lcnJvcicpO1xuICAgICAgcGhvbmVJbnB1dC5zZXRDdXN0b21WYWxpZGl0eSgnJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBob25lSW5wdXQuY2xhc3NMaXN0LmFkZCgnd3JpdGUtdXNfX2Vycm9yJyk7XG4gICAgICBwaG9uZUlucHV0LnNldEN1c3RvbVZhbGlkaXR5KCfQktCy0LXQtNC40YLQtSDQutC+0YDRgNC10LrRgtC90YvQuSDQvdC+0LzQtdGAINGC0LXQu9C10YTQvtC90LAg0LjQtyAxMCDQuNC70LggMTEg0YbQuNGE0YAg0LHQtdC3INC/0YDQvtCx0LXQu9C+0LIg0Lgg0YLQuNGA0LUuJyk7XG4gICAgfVxuXG4gICAgcGhvbmVJbnB1dC5yZXBvcnRWYWxpZGl0eSgpO1xuICB9O1xuXG4gIHBob25lSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBvblBob25lSW5wdXQpO1xuXG59KSgpO1xuIl19
