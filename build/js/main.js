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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1cmdlci1tZW51LmpzIiwiZm9ybS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuKGZ1bmN0aW9uICgpIHtcblxuICB2YXIgcGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlJyk7XG4gIHZhciBuYXZpZ2F0aW9uID0gcGFnZS5xdWVyeVNlbGVjdG9yKCcubmF2aWdhdGlvbicpO1xuICB2YXIgbmF2aWdhdGlvblRvZ2dsZSA9IG5hdmlnYXRpb24ucXVlcnlTZWxlY3RvcignLm5hdmlnYXRpb25fX3RvZ2dsZScpO1xuICB2YXIgbmF2aWdhdGlvbkxpc3QgPSBuYXZpZ2F0aW9uLnF1ZXJ5U2VsZWN0b3IoJy5uYXZpZ2F0aW9uX19saXN0Jyk7XG5cbiAgdmFyIG9wZW5NZW51ID0gZnVuY3Rpb24gKCkge1xuICAgIHBhZ2UuY2xhc3NMaXN0LmFkZCgncGFnZS0tbm8tc2Nyb2xsJyk7XG4gICAgbmF2aWdhdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCduYXZpZ2F0aW9uLS1jbG9zZWQnKTtcbiAgICBuYXZpZ2F0aW9uLmNsYXNzTGlzdC5hZGQoJ25hdmlnYXRpb24tLW9wZW5lZCcpO1xuICAgIG5hdmlnYXRpb25MaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25PdXRzaWRlTWVudUNsaWNrKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb25PcGVuTWVudUVzY1ByZXNzKTtcbiAgfTtcblxuICB2YXIgY2xvc2VNZW51ID0gZnVuY3Rpb24gKCkge1xuICAgIHBhZ2UuY2xhc3NMaXN0LnJlbW92ZSgncGFnZS0tbm8tc2Nyb2xsJyk7XG4gICAgbmF2aWdhdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCduYXZpZ2F0aW9uLS1vcGVuZWQnKTtcbiAgICBuYXZpZ2F0aW9uLmNsYXNzTGlzdC5hZGQoJ25hdmlnYXRpb24tLWNsb3NlZCcpO1xuICAgIG5hdmlnYXRpb25MaXN0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25PdXRzaWRlTWVudUNsaWNrKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb25PcGVuTWVudUVzY1ByZXNzKTtcbiAgfTtcblxuICB2YXIgb25PdXRzaWRlTWVudUNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgIGNsb3NlTWVudSgpO1xuICB9O1xuXG4gIHZhciBvbk9wZW5NZW51RXNjUHJlc3MgPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgaWYgKGV2dC5rZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNsb3NlTWVudSgpO1xuICAgIH1cbiAgfTtcblxuICBuYXZpZ2F0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ25hdmlnYXRpb24tLW5vanMnKTtcbiAgbmF2aWdhdGlvbi5jbGFzc0xpc3QuYWRkKCduYXZpZ2F0aW9uLS1jbG9zZWQnKTtcblxuICBuYXZpZ2F0aW9uVG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIGlmIChuYXZpZ2F0aW9uLmNsYXNzTGlzdC5jb250YWlucygnbmF2aWdhdGlvbi0tb3BlbmVkJykpIHtcbiAgICAgIGNsb3NlTWVudSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvcGVuTWVudSgpO1xuICAgIH1cbiAgfSk7XG5cbn0pKCk7XG4iLCIndXNlIHN0cmljdCc7XG5cbihmdW5jdGlvbiAoKSB7XG5cbiAgdmFyIFJFX1BIT05FID0gL15bXFxkXXsxMCwxMX0kLztcblxuICB2YXIgcGhvbmVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwaG9uZScpO1xuXG4gIHZhciBvblBob25lSW5wdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHBob25lSW5wdXQudmFsdWUgJiYgUkVfUEhPTkUudGVzdChwaG9uZUlucHV0LnZhbHVlKSkge1xuICAgICAgcGhvbmVJbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCd3cml0ZS11c19fZXJyb3InKTtcbiAgICAgIHBob25lSW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoJycpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwaG9uZUlucHV0LmNsYXNzTGlzdC5hZGQoJ3dyaXRlLXVzX19lcnJvcicpO1xuICAgICAgcGhvbmVJbnB1dC5zZXRDdXN0b21WYWxpZGl0eSgn0JLQstC10LTQuNGC0LUg0LrQvtGA0YDQtdC60YLQvdGL0Lkg0L3QvtC80LXRgCDRgtC10LvQtdGE0L7QvdCwINC40LcgMTAg0LjQu9C4IDExINGG0LjRhNGAINCx0LXQtyDQv9GA0L7QsdC10LvQvtCyINC4INGC0LjRgNC1LicpO1xuICAgIH1cblxuICAgIHBob25lSW5wdXQucmVwb3J0VmFsaWRpdHkoKTtcbiAgfTtcblxuICBwaG9uZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0Jywgb25QaG9uZUlucHV0KTtcblxufSkoKTtcbiJdfQ==
