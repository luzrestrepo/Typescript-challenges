//creo un objeto para almacenar los contactos de la agenda
let agendaTelefonica = {};
// Añadir algunos contactos a la agenda
agendaTelefonica["Juan Perez"] = "123-456-789";
agendaTelefonica["Maria Lopez"] = "987-654-321";
agendaTelefonica["Carlos Gomez"] = "456-789-123";
let nombreABuscar = "Maria Lara";
//Buscar un contacto en la agenda
if (nombreABuscar in agendaTelefonica) {
  console.log(
    "El numero de telefono de "
      .concat(nombreABuscar, " es : ")
      .concat(agendaTelefonica[nombreABuscar])
  );
} else {
  console.log(
    "el contacto ".concat(nombreABuscar, " no se encontro en la agenda")
  );
}
