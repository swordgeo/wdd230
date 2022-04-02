function toggleMenu() {
  document.getElementById('primaryNav').classList.toggle("open");
  document.getElementById('hamburgerBtn').classList.toggle("open");
}

const x = document.getElementById('hamburgerBtn')
x.onclick = toggleMenu;

//
const yearDisplay = document.querySelector('footer h2');
var today = new Date();
var todayYear = today.getFullYear();
//copyright
yearDisplay.innerHTML = `&copy; ${todayYear} - George Blanchard - Indiana`;
//modDate
const modDateDisplay = document.getElementById('modDate');
let modDate = document.lastModified;
modDateDisplay.textContent = ("Last modified "+modDate);