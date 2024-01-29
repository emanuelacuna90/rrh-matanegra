export const swiperProps = {
  spaceBetween: 10,
  slidesPerView: 3,
  loop: false,
  pagination: {
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    375: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 3,
    },
  },
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
}
