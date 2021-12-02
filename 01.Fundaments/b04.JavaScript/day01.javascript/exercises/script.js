// exercise 1.
let a = 3;
let b = 6;
console.log("soma " + (a + b));
console.log('subtração ' + (a - b));
console.log('multiplicação ' + (a * b));
console.log('divisão ' + (a / b));
console.log('módulo ' + (a % b));

// exercise 2.
const a = 10;
const b = 20;
if (a > b) {
	console.log("'a' é maior que 'b'")
} else {
	console.log("'b' é maior que 'a'")
};

// exercise 3.
let a = 50;
let b = 40;
let c = 30;
if (a > b && a > c) {
	console.log(a);
} else if (b > a && b > c) {
	console.log(b);
}else {
	console.log(c);
};

// exercise 4.
const a = -1;
if (a > 0) {
	console.log('positivo')
} else if (a < 0) {
	console.log('negativo')
} else {
	console.log('0')
};

// exercise 5.
const angOne = 60;
const angTwo = 60;
const angThree = 60;
let somaAngs = angOne + angTwo + angThree;
let todosPositivos = angOne > 0 && angTwo > 0 && angThree > 0;
if (todosPositivos){
	if(somaAngs === 180) {
		console.log(true);
	} else {
		console.log(false);
	};
} else {
	console.log('ângulo inválido')
};

// exercise 6.
const chessPiece = 'bispo';
switch (chessPiece.toLowerCase()) {
  case 'rei':
    console.log('Rei-> Uma casa apenas para qualquer direção.');
    break;
  case 'bispo':
    console.log('Bispo-> Diagonal.');
    break;
  case 'rainha':
    console.log('Rainha-> Diagonal, horizontal e vertical.');
    break;
  case 'cavalo':
    console.log('Cavalo -> "L" pode pular sobre as peças.');
    break;
  case 'torre':
    console.log('Torre -> Horizontal e vertical.');
    break;
  case 'peão':
    console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
    break;
  default:
    console.log('Erro, peça inválida!');
    break;
};

// exercise 7.
const grade = 76;
if (grade < 0 || grade > 100) {
  console.log("Erro, nota incorreta!");
} else if (grade >= 90) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else if (grade >= 70) {
  console.log("C");
} else if (grade >= 60) {
  console.log("D");
} else if (grade >= 50) {
  console.log("E");
} else {
  console.log("F");
}

// exercise 8.
const a = 1;
const b = 3;
const c = 5;
let isEven = false;
if ((a % 2 === 0 || b % 2 === 0 || c % 2 === 0)) {
  isEven = true;
};
console.log(isEven);

// exercise 9.
const a = 1;
const b = 3;
const c = 5;
let isOdd = false;
if ((a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0)) {
  isOdd = true;
};
console.log(isOdd);

// exercise 10.
const costOfProduct = 1;
const saleValue = 3;
if (costOfProduct >= 0 && saleValue >= 0) {
  const totalCostOfProduct = costOfProduct * 1.2;
  const totalProfit = (saleValue - totalCostOfProduct) * 1000;
  console.log(totalProfit);
} else {
  console.log("Error, os valores não podem ser negativos");
};

// exercise 11.
let aliquotINSS;
let aliquotIR;
const grossSalary = 2000.00;
if (grossSalary <= 1556.94) {
  aliquotINSS = grossSalary * 0.08;
} else if (grossSalary <= 2594.92) {
  aliquotINSS = grossSalary * 0.09;
} else if (grossSalary <= 5189.82) {
  aliquotINSS = grossSalary * 0.11;
} else {
  aliquotINSS = 570.88;
}
const baseSalary = grossSalary - aliquotINSS;
if (baseSalary <= 1903.98) {
  aliquotIR = 0;
} else if (baseSalary <= 2826.65) {
  aliquotIR = (baseSalary * 0.075) - 142.80;
} else if (baseSalary <= 3751.05) {
  aliquotIR = (baseSalary * 0.15) - 354.80;
} else if (baseSalary <= 4664.68) {
  aliquotIR = (baseSalary * 0.225) - 636.13;
} else {
  aliquotIR = (baseSalary * 0.275) - 869.36;
};
console.log("Salário: " + (baseSalary - aliquotIR));