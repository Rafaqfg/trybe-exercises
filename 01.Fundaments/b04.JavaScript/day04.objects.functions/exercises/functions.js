// exercise 1.
function palindrome (string) {
  for (let i in string){
if (string[i] != string[(string.length - 1) - i]){
  return false;
  }
}
return true; 
};
console.log(palindrome('arara')); // true.

// exercise 2.
function maiorNum(array) {
  let maior = 0;
  for (let i in array){
    if(array[maior] < array[i]) {
      maior = i;
    }
  }
  return maior;
};
console.log(maiorNum([2, 3, 6, 7, 10, 1])); // 4.

// exercise 3.
function menorNum(array) {
  let menor = 0;
  for (let i in array) {
    if(array[menor] > array[i]) {
      menor = i;
    }
  }
  return menor;
}
console.log(menorNum([2, 3, 6, 7, 10, 0, -3])); // 6.

// exercise 4.
function names(array) {
  let maiorNome = array[0];
  for (let i in array) {
    if (maiorNome.length < array[i].length) {
      maiorNome = array[i];
    }
  }
  return maiorNome;
}
console.log(names(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])); // Fernanda

// exercise 5.
function repetido(inteiros) {
  let contRepetido = 0;
  let contNumero = 0;
  let indexNumeroRepetido = 0;
  for (let index in inteiros) {
    let verificaNumero = inteiros[index];
    for (let index2 in inteiros) {
      if (verificaNumero === inteiros[index2]) {
        contNumero += 1;
      }
    }
    if (contNumero > contRepetido) {
      contRepetido = contNumero;
      indexNumeroRepetido = index;
    }
    contNumero = 0;
  }
  return inteiros[indexNumeroRepetido];
} console.log(repetido([2, 3, 2, 5, 8, 2, 3])); // 2.

// exercise 6.
function somaNumeros(numeros) {
  let total = 0;
  for (let i = 1; i <= numeros; i += 1) {
    total = total + i;
  };
  return total;
};
console.log(somaNumeros(5)); // 15.

// exercise 7.
function verificaFimPalavra(palavra, fimPalavra) {
  let inversoPalavra = palavra.split('').reverse().join('');
  let inversoFimPalavra = fimPalavra.split('').reverse().join('');
  let result;

  for (let index = 0; index < inversoFimPalavra.length; index += 1) {
    if (inversoPalavra[index] !== inversoFimPalavra[index]) {
      result = false;
      break;
    } else {
      result = true;
    }
  }
  return result;
}
console.log(verificaFimPalavra('trybe', 'be')); //true
console.log(verificaFimPalavra('joaofernando', 'fernan')); //false