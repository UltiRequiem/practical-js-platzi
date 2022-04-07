const persona = {
  nombre: "Oscar",
  apellido: "Aguilar",
  edad: 21,
};

const frutas = ["Pera", "Manzana", "Sandia"];

const oneFunc = (array) => {
  array.forEach((elem) => {
    console.log(elem);
  });
};

const anotherFunc = (objeto) => {
  Object.values(objeto).forEach((elem) => {
    console.log(elem);
  });
};

const unaFuncion = (array) => {
  console.log(array[0]);
};
