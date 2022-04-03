

//const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=4348599&units=imperial&appid=bcbf0301f80c70e9e8f4bca6cd28a33f';

const bethesda = 'https://api.openweathermap.org/data/2.5/onecall?lat=38.9859581&lon=-77.1282094&units=imperial&exclude=hourly,minutely&appid=54773efc60fabf4176586b0daf4b409c';
//It kicked me out 7:00pm Saturday
//Hopefully it will work Sunday?


fetch(bethesda)
  .then((response) => response.json())
  .then((jsObject) => {
    currentWeather('#bethesda',jsObject);

    for (let day = 0; day < 3; day++) {
      // Runs 5 times, with values of step 0 through 4.
      forecast('#forecast', jsObject, day);
    }
  });

function currentWeather(HTMLtag, jsObject) {

  let temp = document.createElement('p');
  let weatherIcon = document.createElement('img');
  let weatherCond = document.createElement('p');
  let humidity = document.createElement('p');

  temp.innerHTML = `Temp: ${jsObject.current.temp.toFixed(1)}&#176;F`;
  weatherCond.textContent = `Currently: ${capitalize(jsObject.current.weather[0].description)}`;
  humidity.innerHTML = `Humidity: ${jsObject.current.humidity}%`;
  let imgsrc = `https://api.openweathermap.org/img/w/${jsObject.current.weather[0].icon}.png`;
  let imgalt = jsObject.current.weather[0].description;
  
  weatherIcon.setAttribute('src', imgsrc);
  weatherIcon.setAttribute('alt', imgalt);
  document.querySelector(HTMLtag).appendChild(weatherIcon);
  document.querySelector(HTMLtag).appendChild(weatherCond);
  document.querySelector(HTMLtag).appendChild(temp);
  document.querySelector(HTMLtag).appendChild(humidity);
  function capitalize(sentence) {
    let words = sentence.split(" ");
    let caps = words.map( word => {
      return  word.replace(word[0], word[0].toUpperCase())
  })
    return caps.join(' ')
  }
}

function forecast(HTMLtag, jsObject, dayNum) {
  
  console.log(jsObject);
  let day = jsObject.daily[dayNum];
  let card = document.createElement('div');
  let temp = document.createElement('p');
  let weatherIcon = document.createElement('img');
  let weatherCond = document.createElement('p');
  let wkDay = document.createElement('h4');
  temp.innerHTML = `Temp: ${day.temp.day.toFixed(1)}&#176;F`;
  weatherCond.textContent = `Currently: ${capitalize(day.weather[0].description)}`;
  wkDay.textContent = weekday(day.dt*1000);
  let imgsrc = `https://api.openweathermap.org/img/w/${day.weather[0].icon}.png`;
  let imgalt = day.weather[0].description;
  
  weatherIcon.setAttribute('src', imgsrc);
  weatherIcon.setAttribute('alt', imgalt);
  card.appendChild(wkDay);
  card.appendChild(weatherIcon);
  card.appendChild(weatherCond);
  card.appendChild(temp);
  document.querySelector(HTMLtag).appendChild(card);
  function capitalize(sentence) {
    let words = sentence.split(" ");
    let caps = words.map( word => {
      return  word.replace(word[0], word[0].toUpperCase())
  })
    return caps.join(' ')
  }
  
  //this technically doesn't need to be a function anymore but it ain't broke so we ain't fixing it
  function weekday(timestamp) {
    stamp = new Date(timestamp);
    const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let day = weekdays[stamp.getDay()];
    return day;
  }
    
}

/*
function currentWeather(HTMLtag, apiURL) {
  fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);

    let temp = document.createElement('p');
    let weatherIcon = document.createElement('img');
    let weatherCond = document.createElement('p');
    let humidity = document.createElement('p');

  
    temp.innerHTML = `Temp: ${jsObject.current.temp.toFixed(1)}&#176;F`;
    weatherCond.textContent = `Currently: ${capitalize(jsObject.current.weather[0].description)}`;
    humidity.innerHTML = `Humidity: ${jsObject.current.humidity}%`;

    let imgsrc = `https://api.openweathermap.org/img/w/${jsObject.current.weather[0].icon}.png`;
    let imgalt = jsObject.current.weather[0].description;
    
    weatherIcon.setAttribute('src', imgsrc);
    weatherIcon.setAttribute('alt', imgalt);

    document.querySelector(HTMLtag).appendChild(weatherIcon);
    document.querySelector(HTMLtag).appendChild(weatherCond);
    document.querySelector(HTMLtag).appendChild(temp);
    document.querySelector(HTMLtag).appendChild(humidity);

    function capitalize(sentence) {
      let words = sentence.split(" ");
      let caps = words.map( word => {
        return  word.replace(word[0], word[0].toUpperCase())
    })
      return caps.join(' ')
    }
  });
}

function forecast(HTMLtag, apiURL, dayNum) {
  fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    let day = jsObject.daily[dayNum];

    let card = document.createElement('div');
    let temp = document.createElement('p');
    let weatherIcon = document.createElement('img');
    let weatherCond = document.createElement('p');
    let wkDay = document.createElement('h4');

    temp.innerHTML = `Temp: ${day.temp.day.toFixed(1)}&#176;F`;
    weatherCond.textContent = `Currently: ${capitalize(day.weather[0].description)}`;
    wkDay.textContent = weekday(day.dt*1000);

    let imgsrc = `https://api.openweathermap.org/img/w/${day.weather[0].icon}.png`;
    let imgalt = day.weather[0].description;
    
    weatherIcon.setAttribute('src', imgsrc);
    weatherIcon.setAttribute('alt', imgalt);

    card.appendChild(wkDay);
    card.appendChild(weatherIcon);
    card.appendChild(weatherCond);
    card.appendChild(temp);
    document.querySelector(HTMLtag).appendChild(card);

    function capitalize(sentence) {
      let words = sentence.split(" ");
      let caps = words.map( word => {
        return  word.replace(word[0], word[0].toUpperCase())
    })
      return caps.join(' ')
    }
    
    //this technically doesn't need to be a function anymore but it ain't broke so we ain't fixing it
    function weekday(timestamp) {
      stamp = new Date(timestamp);
      const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
      let day = weekdays[stamp.getDay()];
      return day;
    }
    
});
}
*/



/*
function currentWeather(HTMLtag, apiURL) {
  fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    //console.log(jsObject);

    let temp = document.createElement('p');
    let weatherIcon = document.createElement('img');
    let weatherCond = document.createElement('p');
    let humidity = document.createElement('p');

  
    temp.innerHTML = `Temp: ${jsObject.current.temp.toFixed(1)}&#176;F`;
    weatherCond.textContent = `Currently: ${capitalize(jsObject.current.weather[0].description)}`;
    humidity.innerHTML = `Humidity: ${jsObject.current.humidity}%`;

    let imgsrc = `https://api.openweathermap.org/img/w/${jsObject.current.weather[0].icon}.png`;
    let imgalt = jsObject.current.weather[0].description;
    
    weatherIcon.setAttribute('src', imgsrc);
    weatherIcon.setAttribute('alt', imgalt);

    document.querySelector(HTMLtag).appendChild(weatherIcon);
    document.querySelector(HTMLtag).appendChild(weatherCond);
    document.querySelector(HTMLtag).appendChild(temp);
    document.querySelector(HTMLtag).appendChild(humidity);

    function capitalize(sentence) {
      let words = sentence.split(" ");
      let caps = words.map( word => {
        return  word.replace(word[0], word[0].toUpperCase())
    })
      return caps.join(' ')
    }
  });
}

function forecast(HTMLtag, apiURL, dayNum) {
  fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    let day = jsObject.daily[dayNum];

    let card = document.createElement('div');
    let temp = document.createElement('p');
    let weatherIcon = document.createElement('img');
    let weatherCond = document.createElement('p');
    let wkDay = document.createElement('h4');

    temp.innerHTML = `Temp: ${day.temp.day.toFixed(1)}&#176;F`;
    weatherCond.textContent = `Currently: ${capitalize(day.weather[0].description)}`;
    wkDay.textContent = weekday(day.dt*1000);

    let imgsrc = `https://api.openweathermap.org/img/w/${day.weather[0].icon}.png`;
    let imgalt = day.weather[0].description;
    
    weatherIcon.setAttribute('src', imgsrc);
    weatherIcon.setAttribute('alt', imgalt);

    card.appendChild(wkDay);
    card.appendChild(weatherIcon);
    card.appendChild(weatherCond);
    card.appendChild(temp);
    document.querySelector(HTMLtag).appendChild(card);

    function capitalize(sentence) {
      let words = sentence.split(" ");
      let caps = words.map( word => {
        return  word.replace(word[0], word[0].toUpperCase())
    })
      return caps.join(' ')
    }
    
    //this technically doesn't need to be a function anymore but it ain't broke so we ain't fixing it
    function weekday(timestamp) {
      stamp = new Date(timestamp);
      const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
      let day = weekdays[stamp.getDay()];
      return day;
    }
    
});
}

*/


/*
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    const tempQ = document.querySelector('#temp');
    const weatherIcon = document.querySelector('#weathericon');
    const speedQ = document.querySelector('#wspeed');
    const weatherCond = document.querySelector('#weather-cond');

    let temp = jsObject.current.temp;
    let speed = jsObject.current.weather.wind_speed;
    
    tempQ.textContent = temp.toFixed(1);
    speedQ.textContent = parseFloat(speed).toFixed(1);
    
    weatherCond.textContent = capitalize(jsObject.current.weather[0].description);

    let imgsrc = `https://api.openweathermap.org/img/w/${jsObject.current.weather[0].icon}.png`;
    let imgalt = jsObject.current.weather[0].description;
    
    weatherIcon.setAttribute('src', imgsrc);
    weatherIcon.setAttribute('alt', imgalt);
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

    function capitalize(sentence) {
      let words = sentence.split(" ");
      let caps = words.map( word => {
        return  word.replace(word[0], word[0].toUpperCase())
    })
      return caps.join(' ')
    }

    

  });
  */

