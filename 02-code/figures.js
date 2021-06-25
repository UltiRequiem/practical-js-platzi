// Constants
const { PI } = Math;

// Functions
const perimeterSquare = (l) => l * 4;

const areaSquare = (l) => l * l;

const perimeterTriangule = (lOne, lTwo, b) => lOne + lTwo + b;

const areaTriangle = (b, h) => (b * h) / 2;

const circuleDiameter = (r) => r * 2;

const calculatePerimeterSquare = () => {
  // eslint-disable-next-line no-alert
  alert(perimeterSquare(document.getElementById('InputCuadrado').value));
};

const calculateSquareArea = () => {
  // eslint-disable-next-line no-alert
  alert(areaSquare(document.getElementById('InputCuadrado').value));
};

const perimeterCircule = (r) => circuleDiameter(r) * PI;

const areaCircule = (r) => r * r * PI;
