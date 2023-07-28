//Escreva um programa que calcule a média de très números informados pelo usuário

const prompt = require('prompt-sync')()

let num1 = prompt("Digite o primeiro numero: ")
let num2 = prompt("Digite o segundo numero: ")
let num3 = prompt("Digite o terceiro numero: ")
let media = (parseInt(num1) + parseInt(num2) + parseInt(num3))/3

console.log("A média é: " + media)
