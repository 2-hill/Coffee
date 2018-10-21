"use strict";
// fetching json data
fetch("./json/data.js")
  .then(function(response) {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' + response.status);
          return;
        }})
  .catch(function(err) {console.log('Fetch Error :-S', err)});

// loop over json to populate table
let populate = function() {
  let tr;
  let tdPrice;
  let content = TABLE_DATA.length;
  let body = document.getElementsByTagName('tbody')[0];

  for (let i = 0; i < content; i++) {
      // append rows
      tr = document.createElement('tr');
      body.appendChild(tr);
      // filling name cells
      let tdFlavor = document.createElement('td');
      tdFlavor.setAttribute('id', "flavorColumn")
      tdFlavor.innerHTML = TABLE_DATA[i].flavor;
      tr.appendChild(tdFlavor);
      // filling image cells
      let img = document.createElement('img')
      img.setAttribute('src', TABLE_DATA[i].thumbnailUrl)
      img.setAttribute('id', "imgColumn")
      tr.appendChild(img);
      // filling composition cells
      let tdCompo = document.createElement('td');
      tdCompo.setAttribute('id', "compoColumn")
      tdCompo.innerHTML = TABLE_DATA[i].composition;
      tr.appendChild(tdCompo);
      // filling price cells
      tdPrice = document.createElement('td');
      tdPrice.setAttribute("id", "priceColumn");
      tdPrice.innerHTML = "$" + TABLE_DATA[i].price;
      tr.appendChild(tdPrice);
  };
};
populate();

// shuffle rows function
let randomize = function() {
  let body = document.getElementsByTagName('tbody')[0];
  for (let i = body.children.length; i >= 0; i--) {
    body.appendChild(body.children[Math.random() * i | 0]);
  }
};
// set interval function
let intervalID;
let everySecond = function() {
  intervalID = setInterval(randomize, 1000)
  document.getElementById('start').disabled = true;
};
// stop interval function
let stopEverySecond = function() {
  clearInterval(intervalID)
  document.getElementById('start').disabled = false;
};

// sort functions
let descArray = [...TABLE_DATA.sort( (a, b) => a.price > b.price ? -1 : 1)];
let descending = function () {

    for (let i = 0; i < descArray.length; i++) {
      let oldPrice = document.getElementById('priceColumn');
      let newPrice = document.createElement('td');
      newPrice.innerHTML = "$" + descArray[i].price;
      oldPrice.parentNode.replaceChild(newPrice, oldPrice);

      let oldImg = document.getElementById("imgColumn")
      let newImg = document.createElement('img');
      newImg.setAttribute('src', descArray[i].thumbnailUrl)
      oldImg.parentNode.replaceChild(newImg, oldImg);

      let oldFlavor = document.getElementById('flavorColumn');
      let newFlavor = document.createElement('td');
      newFlavor.innerHTML = descArray[i].flavor;
      oldFlavor.parentNode.replaceChild(newFlavor, oldFlavor);

      let oldCompo = document.getElementById('compoColumn');
      let newCompo = document.createElement('td');
      newCompo.innerHTML = descArray[i].composition;
      oldCompo.parentNode.replaceChild(newCompo, oldCompo);
  };
//document.getElementById('sortDesc').disabled = true;
};

let ascArray = [...TABLE_DATA.sort((a, b) => a.price > b.price ? 1 : -1 )];
let ascending = function () {
    for (let i = 0; i < ascArray.length; i++) {
      let oldPrice = document.getElementById('priceColumn');
      let newPrice = document.createElement('td');
      newPrice.innerHTML = "$" + ascArray[i].price;
      oldPrice.parentNode.replaceChild(newPrice, oldPrice);

      let oldImg = document.getElementById("imgColumn")
      let newImg = document.createElement('img');
      newImg.setAttribute('src', ascArray[i].thumbnailUrl)
      oldImg.parentNode.replaceChild(newImg, oldImg);

      let oldFlavor = document.getElementById('flavorColumn');
      let newFlavor = document.createElement('td');
      newFlavor.innerHTML = ascArray[i].flavor;
      oldFlavor.parentNode.replaceChild(newFlavor, oldFlavor);

      let oldCompo = document.getElementById('compoColumn');
      let newCompo = document.createElement('td');
      newCompo.innerHTML = ascArray[i].composition;
      oldCompo.parentNode.replaceChild(newCompo, oldCompo);
    }
};

// listen randomize, stop randomize and sorting events
let clickStart = document.getElementById('start').addEventListener("click", everySecond);
let clickStop = document.getElementById('stop').addEventListener("click", stopEverySecond);
let clickSortDesc = document.getElementById('sortDesc').addEventListener("click", descending)
let clickSortAsc = document.getElementById('sortAsc').addEventListener("click", ascending);
=======
"use strict";
// fetching json data
fetch("./json/data.js")
  .then(function(response) {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' + response.status);
          return;
        }})
  .catch(function(err) {console.log('Fetch Error :-S', err)});

// loop over json to populate table
let populate = function() {
  let tr;
  let tdPrice;
  let content = TABLE_DATA.length;
  let body = document.getElementsByTagName('tbody')[0];

  for (let i = 0; i < content; i++) {
      // append rows
      tr = document.createElement('tr');
      body.appendChild(tr);
      // filling name cells
      let tdFlavor = document.createElement('td');
      tdFlavor.setAttribute('id', "flavorColumn")
      tdFlavor.innerHTML = TABLE_DATA[i].flavor;
      tr.appendChild(tdFlavor);
      // filling image cells
      let img = document.createElement('img')
      img.setAttribute('src', TABLE_DATA[i].thumbnailUrl)
      img.setAttribute('id', "imgColumn")
      tr.appendChild(img);
      // filling composition cells
      let tdCompo = document.createElement('td');
      tdCompo.setAttribute('id', "compoColumn")
      tdCompo.innerHTML = TABLE_DATA[i].composition;
      tr.appendChild(tdCompo);
      // filling price cells
      tdPrice = document.createElement('td');
      tdPrice.setAttribute("id", "priceColumn");
      tdPrice.innerHTML = "$" + TABLE_DATA[i].price;
      tr.appendChild(tdPrice);
  };
};
populate();

// shuffle rows function
let randomize = function() {
  let body = document.getElementsByTagName('tbody')[0];
  for (let i = body.children.length; i >= 0; i--) {
    body.appendChild(body.children[Math.random() * i | 0]);
  }
};
// set interval function
let intervalID;
let everySecond = function() {
  intervalID = setInterval(randomize, 1000)
  document.getElementById('start').disabled = true;
};
// stop interval function
let stopEverySecond = function() {
  clearInterval(intervalID)
  document.getElementById('start').disabled = false;
};

// sort functions
let descArray = [...TABLE_DATA.sort( (a, b) => a.price > b.price ? -1 : 1)];
let descending = function () {

    for (let i = 0; i < descArray.length; i++) {
      let oldPrice = document.getElementById('priceColumn');
      let newPrice = document.createElement('td');
      newPrice.innerHTML = "$" + descArray[i].price;
      oldPrice.parentNode.replaceChild(newPrice, oldPrice);

      let oldImg = document.getElementById("imgColumn")
      let newImg = document.createElement('img');
      newImg.setAttribute('src', descArray[i].thumbnailUrl)
      oldImg.parentNode.replaceChild(newImg, oldImg);

      let oldFlavor = document.getElementById('flavorColumn');
      let newFlavor = document.createElement('td');
      newFlavor.innerHTML = descArray[i].flavor;
      oldFlavor.parentNode.replaceChild(newFlavor, oldFlavor);

      let oldCompo = document.getElementById('compoColumn');
      let newCompo = document.createElement('td');
      newCompo.innerHTML = descArray[i].composition;
      oldCompo.parentNode.replaceChild(newCompo, oldCompo);
  };
//document.getElementById('sortDesc').disabled = true;
};

let ascArray = [...TABLE_DATA.sort((a, b) => a.price > b.price ? 1 : -1 )];
let ascending = function () {
    for (let i = 0; i < ascArray.length; i++) {
      let oldPrice = document.getElementById('priceColumn');
      let newPrice = document.createElement('td');
      newPrice.innerHTML = "$" + ascArray[i].price;
      oldPrice.parentNode.replaceChild(newPrice, oldPrice);

      let oldImg = document.getElementById("imgColumn")
      let newImg = document.createElement('img');
      newImg.setAttribute('src', ascArray[i].thumbnailUrl)
      oldImg.parentNode.replaceChild(newImg, oldImg);

      let oldFlavor = document.getElementById('flavorColumn');
      let newFlavor = document.createElement('td');
      newFlavor.innerHTML = ascArray[i].flavor;
      oldFlavor.parentNode.replaceChild(newFlavor, oldFlavor);

      let oldCompo = document.getElementById('compoColumn');
      let newCompo = document.createElement('td');
      newCompo.innerHTML = ascArray[i].composition;
      oldCompo.parentNode.replaceChild(newCompo, oldCompo);
    }
};

// listen randomize, stop randomize and sorting events
let clickStart = document.getElementById('start').addEventListener("click", everySecond);
let clickStop = document.getElementById('stop').addEventListener("click", stopEverySecond);
let clickSortDesc = document.getElementById('sortDesc').addEventListener("click", descending)
let clickSortAsc = document.getElementById('sortAsc').addEventListener("click", ascending);
>>>>>>> d84010b565498ec680765f7c6457eda46f7d50af
