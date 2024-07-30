interface Agenda {
  [nombre: string]: string;
}

//creo un objeto para almacenar los contactos de la agenda

let agendaTelefonica: Agenda = {};

// Añadir algunos contactos a la agenda
agendaTelefonica["Juan Perez"] = "123-456-789";
agendaTelefonica["Maria Lopez"] = "987-654-321";
agendaTelefonica["Carlos Gomez"] = "456-789-123";

let nombreABuscar: string = "Maria Lara";

//Buscar un contacto en la agenda

if (nombreABuscar in agendaTelefonica) {
  console.log(
    `El numero de telefono de ${nombreABuscar} es : ${agendaTelefonica[nombreABuscar]}`
  );
} else {
  console.log(`el contacto ${nombreABuscar} no se encontro en la agenda`);
}
