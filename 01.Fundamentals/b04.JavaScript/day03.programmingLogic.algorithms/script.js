// exercise 1. fatorial de 4 = 4! = 4 x 3 x 2 x 1 = 24
let fatorial = 1;

for (let index = 10; index > 0; index -= 1) {
  fatorial *= index;
};

console.log(fatorial);

// exercise 2.
let word = 'tryber';
let reverseWord = '';

for (let index = 0; index < word.length; index += 1) {
  reverseWord += word[word.length - 1 - index];
};

console.log(reverseWord);

// exercise 3.
let array = ['java', 'javascript', 'python', 'html', 'css'];
let biggestWord = array[0];
let smallestWord = array[0];

for (let index = 0; index < array.length; index += 1) {
  if (array[index].length > biggestWord.length) {
    biggestWord = array[index];
  };
};

for (let index = 0; index < array.length; index += 1) {
  if (array[index].length < smallestWord.length) {
    smallestWord = array[index];
  };
};

console.log(biggestWord);
console.log(smallestWord);

// exercise 4.
let biggestPrimeNumber = 0;

for (let currentNumber = 0; currentNumber <= 50; currentNumber += 1) {
  let isPrime = true;
  for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
    if (currentNumber % currentDivisor === 0) {
      isPrime = false;
    };
  };
  if (isPrime) {
    biggestPrimeNumber = currentNumber;
  };
};

console.log(biggestPrimeNumber);

// bonus exercise 1.
let n = 5;
let symbol = '*';
let inputline = '';

for ( let index = 0; index < n; index += 1) {
  inputline = inputline + symbol;
};
for (let index = 0; index < n; index += 1) {
  console.log(inputline);
};

// bonus exercise 2.
let size = 5;
let symbol = '*';
let inputline = '';

for (let lineIndex = 0; lineIndex <= size; lineIndex += 1) {
  console.log(inputline);
  inputline = inputline + symbol; 
};

// bonus exercise 3.
let n = 5;
let symbol = '*';
let inputLine = '';
let inputPosition = n;

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex < inputPosition) {
      inputLine = inputLine + ' ';
    } else {
      inputLine = inputLine + symbol;
    };
  };

  console.log(inputLine);
  inputLine = '';
  inputPosition -= 1;
};

// bonus exercise 4.
let n = 5;
let symbol = '*';
let inputLine = '';

let midOfMatrix = (n + 1) / 2;
let controlLeft = midOfMatrix;
let controlRight = midOfMatrix;

for (let lineIndex = 0; lineIndex <= midOfMatrix; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex > controlLeft && columnIndex < controlRight) {
      inputLine = inputLine + symbol;
    } else {
      inputLine = inputLine + ' ';
    };
  };
  console.log(inputLine);
  inputLine = '';
  controlRight += 1;
  controlLeft -= 1
};

// bonus exercise 5.
let n = 7;
let middle = (n + 1) / 2;
let controlLeft = middle;
let controlRight = middle;
let symbol = '*';
for (let line = 1; line <= middle; line += 1) {
  let outputLine = '';
  for (let col = 1; col <= n; col += 1) {
    if (col == controlLeft || col == controlRight || line == middle) {
      outputLine += symbol;
    } else {
      outputLine += ' ';
    };
  };
  controlLeft -= 1;
  controlRight += 1;
  console.log(outputLine);
};

// bonus exercise 6.
let divisors = 1;
let numberToCheck = 3.14;

for (let number = 2; number <= numberToCheck; number += 1) {
  if (numberToCheck % number === 0) divisors += 1;
};

if (divisors === 2) console.log(numberToCheck + ' ?? primo');
else console.log(numberToCheck + ' n??o ?? primo');