// Atribuição e tipagem dinâmica
let array = ['Trybe', 23, true];
console.log(array);

const array = ['Trybe', 23, true];
console.log(array);
array.push('4');
console.log(array);
array.pop();
console.log(array);


// if, else e condicionais
let p1 = 7.0;
let p2 = 2.0;
let media = (p1 + p2) / 2;
if(media >= 6) {
  console.log('Aluno aprovado!');
} else {
  console.log('Aulno reprovado!');
}


// Exemplo switch case
let dificuldade = 'Dificil';
switch (dificuldade) {
  case 'Fácil':
    console.log('Sua pontuação foi de ', 5, 'pontos!');
    break;
  case 'Média':
    console.log('Sua pontuação foi de ', 10, 'pontos!');
    break;
  case 'Dificil':
    console.log('Sua pontuação foi de ', 15, 'pontos!');
    break;
  default:
    console.log('Insira uma dificuldade válida!');
}

let dificuldade = 'Dificil';
if (dificuldade === 'Dificil') {
  console.log('Sua pontuação foi de ', 15, 'pontos!')
}