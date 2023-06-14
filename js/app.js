const swiperEl = document.querySelector("swiper-container");
const buttonLeft = document.querySelector("[data-btn-left]");
const buttonRight = document.querySelector("[data-btn-right]");

buttonLeft.addEventListener("click", () => {
  swiperEl.swiper.slideNext();
});
buttonRight.addEventListener("click", () => {
  swiperEl.swiper.slidePrev();
});
