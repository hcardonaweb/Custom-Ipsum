// Generate Random Number
let number = 0;
let steps = 0;
while (number != 10) {
  number = Math.round(Math.random() * (10 - 0) + 0);
  steps = steps + 1;
  console.log('steps'), steps;
}

function randomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

// Get Random Word
var word = [
	'Got',
	'ability',
	'shop',
	'recall',
	'fruit',
	'easy',
	'dirty',
	'giant',
	'shaking',
	'ground',
	'weather',
	'lesson',
	'almost',
	'square',
	'forward',
	'bend',
	'cold',
	'broken',
	'distant',
	'adjective.',
];

var word = words[randomNumber(0, words.length - 1)];

function getRandomWord() {
  return word[randomNumber(0, word.length - 1)];
}