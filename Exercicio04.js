//Crie um programa que receba a idade de uma pessoa e informe so ela é maior ou menor de idade.

const prompt = require('prompt-sync')()

let idade = prompt("Digita a sua idade: ")

if(idade >= 18){
    console.log("Você é maior de idade!")
}
else{
    console.log("Você é menor de idade!")
}