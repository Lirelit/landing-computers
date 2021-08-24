const burger = document.querySelector('.burger');
const menuWrapEl = document.querySelector('.header__menu-wrap');

burger.addEventListener('click', function () {
  burger.classList.toggle('burger_closed');
  menuWrapEl.classList.toggle('header__menu-wrap_visible');
  document.body.classList.toggle('content-hidden');
});