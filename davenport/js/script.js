
//hamburger
function toggleMenu() {
  document.getElementById('primaryNav').classList.toggle("open");
  document.getElementById('hamburgerBtn').classList.toggle("open");
}

const x = document.getElementById('hamburgerBtn')
x.onclick = toggleMenu;


//dates
const yearDisplay = document.querySelector('footer h2');
var today = new Date();
var todayYear = today.getFullYear();
//copyright
yearDisplay.innerHTML = `&copy; ${todayYear} - George Blanchard - Indiana`;
//modDate
const modDateDisplay = document.getElementById('modDate');
let modDate = document.lastModified;
modDateDisplay.textContent = ("Last modified "+modDate);
//currentDay
const datefield = document.getElementById('date');
const fulldate = new Intl.DateTimeFormat("en-UK", { dateStyle: "full" }).format(today);
datefield.innerHTML = `<strong>${fulldate}</strong>`;
//weekday banner calculator
let weekday = today.getDay();
const banner = document.getElementById('banner');
if (weekday >=1 && weekday <=2) {banner.style.display = "block";}