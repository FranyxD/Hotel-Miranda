"use strict";
const nav = document.getElementById('navegation');
const burger = document.getElementById('burger');
burger === null || burger === void 0 ? void 0 : burger.addEventListener('click', () => {
    nav === null || nav === void 0 ? void 0 : nav.classList.toggle("activeNav");
    console.log('click');
});
