const tipoDeSuscripcion = "Basic";

if (tipoDeSuscripcion === "Free") {
  console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion === "Basic") {
  console.log("Puedes tomar casi todos los cursos de Platzi durante un mes.");
} else if (tipoDeSuscripcion === "Expert") {
  console.log("Puedes tomar casi todos los cursos de Platzi durante un año.");
} else if (tipoDeSuscripcion === "Expert+") {
  console.log(
    "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año.",
  );
}
