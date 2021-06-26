const esPar = (n) => n % 2 === 0;

const calcularMediaAritmetica = (lista) =>
  lista.reduce(
    (valorAcumulado = 0, nuevoElemento) => valorAcumulado + nuevoElemento
  ) / lista.length;

function medianaSalarios(arr) {
  const mitad = arr.length / 2;

  if (esPar(arr.length)) {
    const personitaMitad1 = arr[mitad - 1];
    const personitaMitad2 = arr[mitad];

    const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
    return mediana;
  }
  return arr[mitad];
}

const salarios = colombia.map((personita) => personita.salary);

const salariosColSorted = salarios.sort(
  (salaryA, salaryB) => salaryA - salaryB
);

const medianaGeneral = medianaSalarios(salariosColSorted);

const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;

const salaryTop10 = salariosColSorted.splice(spliceStart, spliceCount);

const medianaTop10 = medianaSalarios(salaryTop10);

console.log({
  medianaGeneralCol: medianaGeneral,
  medianaTop10Col: medianaTop10,
});
