const nav = document.getElementById('navegation');
const burger = document.getElementById('burger');

burger?.addEventListener('click', () => {
    nav?.classList.toggle("activeNav");
    console.log('click')
})