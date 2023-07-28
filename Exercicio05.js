//Faça um programa que verifique se um número é par ou impar.

const prompt = require('prompt-sync')()

let numero = prompt("Digite um numeto: ")

if(numero % 2 === 0){
    console.log("O número é Par.")
} else {
    console.log("O número é Ímpar")
}