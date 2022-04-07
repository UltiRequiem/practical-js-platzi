const NUMBERS = [100, 200, 500, 400000000];

const calcularMediaAritmetica = (arr) =>
  arr.reduce(
    (valorAcumulado = 0, nuevoElemento) => valorAcumulado + nuevoElemento,
  ) / arr.length;

function isEven(n) {
  if (!n % 2 === 0) {
    return true;
  }
  return false;
}

function main() {
  if (isEven(NUMBERS.length)) {
    const promedioElemento1y2 = calcularMediaAritmetica([
      NUMBERS[NUMBERS.length / 2 - 1],
      NUMBERS.length / 2,
    ]);

    return promedioElemento1y2;
  }
  return NUMBERS[NUMBERS.length / 2];
}

console.log(main());
