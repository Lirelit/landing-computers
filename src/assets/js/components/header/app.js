const headerEl = document.querySelector('.header');

document.addEventListener("DOMContentLoaded", function () {
  let scrollPos = window.scrollY;
  if (scrollPos > 0) {
    headerEl.classList.add('header_fixed')
  } else {
    headerEl.classList.remove('header_fixed')
  };
});

window.addEventListener('scroll', function () {
  let scrollPos = window.scrollY;
  if (scrollPos > 0) {
    headerEl.classList.add('header_fixed')
  } else {
    headerEl.classList.remove('header_fixed')
  };
});