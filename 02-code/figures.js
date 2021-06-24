console.group('Cuadrados');

const perimetroCuadrado = (lado) => lado * 4;

const areaCuadrado = (lado) => lado * lado;

console.groupEnd();

console.group('Triángulos');

const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;

const areaTriangulo = (base, altura) => (base * altura) / 2;

console.log(`El área del triángulo es: ${areaTriangulo}cmˆ2`);

console.groupEnd();

console.group('Círculos');

const diametroCirculo = (radio) => radio * 2;

const { PI } = Math;

console.log(`PI es: ${PI}`);

const perimetroCirculo = (radio) => diametroCirculo(radio) * PI;

const areaCirculo = (radio) => radio * radio * PI;

console.groupEnd();

const calcularPerimetroCuadrado = () => {
  const input = document.getElementById('InputCuadrado');
  const { value } = input;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
};

const calcularAreaCuadrado = () => {
  const input = document.getElementById('InputCuadrado');
  const { value } = input;

  const area = areaCuadrado(value);
  alert(area);
};
