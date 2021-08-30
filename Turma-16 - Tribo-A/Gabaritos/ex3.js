const n = 5;
const numeroDeLinhas = Math.floor(n/2);
let espacos = Math.floor(n/2) - 1;
let asterisco = '*';

for (let indexLinha = 0; indexLinha <= numeroDeLinhas; indexLinha += 1) {
  let linhaParaImprimir = '';
  for (let indexEspaco = 0; indexEspaco <= espacos; indexEspaco += 1) {
    linhaParaImprimir += ' ';
  }
  linhaParaImprimir += asterisco
  console.log(linhaParaImprimir);
  espacos -= 1;
  asterisco += '**';
;}