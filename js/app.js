"use strict";

// fetching json data
fetch("./json/data.js").then(function(response) {
  if (response.status !== 200) {
    console.log('Looks like there was a problem. Status Code: ' + response.status);
    return;
  }
}).catch(function(err) {
  console.log('Fetch Error :-S', err);
});

let content = TABLE_DATA.length;
let body = document.getElementsByTagName('tbody')[0];
// loop over json to populate table
let populate = function() {
  for (let i = 0; i < content; i++) {
    // append rows
    let tr = document.createElement('tr');
    body.appendChild(tr);
    // filling name cells
    let tdname = document.createElement('td');
    tdname.innerHTML = TABLE_DATA[i].name;
    tr.appendChild(tdname);
    // filling image cells
    let img = document.createElement('img')
    img.setAttribute('src', TABLE_DATA[i].thumbnailUrl)
    tr.appendChild(img);
    // filling composition cells
    let tdid = document.createElement('td');
    tdid.innerHTML = TABLE_DATA[i].composition;
    tr.appendChild(tdid);
    // filling price cells
    let tdprice = document.createElement('td');
    tdprice.innerHTML = TABLE_DATA[i].price;
    tr.appendChild(tdprice);
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

// sort function
// reste a injecter dans le dom

let descending = () => [...TABLE_DATA.sort((a, b) => a.price > b.price ? -1 : 1 )];
let ascending = () => [...TABLE_DATA.sort((a, b) => a.price > b.price ? 1 : -1 )];
//console.log(descending);
//console.log(ascending);

descending();



  // listen randomize, stop randomize and sorting events
  let clickStart = document.getElementById('start').addEventListener("click", everySecond);
  let clickStop = document.getElementById('stop').addEventListener("click", stopEverySecond);
  let clickSortAsc = document.getElementById('sort').addEventListener("click", ascending);
  let clickSortDesc = document.getElementById('sort').addEventListener("click", descending)
