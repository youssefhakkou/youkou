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
  var yourResult;

  if (bmi <= 19) {
    yourResult = 'You are hella skinny, eat some damn food!';
  } else if (bmi >= 24) {
    yourResult = 'Damn son you are thick! ';
  } else if (bmi > 19 && bmi < 24) {
    yourResult = 'You doing goood!';
  } else {
    yourResult = 'You messed up somewhere in life';
    bmi = 'What is wrong with chu';
  }

  var textNode = document.getElementById('bmi');
  textNode.textContent = bmi;

  var results = document.getElementById('results');
  results.textContent = yourResult;
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
