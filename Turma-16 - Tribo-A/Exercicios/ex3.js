// n = 5

//   *
//  ***
// *****

let n = 50;
if (n % 2 === 0) {
  n += 1;
}
let espaco = Math.floor(n/2);
const numeroDelinhas = Math.ceil(n/2);
let asterisco = '*';

for (let indexLinha = 0; indexLinha < numeroDelinhas; indexLinha += 1) {
  let = linhaParaImprimir = '';
  for (let indexEspaco = 0; indexEspaco < espaco; indexEspaco += 1) {
    linhaParaImprimir += ' ';
  }
  linhaParaImprimir += asterisco;
  console.log(linhaParaImprimir);
  asterisco += '**';
  espaco -= 1;
}

console.log(5 )