const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';


fetch(requestURL).then(function (response) {return response.json();})
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];
    prophets.forEach(displayProphets);
  });



function displayProphets(prophet) {
  let card = document.createElement('section');
  let heading = document.createElement('h2');
  let birthDate = document.createElement('p');
  let birthPlace = document.createElement('p');
  let image = document.createElement('img');

  heading.textContent = prophet.name+' '+prophet.lastname;
  birthDate.textContent = 'Date of Birth: '+prophet.birthdate;
  birthPlace.textContent = 'Place of Birth: '+prophet.birthplace;
  image.src = prophet.imageurl;
  image.alt = prophet.name+' '+ prophet.lastname+' - '+prophet.order;

  card.appendChild(heading);
  card.appendChild(birthDate);
  card.appendChild(birthPlace);
  card.appendChild(image);
  document.querySelector('.cards').appendChild(card);

}

/*
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];
    prophets.forEach(displayProphets);
    
  });

  

  function displayProphets(prophet) {  // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
      // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = prophet.name + ' ' + prophet.lastname;
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
  }

*/

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