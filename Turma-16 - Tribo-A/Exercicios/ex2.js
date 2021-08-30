// n = 5

//     *
//    **
//   ***
//  ****
// *****

const n = 5;
let espacos = n - 1;
let asterisco = '*';

for (let indexLinha = 0; indexLinha < n; indexLinha += 1) {
  let linhaParaImprimir = '';
  for (let indexEspaco = 0; indexEspaco < espacos; indexEspaco += 1) {
    linhaParaImprimir += ' ';
  }
  linhaParaImprimir += asterisco;
  console.log(linhaParaImprimir);
  espacos -= 1;
  asterisco += '*';
}