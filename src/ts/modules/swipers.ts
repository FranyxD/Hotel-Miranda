// @ts-ignore
import Swiper from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";



  const checkerWidth = ():number =>{
    if(window.innerWidth < 834) return 1;
    else return 3
  }

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


  const arrIcon : string[] = [
    "./assets/svg/bed.svg",
    "./assets/svg/drive.svg",
    "./assets/svg/cold.svg",
    "./assets/svg/lift.svg",
    "./assets/svg/nosmoke.svg",
    "./assets/svg/drink.svg"
  ]
  let swiper2 = new Swiper(".mySwiper-rooms", {
    slidesPerView: checkerWidth(),
        spaceBetween: 30,
        slidesPerGroup: checkerWidth(),
        loop: false,
        loopFillGroupWithBlank: false,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          renderBullet: function (index:any, className:any) {
            return '<img src="' + arrIcon[index] + '"class="' + className + ' iconsMenu">';
          },
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
  });
  console.log(swiper2.params.slidesPerView)

  //const swiperRooms = document.querySelector('#swiperRooms');//this contain class mySwiper-rooms
    window.addEventListener("resize", (event) => {
      //slider centrado infinito
      swiper2.params.slidesPerView = checkerWidth()
  });

 
  let swiper3 = new Swiper(".swiperMenu", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index:any, className:any) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
  });

  /**
   * <img src="./assets/svg/bed.svg" alt="bed">
          <img src="./assets/svg/ethernet.svg" alt="ethernet-wifi">
          <img src="./assets/svg/drive.svg" alt="drive car">
          <img src="./assets/svg/cold.svg" alt="cold">
          <img src="./assets/svg/lift.svg" alt="lift gym">
          <img src="./assets/svg/nosmoke.svg" alt="no smoke">
          <img src="./assets/svg/drink.svg" alt="drink bar">
   */