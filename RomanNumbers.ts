function numeroARomano(num: number): string {
  const valores = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const simbolos = [
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

function fechaRomana(fecha: string): string {
  const [dia, mes, anio] = fecha.split("-").map(Number);

  const diaRomano = numeroARomano(dia);
  const mesRomano = numeroARomano(mes);
  const anioRomano = numeroARomano(anio);

  return `${diaRomano}-${mesRomano}-${anioRomano}`;
}

console.log(fechaRomana("01-01-2024"));
console.log(fechaRomana("15-05-1998"));
