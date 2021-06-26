const NUMBERS = [100, 200, 500, 400000000];

const calcularMediaAritmetica = (arr) =>
  arr.reduce(
    (valorAcumulado = 0, nuevoElemento) => valorAcumulado + nuevoElemento
  ) / arr.length;

const mitadLista1 = NUMBERS.length / 2;

function isEven(n) {
  if (!n % 2 === 0) {
    return true;
  }
  return false;
}

let mediana;

if (isEven(NUMBERS.length)) {
  const elemento1 = NUMBERS[mitadLista1 - 1];
  const elemento2 = NUMBERS[mitadLista1];

  const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);

  mediana = promedioElemento1y2;
} else {
  mediana = NUMBERS[mitadLista1];
}

console.log(mediana);
