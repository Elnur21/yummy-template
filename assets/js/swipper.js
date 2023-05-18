var swiper = new Swiper(".mySwiper", {
    loop: true,
    slidesPerView: 1,
    grabCursor: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints: {
        992: {
            slidesPerView: 3,
            spaceBetween:30
        }
      },

  });