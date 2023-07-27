//Escreva um programa que calcule a média de très números informados pelo usuário

const prompt = require('prompt-sync')()

var num1 = prompt("Digite o primeiro numero: ")
var num2 = prompt("Digite o segundo numero: ")
var num3 = prompt("Digite o terceiro numero: ")
var media = (parseInt(num1) + parseInt(num2) + parseInt(num3))/3

console.log("A média é: " + media)
