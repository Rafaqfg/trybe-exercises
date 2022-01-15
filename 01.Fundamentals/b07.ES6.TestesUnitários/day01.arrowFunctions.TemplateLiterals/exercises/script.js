// exercise 1.
const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  // console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}
testingScope(true);
testingScope(false);

// exercise 2.
const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const sort = () => {
  oddsAndEvens[0] = 2;
  oddsAndEvens[1] = 3;
  oddsAndEvens[2] = 4;
  oddsAndEvens[3] = 7;
  oddsAndEvens[4] = 10;
  oddsAndEvens[5] = 13;

  return oddsAndEvens;
}
const sorted = sort();

console.log(`Os números ${sorted} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉

// part2 - Exercise 1.
const factorial = (number) => number === 0 ? 1 : number * factorial(number - 1);
console.log(factorial(5));
console.log(factorial(3));
console.log(factorial(2));
console.log(factorial(0));
console.log(factorial(1));

// exercise 2.
const longestWord = text => {
  let wordArray = text.split(' ');
  let maxLength = 0;
  let result = '';

  for (const word of wordArray) {
      if (word.length > maxLength) {
          maxLength = word.length;
          result = word;
      }
  }

  return result;
}

console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"));

// exercise 4.
const array = ["HTML", "CSS", "JavaScript", "ES6", "Research"];

function buildSkillsPhrase (paramOne) {
    const fun1 = paramInner => (
      `Tryber ${paramInner} aqui!

      Tudo bem?`
    );

    let result = `${fun1(paramOne)}

    Minhas cinco principais habilidades são:`;

    array.forEach((skill) =>
    result = `${result}

    - ${skill}`);

    result = `
    ${result}

    #goTrybe
    `;

    return result;
}

console.log(buildSkillsPhrase("Rafael"));