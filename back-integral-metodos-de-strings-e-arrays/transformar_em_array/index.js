const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];

const arrayInverso = frutas.reverse().join(', ');
console.log(arrayInverso);

//reverte para voltar ao array original
frutas.reverse();

//remove primeiro
frutas.shift();

//remove ultimo
frutas.pop();

//adiciona melão
frutas.push('Melão');
console.log(frutas);
