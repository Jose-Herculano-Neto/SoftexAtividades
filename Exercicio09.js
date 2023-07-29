//Crie um programa que determine se um número é primo ou não.

const prompt = require("prompt-sync")();

let numero = prompt("Digite um número: ");

function numPrimo(num) {
  for (i = 2; i < num; i++) {
    if (num % i === 0) {
      return console.log(`O número ${num} não é primo.`);
    }
  }
  console.log(`O número ${num} é primo.`);
}

numPrimo(numero);
