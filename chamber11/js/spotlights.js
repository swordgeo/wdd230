const requestURL = 'data/data.json';

const golden = [];
const silver = [];

console.log(golden);
console.log(silver);

fetch(requestURL).then(function (response) {return response.json();})
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const businesses = jsonObject['businesses'];
    businesses.forEach(shuffleIn);
    pushBusiness(random(golden, silver), 1)
    pushBusiness(random(golden, silver), 2)
    pushBusiness(random(golden, silver), 3);
  });

function shuffleIn(business) {
  if (business.membership == "gold") {
    golden.push(business);
  }
  else if (business.membership == "silver") {
    silver.push(business);
  }
  else {

  }
}

function random(golden, silver) {
  if (Math.random() < .66) {
    let num = Math.floor(Math.random()*golden.length)
    let pick = golden[num];
    golden.splice(num, 1);
    console.log(pick);
    return pick;
  }
  else {
    let num = Math.floor(Math.random()*silver.length)
    let pick = silver[num];
    silver.splice(num, 1);
    console.log(pick);
    return pick;
  }
}


function pushBusiness(subject, spotNumber) {

  document.querySelector(`#spotlight${spotNumber} h3`).textContent = subject.name;
  document.querySelector(`#spotlight${spotNumber} p`).textContent = subject.message;
  document.querySelector(`#spotlight${spotNumber} a`).textContent = `(${subject.phone.substring(0,3)}) ${subject.phone.substring(3,6)}-${subject.phone.substring(6,10)}`;
  document.querySelector(`#spotlight${spotNumber} a`).href = `tel:${subject.phone}`;
//website
  document.querySelector(`#spotlight${spotNumber} :nth-child(5)`).textContent = subject.website;
  document.querySelector(`#spotlight${spotNumber} :nth-child(5)`).href = subject.website;
  
  

}



/*
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
    document.querySelector('.listings').appendChild(listing);
  }
  */