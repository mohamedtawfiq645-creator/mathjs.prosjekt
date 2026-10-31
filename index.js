const { evaluate } = require('mathjs');

const resultat = evaluate('12 / (2 + 4)');

console.log('Resultatet er:', resultat);

console.log(evaluate('sqrt(25)'));
console.log(evaluate('2^3 + 5'));
