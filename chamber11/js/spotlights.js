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
  });

function shuffleIn(business) {
  if (business.membership = "gold") {
    golden.push(business);
  }
  else if (business.membership = "silver") {
    silver.push(business);
  }
  else {

  }
  

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