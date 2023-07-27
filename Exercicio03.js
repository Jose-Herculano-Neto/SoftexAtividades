//Escreva um programa que calcule a soma de dois números inteiros e exiba o resultado. 

const prompt = require('prompt-sync')()

let num1 = prompt("Digite o primeiro número: ")
let num2 = prompt("Digite o segundo némero: ")
let result = parseInt(num1) + parseInt(num2)

console.log("O resultado é: " + result)