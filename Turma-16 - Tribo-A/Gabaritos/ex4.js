let n = 7;
let py = '*';
let basePy = '*';
let pyLength = Math.ceil(n / 2);
let pySpaces = ' ';

for (let index = 0; index < pyLength - 1; index += 1) {
  let whiteSpaces = '';
  for (let indexB = 0; indexB < pyLength - 1 - index; indexB += 1) {
    whiteSpaces += ' ';
  }
  if (index === 0) {
    console.log(whiteSpaces + py);
  } else {
    py = '*' + pySpaces + '*';
    pySpaces += '  ';
    console.log(whiteSpaces + py);
  }
  basePy += '**';
}

console.log(basePy);