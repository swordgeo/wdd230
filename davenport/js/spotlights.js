const requestURL = 'data/data.json';

const golden = [];
const silver = [];

//console.log(golden);
//console.log(silver);

fetch(requestURL).then(function (response) {return response.json();})
  .then(function (jsonObject) {
    //console.table(jsonObject);  // temporary checking for valid response and data parsing
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
}

function random(golden, silver) {
  if (Math.random() < .66) {
    let num = Math.floor(Math.random()*golden.length)
    let pick = golden[num];
    golden.splice(num, 1);
    //console.log(pick);
    return pick;
  }
  else {
    let num = Math.floor(Math.random()*silver.length)
    let pick = silver[num];
    silver.splice(num, 1);
    //console.log(pick);
    return pick;
  }
}

function pushBusiness(subject, spotNumber) {
  let subName = document.createElement('h3');
  let subMessage = document.createElement('p');
  let subPhone = document.createElement('a');
  let subSite = document.createElement('a');
  let linebreak = document.createElement('br');

  subName.textContent = subject.name;
  subMessage.textContent = subject.message;
  subPhone.textContent = `(${subject.phone.substring(0,3)}) ${subject.phone.substring(3,6)}-${subject.phone.substring(6,10)}`;
  subPhone.href = `tel:${subject.phone}`;
  subSite.textContent = subject.website;
  subSite.href = subject.website;
  
  document.querySelector(`#spotlight${spotNumber}`).appendChild(subName);
  document.querySelector(`#spotlight${spotNumber}`).appendChild(linebreak);
  document.querySelector(`#spotlight${spotNumber}`).appendChild(subPhone);
  document.querySelector(`#spotlight${spotNumber}`).appendChild(subMessage);
  document.querySelector(`#spotlight${spotNumber}`).appendChild(subSite);

}

/*
function pushBusiness(subject, spotNumber) {
  document.querySelector(`#spotlight${spotNumber} h3`).textContent = subject.name;
  document.querySelector(`#spotlight${spotNumber} p`).textContent = subject.message;
  document.querySelector(`#spotlight${spotNumber} a`).textContent = `(${subject.phone.substring(0,3)}) ${subject.phone.substring(3,6)}-${subject.phone.substring(6,10)}`;
  document.querySelector(`#spotlight${spotNumber} a`).href = `tel:${subject.phone}`;
//website
  document.querySelector(`#spotlight${spotNumber} :nth-child(5)`).textContent = subject.website;
  document.querySelector(`#spotlight${spotNumber} :nth-child(5)`).href = subject.website;
}
*/