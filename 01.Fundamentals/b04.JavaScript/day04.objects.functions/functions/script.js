// exercise 1.
function soma(a, b) {
  return a + b;
};

function mul(a, b) {
  return a * b;
};

function div(a, b) {
  return a / b;
};

function mod(a, b) {
  return a % b;
};

// exercise 2.
function maiorNum(primeiroNum, segundoNum) {
  if (primeiroNum > segundoNum) {
    return primeiroNum + ' é maior que ' + segundoNum;
  } else {
    return segundoNum + ' é maior que ' + primeiroNum;
  };
};

// exercise 3.
function positiveNegative(number) {
  if (number > 0) {
    return 'positive';
  } else if (number < 0) {
    return 'negative';
  } else {
    return 'zero';
  };
};

// exercise 4.
function triangleAnglesValidate(angleA, angleB, angleC) {
  let sumOfAngles = angleA + angleB + angleC;
  let allAnglesArePositives = angleA > 0 && angleB > 0 && angleC > 0;
  if (allAnglesArePositives) {
    if (sumOfAngles === 180) {
      return true;
    } else {
      return false;
    }
  } else {
    return 'Erro: ângulo inválido';
  }
}

// exercise 5.
function maiorDeTres(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return num1 + ' é o maior número!';
  } else if ( num2 > num1 && num2 > num3) {
    return num2 + ' é o maior número!';
  } else {
    return num3 + ' é o maior número!';
  }
}