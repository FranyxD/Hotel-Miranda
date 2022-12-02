// @ts-ignore
import Swiper from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";
const checkerWidth = () => {
    if (window.innerWidth < 834)
        return 1;
    else
        return 3;
};
//swiper core Features
let swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    keyboard: {
        enabled: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
let swiper2 = new Swiper(".mySwiper-rooms", {
    slidesPerView: checkerWidth(),
    spaceBetween: 30,
    slidesPerGroup: checkerWidth(),
    loop: false,
    loopFillGroupWithBlank: false,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
console.log(swiper2.params.slidesPerView);
//const swiperRooms = document.querySelector('#swiperRooms');//this contain class mySwiper-rooms
window.addEventListener("resize", (event) => {
    //slider centrado infinito
    swiper2.params.slidesPerView = checkerWidth();
});
