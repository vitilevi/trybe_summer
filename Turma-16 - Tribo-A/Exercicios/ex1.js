// Faça um programa que diz se um número definido numa variável é primo ou não.

// Ler um numero N
// Criar uma váriavel que controla o numero de divisões exatas
// Criar um loop para iterar de 1 até o indice ser igual ao N
// Testa se a divisão de N pelo índice é exata.
// Se o resultado for uma divisão exata, incrementa em uma unidade a váriavel que conta o número de divisões exatas.
// Testar se a váriavel que controla o numero de divisões exatas for igual a 2, retorna que N é um numero primo.
// Se a variavel que controla o numero de divisões exatas for diferente de 2, retorna que N não é um numero primo.

const n = 2;
let numeroDeDivisoesExatas = 0;
for (let index = 1; index <= n; index += 1) {
  if (n % index === 0) {
    numeroDeDivisoesExatas += 1;
  }
  console.log(numeroDeDivisoesExatas, index)
}

if (numeroDeDivisoesExatas === 2) {
  console.log('Este número, é um numero primo!');
} else {
  console.log('Este número, não é um numero primo!');
}