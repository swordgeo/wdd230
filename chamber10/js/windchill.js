const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=4926563&units=imperial&appid=bcbf0301f80c70e9e8f4bca6cd28a33f';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    const tempQ = document.querySelector('#temp');
    const weathericon = document.querySelector('#weathericon');
    const speedQ = document.querySelector('#wspeed');

    let temp = jsObject.main.temp;
    let speed = jsObject.wind.speed;
    
    tempQ.textContent = temp.toFixed(1);
    speedQ.textContent = speed.toFixed(1);

    let imgsrc = `https://api.openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    let imgalt = jsObject.weather[0].description;
    weathericon.setAttribute('src', imgsrc);
    weathericon.setAttribute('alt', imgalt);
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
      return Math.round((answer + Number.EPSILON) * 10) / 10;
    }

  });

  //Check Week 10 minute 30:00 if I need to list the weather description in text