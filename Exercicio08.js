//Faça um programa que imprima os números pares de 1 a 20.

const prompt = require('prompt-sync')()

for(let i=1; i<=20; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}


