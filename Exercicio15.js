//Faça um programa que simule um jogo de adivinhação, onde o computador escolhe um número e o usuário tenta adivinhar


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const numMin = 1;
const numMax = 100;
const numSecreto = Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;
let attempts = 0;

console.log('Bem-vindo ao Jogo de Adivinhação!');
console.log(`Tente adivinhar o número entre ${numMin} e ${numMax}.`);

function askForGuess() {
  rl.question('Digite sua adivinhação: ', (guess) => {
    const parsedGuess = parseInt(guess);

    if (isNaN(parsedGuess)) {
      console.log('Por favor, insira um número válido.');
      askForGuess();
    } else {
      attempts++;

      if (parsedGuess === numSecreto) {
        console.log(`Parabéns! Você acertou o número em ${attempts} tentativas.`);
        rl.close();
      } else if (parsedGuess < numSecreto) {
        console.log('Tente um número maior.');
        askForGuess();
      } else {
        console.log('Tente um número menor.');
        askForGuess();
      }
    }
  });
}

askForGuess();
