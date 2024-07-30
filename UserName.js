// Funcion para generar un numero de usuario entre min y max
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
//variables de entrada
let nombre = "Santiago";
let apellido = "Restrepo";
// Generar el nombre de usuario
let nombreUsuario =
  nombre.slice(0, 3).toLowerCase() +
  apellido.slice(0, 3).toLowerCase() +
  getRandomNumber(100, 999);
// imprimir el nombre de usuario
console.log("Nombre de usuario generado:".concat(nombreUsuario));
