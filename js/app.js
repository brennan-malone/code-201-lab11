'use strict';

// console.log('hey there hey!');

// ******* GLOBALS *******
let productArray = [];
let votingRounds = 25;


//  ****** DOM WINDOWS *******
let imgContainer = document.getElementById('img-container');
let imgOne = document.getElementById('img-one');
let imgTwo = document.getElementById('img-two');
let imgThree = document.getElementById('img-three');

let resultsBtn = document.getElementById('show-results-btn');
let resultsList = document.getElementById('results-container');


// ***** CONSTRUCTOR FUNCTION ******

function Product(name, imgExtension = 'jpg') {
  this.name = name;
  this.img = `img/${name}.${imgExtension}`;
  this.votes = 0;
  this.views = 0;
}

// ***** HELPER FUNCTIONS / UTILITIES *****


function randomIndex() {
  return Math.floor(Math.random() * productArray.length);
}

function renderImg() {
  // TODO: 3 unique images and populate the images

  let imgOneIndex = productArray[randomIndex()];
  let imgTwoIndex = productArray[randomIndex()];
  let imgThreeIndex = productArray[randomIndex()];

  imgOne.src = imgOneIndex.img;
  imgTwo.src = imgTwoIndex.img;
  imgThree.src = imgThreeIndex.img;
  imgOne.title = imgOneIndex.name;
  imgTwo.title = imgTwoIndex.name;
  imgThree.title = imgThreeIndex.name;
  imgOne.alt = `this is an image of ${imgOneIndex.name}`;
  imgTwo.alt = `this is an image of ${imgTwoIndex.name}`;
  imgThree.alt = `this is an image of ${imgThreeIndex.name}`;

  // ** Validation to make sure numbers are unique **

  if (imgOneIndex === imgTwoIndex || imgOneIndex === imgThreeIndex || imgTwoIndex === imgThreeIndex) {
    renderImg();
  }

  imgOneIndex.views++;
  imgTwoIndex.views++;
  imgThreeIndex.views++;

}

// **** EVENT HANDLERS *****

function handleClick(event) {

  // TODO: increase the number of views on the images that have been rendered


  // TODO: Identify what image was clicked on

  let imgClicked = event.target.title;

  console.log(imgClicked);

  // TODO: Increase the number of votes to that specific image
  for (let i = 0; i < productArray.length; i++) {
    if (imgClicked === productArray[i].name) {
      productArray[i].votes++;
    }
  }
  // TODO: decrement voting rounds
  votingRounds--;

  // TODO: Rerender 3 new images
  renderImg();

  // TODO: once voting rounds have ended - not allow any more clicks
  if (votingRounds === 0) {
    imgContainer.removeEventListener('click', handleClick);
  }
}


function handleShowResults() {
  // TODO: Display the results once the there are no more votes
  if (votingRounds === 0) {
    for (let i = 0; i < productArray.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${productArray[i].name} - views: ${productArray[i].views} & votes: ${productArray[i].votes}`;
      resultsList.appendChild(liElem);
    }
    resultsBtn.removeEventListener('click', handleShowResults);
  }

}



// **** EXECUTABLE CODE *****
let bag = new Product('bag');
let banana = new Product('banana');
let bathroom = new Product('bathroom');
let boots = new Product('boots');
let breakfast = new Product('breakfast');
let bubblegum = new Product('bubblegum');
let chair = new Product('chair');
let cthulhu = new Product('cthulhu');
let dogDuck = new Product('dog-duck');
let dragon = new Product('dragon');
let pen = new Product('pen');
let petSweep = new Product('pet-sweep');
let scissors = new Product('scissors');
let shark = new Product('shark');
let sweep = new Product('sweep', 'png');
let tauntaun = new Product('tauntaun');
let unicorn = new Product('unicorn');
let waterCan = new Product('water-can');
let wineGlass = new Product('wine-glass');

productArray.push(bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, waterCan, wineGlass);


renderImg();

imgContainer.addEventListener('click', handleClick);
resultsBtn.addEventListener('click', handleShowResults);

// console.log(productArray);
