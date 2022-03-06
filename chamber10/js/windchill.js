let temp = parseFloat(document.querySelector("#temp").textContent);
let speed = parseFloat(document.querySelector("#wspeed").textContent);
let windchill = "";

//less than 50F; more than 3mph
if (temp <= 50 && speed > 3) {
  windchill = windChill(temp, speed);
  windchill = `${windchill}&#176;F`;
} else {
  windchill = "N/A";
}

document.querySelector("#wchill").innerHTML = windchill;

function windChill(temp, speed) {
  let answer = (35.74 + 0.6215*temp - 35.75*Math.pow(speed,0.16) + 0.4275*temp*Math.pow(speed,0.16));
  //round two decimals
  return Math.round((answer + Number.EPSILON) * 100) / 100;;
}
