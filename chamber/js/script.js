
//hamburger
function toggleMenu() {
  document.getElementById('primaryNav').classList.toggle("open");
  document.getElementById('hamburgerBtn').classList.toggle("open");
}

const x = document.getElementById('hamburgerBtn')
x.onclick = toggleMenu;
//end hamburger

const yearDisplay = document.querySelector('footer h2');
var today = new Date();
var todayYear = today.getFullYear();
yearDisplay.innerHTML = `&copy; ${todayYear} - George Blanchard - Indiana`;

const modDateDisplay = document.getElementById('modDate');
let modDate = document.lastModified;
modDateDisplay.textContent = ("Last modified "+modDate);

// select the elements to manipulate (output to)
const datefield = document.getElementById('date');
const fulldate = new Intl.DateTimeFormat("en-UK", { dateStyle: "full" }).format(today);
datefield.innerHTML = `<strong>${fulldate}</strong>`;