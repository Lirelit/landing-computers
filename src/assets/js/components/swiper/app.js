import Swiper from 'swiper/bundle';

const partnersSwiper = new Swiper('.partners__container', {
    spaceBetween: -2,
    slidesPerView: 1.5,
    slidesPerColumn: 2,
    slidesPerColumnFill: 'row',
    slidesPerGroup: 1,
    grabCursor: true,
    autoplay: {
      delay: 3000
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        slidesPerColumn: 2,
        slidesPerColumnFill: 'row',
        slidesPerGroup: 2,
      },
  
      992: {
        slidesPerView: 4,
        slidesPerColumn: 2,
        slidesPerColumnFill: 'row',
      },
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  
  const teachersSwiper = new Swiper('.teachers__container', {
    spaceBetween: 2,
    slidesPerView: 1.5,
    slidesPerGroup: 1,
    grabCursor: true,
    autoplay: {
      delay: 3000
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
  
      992: {
        slidesPerView: 3,
      },
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });