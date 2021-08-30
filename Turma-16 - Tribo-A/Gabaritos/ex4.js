let n1 = 4.39;
let n2 = 3.61;
n1 = Math.round(n1 * 100);
n2 = Math.round(n2 * 100);

const array1 = Array(n1);
const array2 = Array(n2)
console.log(array1.concat(array2).length/100)