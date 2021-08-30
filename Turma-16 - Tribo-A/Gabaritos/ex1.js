const n = 2;
let numberOfDivisions = 0;
for (let index = 1; index <= n; index += 1) {
  if(n % index === 0) {
    numberOfDivisions += 1;
  }
}
if (numberOfDivisions === 2) {
  console.log('Este número é um número primo')
} else {
  console.log('Este número não é um número primo')
}

// Ler um número N
// Criar um loop que itere de 1 até o indice ser igual a N
// Testa se a divisão de N pelo índice é exata
// Se o resultado for inteiro, incrementa uma unidade na váriavel que conta o número de divisões
// Testa se o número de divisões é igual a 2, pois um número primo é divisivel somente por 1 e por ele mesmo
// Se o teste por positivo ele retorna que é um número primo
// Se o teste for negativo ele retorna que o número não é primo