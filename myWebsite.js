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
	extremities.textContent = 'You should be in between ' + lowWeight + ' lbs and ' + highWeight + ' lbs.';

	var idealWeight = Math.round((lowWeight + highWeight) / 2);

	var perfect = document.getElementById('idealWeight');
	perfect.textContent = 'Your ideal weight is ' + idealWeight + ' lbs';
}

function clear() {
	document.getElementById('myForm').reset();
}

//jquery animation and remove
$('header').addClass('headline');
$('li:lt(100)').hide().fadeIn(1000);
$('a:lt(100)').hide().fadeIn(1000);

$(function () {
	$('li:contains("pine")').text('almonds');
	$('li.hot').html(function () {
		return '<b>' + $(this).text() + '</b>';
	});
	$('li#one').remove();
});
