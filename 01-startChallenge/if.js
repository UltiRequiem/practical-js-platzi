const printStatus = (suscripcionType) => {
  if (suscripcionType !== "Free") {
    console.log("Puedes tomar muchos cursos.");
    return;
  }
  console.log("Estás limitado en los cursos.");
};

const suscripcion = "Expert+";
printStatus(suscripcion);
