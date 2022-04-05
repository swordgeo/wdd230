const requestURL = 'data/temples.json';



fetch(requestURL).then(function (response) {return response.json();})
  .then(function (jsonObject) {
    console.table(jsonObject); //comment out
    const temples = jsonObject['temples'];

    temples.forEach(displayCards);
  });

function displayCards(temple) {
  let card = document.createElement('section');//
  let div1 = document.createElement('div');
  let heading = document.createElement('h2');//
  let history = document.createElement('p');//
  let image = document.createElement('img');//

  let button = document.createElement('button');
  let div2 = document.createElement('div');
  let br = document.createElement('br');
  

  let address = document.createElement('p');//
  let phone = document.createElement('a');//
  let ordSchedule = document.createElement('p');
  let sessSchedule = document.createElement('p');
  let servHead = document.createElement('h3');//
  let servList = document.createElement('ul');//
  for (let i = 0; i < temple.services.length; i++) {
    let item = document.createElement('li');
    item.textContent = temple.services[i];
    servList.appendChild(item);
  }
  let closeHead = document.createElement('h3');
  let closures = document.createElement('ul');//
  for (let i = 0; i < temple.closeSchedule.length; i++) {
    let item = document.createElement('li');
    item.textContent = temple.closeSchedule[i];
    closures.appendChild(item);
  }

  heading.textContent = `${temple.name}`;
  history.textContent = `${temple.history}`;
  address.textContent = `${temple.address}`;
  phone.href = `tel:${temple.phone}`;
  phone.textContent = `(${temple.phone.substring(0,3)}) ${temple.phone.substring(3,6)}-${temple.phone.substring(6,10)}`;
  image.src = temple.image;
  image.alt = `Image of ${temple.name}`;

  ordSchedule.textContent = `Ordinance Schedule: ${temple.ordSchedule}`;
  sessSchedule.textContent = `Session Schedule: ${temple.sessSchedule}`;
  servHead.textContent = `Temple Services`;
  closeHead.textContent = `Temple Closures`;

  button.classList.add("more");
  button.textContent = "Learn More";
  button.addEventListener("click", function() {
    divToggle(button);
  });
  div2.classList.add("info");

  div1.appendChild(heading);
  div1.appendChild(history);
  div1.appendChild(image);

  div2.appendChild(phone);
  div2.appendChild(address); 
  div2.appendChild(servHead);
  div2.appendChild(servList);
  div2.appendChild(ordSchedule);
  div2.appendChild(sessSchedule);
  div2.appendChild(closeHead);
  div2.appendChild(closures);

  div1.appendChild(br);
  div1.appendChild(button);
  card.appendChild(div1);
  card.appendChild(div2);

  document.querySelector('.cards').appendChild(card);

  function divToggle(button) {
    button.parentElement.parentElement.querySelector(".info").classList.toggle("open");
  }
}

//https://www.thiscodeworks.com/add-event-listener-to-multiple-buttons-with-the-same-class-javascript/5efa75c76c23bc0014be6336
//Remembered now that this didn't even work and I have no idea who to attribute this convoluted mess to
//Since nothing I looked up worked I guess no one
//"My own ridiculous trial-and-error"