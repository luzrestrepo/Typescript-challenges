// funcion para verificar si una cadena es un palindromo
function esPalindromo(cadena) {
  // Convertir la cadena a minusculas y eliminar espacios y puntuacion
  let cadenaLimpia = cadena.toLowerCase().replace(/[^a-z0-9]/g, "");
  //comparar la cadena limpia con su version invertida
  let cadenaInvertida = cadenaLimpia.split("").reverse().join("");
  return cadenaLimpia === cadenaInvertida;
}
//solicito al usuario introducir una cadena de texto
let cadenaUsuario = "Somos o no somos";
//verificar si la cadena es un palindromo
if (esPalindromo(cadenaUsuario)) {
  console.log("La cadena de texto es un palindromo");
} else {
  console.log("La cadena de texto no es un palindromo");
}
