// funcion para verificar si una cadena es un palindromo

function esPalindromo(cadena: string): boolean {
  // Convertir la cadena a minusculas y eliminar espacios y puntuacion
  let cadenaLimpia: string = cadena.toLowerCase().replace(/[^a-z0-9]/g, "");

  //comparar la cadena limpia con su version invertida

  let cadenaInvertida: string = cadenaLimpia.split("").reverse().join("");

  return cadenaLimpia === cadenaInvertida;
}

//solicito al usuario introducir una cadena de texto
let cadenaUsuario: string = "Somos o no somos";

//verificar si la cadena es un palindromo

if (esPalindromo(cadenaUsuario)) {
  console.log("La cadena de texto es un palindromo");
} else {
  console.log("La cadena de texto no es un palindromo");
}
