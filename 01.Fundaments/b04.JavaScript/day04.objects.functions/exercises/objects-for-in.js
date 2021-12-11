// exercise 1.
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
  console.log('Bem vinda, ' + info.personagem);

// exercise 2.
info.recorrente = 'Sim';
console.log(info);

// exercise 3.
for (let i in info) {
  console.log(i);
}

// exercise 4.
for (let i in info) {
  console.log(info[i]);
};

// exercise 5.
let info2 = {
  personagem: 'Tio patinhas',
  origem: 'Christmas on Bear Mountain, Dell`s Four Color Comics #178',
  nota: 'O Último MacPatinhas',
  recorrente: 'Sim',
};
for (let i in info) {
  if (i === 'recorrente' && info[i] === 'Sim' && info2[i] === 'Sim') {
    console.log('Ambos recorrentes');
  } else {
    console.log(info[i] + ' e ' + info2[i]);
  };
};

// exercises 6, 7 and 8.
let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};
console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + leitor.livrosFavoritos[0].titulo);

leitor.livrosFavoritos.push(
  {
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'Jk Rowling',
  editor: 'Rocco',
  },
);
console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos.');