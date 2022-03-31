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