//Faça um programa que converte graus Celsius para Fahrenheit

const prompt = require("prompt-sync")();

let temperaturaGraus = prompt(
  "Digite qual a temperatura em C° que deseja converter: "
);

function converteTemperatura(temp) {
  let conversao = (temp * 1.8 + 32).toFixed(2);
  console.log(`Temperatura em Fahrenheit: ${conversao}°`);
}

converteTemperatura(temperaturaGraus);
