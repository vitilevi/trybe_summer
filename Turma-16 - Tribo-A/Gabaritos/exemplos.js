// Atribuição e tipagem dinâmica
let teste = 'Esta é uma bela string';
console.log(typeof(teste));

let numeroDaSorte = 13;
console.log(typeof(numeroDaSorte));

let meuArray = ['2', 4, true, null];
console.log(typeof meuArray);

const meuArray2 = ['Trybe', 3, 19, 'Março'];
console.log(meuArray2);

meuArray2.push('Ultimo elemento');
console.log(meuArray2);

// if/else - Cálculo de média de aluno
let notaP1 = 6.0;
let notaP2 = 6.8;
let media = (notaP1 + notaP2) / 2;
if (media > 6) {
  console.log('Pessoa estudante aprovada!');
} else {
  console.log('Pessoa estudante reprovada!');
}


// Switch Case - Cálculo da pontuação de um game
let dificuldade = 'Dificil'
const pontuacaoPadrao = 10;
switch(dificuldade) {
  case 'Fácil':
    console.log('Sua pontuação foi de ', pontuacaoPadrao + 5);
    break;
  case 'Média':
    console.log('Sua pontuação foi de ', pontuacaoPadrao + 15);
    break;
  case 'Dificil':
    console.log('Sua pontuação foi de ', pontuacaoPadrao + 30);
    break;
  default:
    console.log('Por favor insira uma dificuldade válida');
}



// Arrays acessando informações
let cestaDeFrutas = ['Maçã', 'Pera', 'Banana', 'Uva'];
console.log(cestaDeFrutas[3]);

cestaDeFrutas.push('Abacaxi');
console.log(cestaDeFrutas);
console.log(cestaDeFrutas.length);