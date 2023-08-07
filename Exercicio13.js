//Faça um programa que verifique se uma palavra é um palindromo (se pode ser lide da mesma forma de trás para frente).

const palavra = "ovo"; // Faça o uso de outras palavras para testar

function ehPalindromo(str) {
  const reverso = str.split("").reverse().join("");
  return str === reverso;
}

if (ehPalindromo(palavra)) {
  console.log(`A palavra ${palavra} é um palíndromo!`);
} else {
  console.log(`A palavra ${palavra} não é um palíndromo.`);
}
