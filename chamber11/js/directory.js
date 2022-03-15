const requestURL = 'data/data.json';

fetch(requestURL).then(function (response) {return response.json();})
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const businesses = jsonObject['businesses'];
    
    let holder = document.createElement('ul');
    document.querySelector('.listings').appendChild(holder);

    businesses.forEach(displayCards);
    businesses.forEach(displayListings);
  });


function displayCards(business) {
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

function displayListings(business) {
  
  let listing = document.createElement('li');
  let name = document.createElement('span');
  let address = document.createElement('span');
  let phone = document.createElement('a');
  let link = document.createElement('a');

  name.textContent = `${business.name}`;
  address.textContent = `${business.address}`;
  phone.href = `tel:${business.phone}`;
  phone.textContent = `(${business.phone.substring(0,3)}) ${business.phone.substring(3,6)}-${business.phone.substring(6,10)}`;
  link.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
  link.target = "_blank";
  link.textContent = `${business.website}`;

  listing.appendChild(name);
  listing.appendChild(phone);
  listing.appendChild(address);
  listing.appendChild(link);
  document.querySelector('.listings ul').appendChild(listing);
}


//swap buttons



const z = document.getElementById('listingsBtn');
z.addEventListener('click', function(){toggleDirectory('.listings', '.cards')});

const y = document.getElementById('cardsBtn');
y.addEventListener('click', function() {toggleDirectory('.cards', '.listings' )});

function toggleDirectory(showing, hiding) {
  document.querySelector(showing).classList.remove("open");
  document.querySelector(hiding).classList.add("open");
}