// doc: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.getElementById("currentyear");
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

    const lastMod = document.getElementById("lastModified");
    if (lastMod) lastMod.textContent = `Last Modified: ${document.lastModified}`;
});

const menuBtn = document.querySelector('.menu-btn');
const desktopNav = document.querySelector('.desktop-nav');
let menuOpen = false;

if (menuBtn && desktopNav) {
    menuBtn.addEventListener('click', () => {
        menuOpen = !menuOpen;
        if (menuOpen) {
            desktopNav.style.display = 'block';
            menuBtn.innerHTML = '&times;'; // X symbol, doc: https://www.w3schools.com/charsets/ref_html_entities_4.asp
        } else {
            desktopNav.style.display = 'none';
            menuBtn.innerHTML = '&#8801;'; // Hamburger, doc: https://www.w3schools.com/charsets/ref_html_entities_4.asp
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth >= 700) {
            desktopNav.style.display = 'flex';
            menuBtn.innerHTML = '&#8801';
            menuOpen = false;
        } else {
            desktopNav.style.display = 'none';
        }
    });
}