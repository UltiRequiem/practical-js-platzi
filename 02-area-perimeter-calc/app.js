// Constants
const { PI } = Math;
const ANSWER = document.getElementById('answer');

// Functions
const perimeterSquare = (l) => l * 4;

const areaSquare = (l) => l * l;

const perimeterTriangule = (lOne, lTwo, b) => lOne + lTwo + b;

const areaTriangle = (b, h) => (b * h) / 2;

const circuleDiameter = (r) => r * 2;

const calculatePerimeterSquare = () => {
  ANSWER.textContent = perimeterSquare(
    document.getElementById('InputCuadrado').value
  );
};

const calculateSquareArea = () => {
  ANSWER.textContent = areaSquare(
    document.getElementById('InputCuadrado').value
  );
};

const perimeterCircule = (r) => circuleDiameter(r) * PI;

const areaCircule = (r) => r * r * PI;
