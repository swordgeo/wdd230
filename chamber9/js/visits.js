const visitDisplay = document.getElementById('visit-display');

//get right now

rightNow = Number(Date.now());

//Find last visit from Local Storage
let lastTime = Number(window.localStorage.getItem("last-time"));

//Calculate number of days
//Change the factor from 1000 to 86,400,000 before publish
if (lastTime !== 0) {
  daysNumber = Math.round((rightNow - lastTime)/86400000);
  visitDisplay.textContent = `It's been ${daysNumber} days since your last visit. Welcome Back!`;
}
else {
  visitDisplay.textContent = `This is your first time here! Welcome!`;
}

localStorage.setItem("last-time", rightNow);