function numeroARomano(num) {
  let valores = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let simbolos = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  let resultado = "";
  for (let i = 0; i < valores.length; i++) {
    while (num >= valores[i]) {
      resultado += simbolos[i];
      num -= valores[i];
    }
  }
  return resultado;
}
function fechaRomana(fecha) {
  let _a = fecha.split("-").map(Number),
    dia = _a[0],
    mes = _a[1],
    anio = _a[2];
  let diaRomano = numeroARomano(dia);
  let mesRomano = numeroARomano(mes);
  let anioRomano = numeroARomano(anio);
  return "".concat(diaRomano, "-").concat(mesRomano, "-").concat(anioRomano);
}
// Ejemplos de uso
console.log(fechaRomana("26-07-2024")); // Devuelve "I-I-MMXXI"
console.log(fechaRomana("15-05-1998")); // Devuelve "XV-V-MCMXCVIII"
