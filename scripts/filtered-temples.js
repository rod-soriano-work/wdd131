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

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
];

const gallery = document.querySelector('.gallery');
const navLinks = document.querySelectorAll('.desktop-nav nav a');
const mainTitle = document.querySelector('main h1');

function displayTemples(templesToDisplay) {
  gallery.innerHTML = '';
  templesToDisplay.forEach(temple => {
    const card = document.createElement('div');
    card.className = 'temple-card';
    card.innerHTML = `
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
      <h2>${temple.templeName}</h2>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
    `;
    gallery.appendChild(card);
  });
}

function filterTemples(filter) {
  let filtered = temples;
  switch (filter) {
    case 'Old':
      filtered = temples.filter(t => {
        const year = parseInt(t.dedicated.split(',')[0]);
        return year < 1900;
      });
      break;
    case 'New':
      filtered = temples.filter(t => {
        const year = parseInt(t.dedicated.split(',')[0]);
        return year > 2000;
      });
      break;
    case 'Large':
      filtered = temples.filter(t => t.area > 90000);
      break;
    case 'Small':
      filtered = temples.filter(t => t.area < 10000);
      break;
    default:
      filtered = temples;
  }
  displayTemples(filtered);
  mainTitle.textContent = filter === 'Home' ? 'Home' : filter;
}

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const filter = link.textContent.trim();
    filterTemples(filter);
  });
});

displayTemples(temples);
