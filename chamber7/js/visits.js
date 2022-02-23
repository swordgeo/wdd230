const visitDisplay = document.getElementById('visit-display');

//get right now

rightNow = Number(Date.now());

//Find last visit from Local Storage
let lastTime = Number(window.localStorage.getItem("last-time"));
let daysNumber = Math.round((rightNow - lastTime)/86400000);

//Calculate number of days
//Change the factor from 1000 to 86,400,000 before publish
if (lastTime !== 0) {
  visitDisplay.innerHTML = `<strong>It's been ${daysNumber} days since your last visit. Welcome Back!</strong>`;
}
else if (daysNumber === 1) {
  visitDisplay.innerHTML = `<strong>It's been ${daysNumber} days since your last visit. Welcome Back!</strong>`;
}
else {
  visitDisplay.textContent = `<strong>This is your first time here! Welcome!</strong>`;
}

localStorage.setItem("last-time", rightNow);