const requestURL = 'data/data.json';

fetch(requestURL).then(function (response) {return response.json();})
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const businesses = jsonObject['businesses'];
    businesses.forEach(displayBusiness);
  });

/*
  "name": "Cletus' Cockroach Cillers",
  "address": "",
  "phone": "(260) 555-0111",
  "website":"https://www.CletusMurdersBugs.com/",
  "image":"images/directory/ccc.png"

  <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">Contact Us</a>
  */

function displayBusiness(business) {
  let card = document.createElement('section');
  let heading = document.createElement('h2');
  let address = document.createElement('p');
  let phone = document.createElement('a');
  let link = document.createElement('a');
  let image = document.createElement('img');

  heading.textContent = `${business.name}`;
  address.textContent = `${business.address}`;
  phone.href = `tel:${business.phone}`;
  phone.textContent = `(${business.phone.substring(0,3)}) ${business.phone.substring(3,6)}-${business.phone.substring(6,10)}`;
  link.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  link.target = "_blank";
  link.textContent = `${business.website}`;

  image.src = business.image;
  image.alt = `Image of ${business.name}`;

  card.appendChild(heading);
  card.appendChild(phone);
  card.appendChild(address);
  card.appendChild(link);
  card.appendChild(image);
  document.querySelector('.cards').appendChild(card);
}