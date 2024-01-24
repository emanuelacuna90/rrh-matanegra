export const slides = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
    { id: 11 },
    { id: 12 },
    { id: 13 },
    { id: 14 },
    { id: 15 },
    { id: 16 },
    { id: 17 },
    { id: 18 },
    { id: 19 },
    { id: 20 },
  ]
  
  export const swiperProps = {
    spaceBetween: 30,
    loop: false,
    pagination: {
      clickable: true,
    },
    slidesPerView: 4,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
        1180: {
          slidesPerView: 8,
        },
        700: {
            slidesPerView: 5,
          },
      },
  }