list = [1, 5, 7, 2, 4, 8, 11, 20, 22, 35, 47];

function valorMarioMenor(lista) {
  let valorMaior = 0;
  let valorMenor = lista[0];
  for (i = 0; i < lista.length; i++) {
    if (lista[i] > valorMaior) {
      valorMaior = lista[i];
    }
    if (lista[i] < valorMenor) {
      valorMenor = lista[i];
    }
  }
  console.log("O maior valor é: " + valorMaior);
  console.log("O meno valor é: " + valorMenor);
}

valorMarioMenor(list);
