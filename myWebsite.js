function sayGoodMorning() {
  const today = new Date();
  const hourNow = today.getHours();
  var greeting;
  var node = document.createElement('H4');

  if (hourNow > 18) {
    greeting = 'Good Evening';
  } else if (hourNow < 12) {
    greeting = 'Good Morning';
  } else {
    greeting = 'Good Afternoon';
  }
  var textNode = document.createTextNode(greeting);
  node.appendChild(textNode);
  document.getElementById('myList').appendChild(node);
}

function getBmi() {
  var height = prompt('Enter your height in cm: ');
  var weight = prompt('Enter your weight in kg: ');

  var heightNum = parseInt(height);
  var weightNum = parseInt(weight);

  var bmi = Math.round(weightNum / Math.pow(heightNum / 100, 2));

  bmiMessage(bmi);
}

function bmiImperial() {
  var heightF = parseInt(document.getElementById('heightF').value);
  var heightI = parseInt(document.getElementById('heightI').value);
  var weightL = parseInt(document.getElementById('weightL').value);

  var heightCM = (heightF * 12 + heightI) * 2.54;
  var weightKG = weightL / 2.205;

  var bmi = (weightKG / Math.pow(heightCM / 100, 2)).toFixed(1);
  bmiMessage(bmi);
  getExtremities(heightCM);
}

function bmiMessage(bmi) {
  var yourResult;

  if (bmi < 18.5) {
    yourResult = 'You are hella skinny, eat some damn food!';
  } else if (bmi >= 25 && bmi <= 29.9) {
    yourResult = 'Damn son you are Overweight! Chill with da cookies!';
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    yourResult = 'You doing great!';
  } else if (bmi >= 30) {
    yourResult = 'You are Obese, hit the treadmill ';
  } else {
    yourResult = 'You messed up somewhere in life';
    bmi = 'What is wrong with chu';
  }

  var bmiResult = document.getElementById('bmi');
  bmiResult.textContent = 'Your bmi is: ' + bmi;

  var results = document.getElementById('results');
  results.textContent = yourResult;
}

function getExtremities(heightCM) {
  var lowWeight = Math.round(18.5 * Math.pow(heightCM / 100, 2) * 2.205);
  var highWeight = Math.round(24.9 * Math.pow(heightCM / 100, 2) * 2.205);

  var extremities = document.getElementById('extremities');
  extremities.textContent =
    'You should be in between ' +
    lowWeight +
    ' lbs and ' +
    highWeight +
    ' lbs.';

  var idealWeight = Math.round((lowWeight + highWeight) / 2);

  var perfect = document.getElementById('idealWeight');
  perfect.textContent = 'Your ideal weight is ' + idealWeight + ' lbs';
}

function clear() {
  document.getElementById('myForm').reset();
}

/*
var youA_beotch = (function(name, num) {
  for (i = 0; i < 10; i++) console.log(i + name + num);
})('Bob', 48);

var hotel = {
  name: 'Hilton',
  rooms: 250,
  booked: 40,
  gym: false,
  roomType: ['twin', 'double', 'suite'],
  checkAvailability: function() {
    return this.rooms - this.booked;
  }
};

function Hotel(name, rooms, booked) {
  this.name = name;
  this.rooms = rooms;
  this.booked = booked;
}

var quayHotel = new Hotel('Quay', 200, 50);
var hiltonHotel = new Hotel('Hilton', 1000, 400);

var saying = 'Sweet Home Alabama';

var msg = '<h2>length: ' + saying.length + '</h2>';
msg += '<h2>Uppercase: ' + saying.toUpperCase() + '</h2>';
msg += '<h2>Lowercase: ' + saying.toLowerCase() + '</h2>';

var el = document.getElementById('info');
el.innerHTML = msg;

var today = new Date();
console.log(today.toDateString());
console.log(typeof 'Hello');

var elements = document.getElementById('biohacking');

if (elements.length >= 1) {
  var el = elements[0];
  el.textContent('Hey Babes');
}
console.log('Hello');
*/

//Replacing text from NodeValues
/*
var item = document.getElementById('lin1');
var textOfItem = item.firstChild.nodeValue;
textOfItem = textOfItem.replace('Potatoes', 'Berries');
item.firstChild.nodeValue = textOfItem;
*/

//Update text and Markup
/*
var firstItem = document.getElementById('one');
var itemContent = firstItem.innerHTML;
var greeting = ' hey bro';
firstItem.innerHTML = '<h2>' + itemContent + greeting + '</h2>';
*/
/* write text
var newEl = document.createElement('li');
var newText = document.createTextNode('Hello Work');
newEl.appendChild(newText);
var position = document.getElementsByClassName('Steve')[0];
position.appendChild(newEl);
*/
//remove elem
/*
var removeEl = document.getElementsByClassName('hot')[0];
var containerEl = removeEl.parentNode;
containerEl.removeChild(removeEl);
*/

/* get class name
var firstItem = document.getElementById('one');
var attr = firstItem.getAttribute('class');
console.log(attr);
*/
/*
var elUsername = document.getElementById('username');
elUsername.addEventListener(
  'blur',
  function() {
    checkUsername(5);
  },
  false
);

function checkUsername(minLength) {
  var elMsg = document.getElementById('feedback');
  if (elUsername.value.length < minLength) {
    elMsg.textContent = 'username must be 5 characters';
  } else {
    elMsg.innerHTML = '';
  }
}
*/

//jquery animation and remove
$('header').addClass('headline');
$('li:lt(100)')
  .hide()
  .fadeIn(1000);
$('a:lt(100)')
  .hide()
  .fadeIn(1000);
