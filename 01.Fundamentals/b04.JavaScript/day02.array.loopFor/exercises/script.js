let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]; // array used to exercises 1-7;

// exercise 1.
for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
};

// exercise 2.
let result = 0;
for (let index = 0; index < numbers.length; index += 1) {
 result += numbers[index];
};
console.log(result);

// exercise 3.
let sum = 0;
for (let index = 0; index < numbers.length; index += 1) {
  sum += numbers[index];
}
let average = sum / numbers.length;
console.log(average);

// exercise 4.
let result = 0;
for (let index = 0; index < numbers.length; index += 1) {
  result += numbers[index];
}
result = result / numbers.length;

if (result > 20) {
  console.log('valor maior que 20')
} else {
  console.log('valor menor que 20')
};

// exercise 5.
let higherNumber = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] > higherNumber) {
    higherNumber = numbers[index];
  };
};

console.log(higherNumber);

// exercise 6.
let result = 0;
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    result += 1;
  };
};
if (result === 0) {
  console.log('nenhum valor ímpar encontrado');
} else {
  console.log(result);
};

// exercise 7.
let smallestNumber = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] < smallestNumber) {
    smallestNumber = numbers[index];
  };
};

console.log(smallestNumber);

// exercise 8.
let numbers =[];

for (let index = 1; index <= 25; index += 1) {
  numbers.push(index);
};

console.log(numbers);

// exercise 9.
for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index] / 2);
};

// exercise bonus 1.
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] < numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    };
  };
};

console.log(numbers);

// exercise bonus 2.
for (let index = 1; index < numbers.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbers[index] > numbers[secondIndex]) {
      let position = numbers[index];
      numbers[index] = numbers[secondIndex];
      numbers[secondIndex] = position;
    };
  };
};

console.log(numbers);

// exercise bonus 3.
let newArray = [];

for (let index = 0; index < numbers.length; index += 1) {
  if (index + 1 < numbers.length) {
    newArray.push(numbers[index] * numbers[index + 1]);
  } else {
    newArray.push(numbers[index] * 2);
  };
};

console.log(newArray);