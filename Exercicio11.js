//Escreva um programa que receba uma lista de números e imprima apenas os números pares.

lista = [2, 4, 6, 3, 5, 7, 1, 22, 12, 8, 13, 11]

for(i=0; i < lista.length; i++){
    if(lista[i] % 2 == 0){
        console.log("Números Pares: ", lista[i]);
    }
}
