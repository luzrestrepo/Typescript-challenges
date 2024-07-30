function analizarTexto(texto: string) {
  //variables
  let palabras = texto.split(/\s+/);
  let numeroPalabras = 0;
  let longitudTotalPalabras = 0;
  let numeroOraciones = 0;
  let palabraMasLarga = "";

  //Bucle para analizar cada palabra

  for (let palabra of palabras) {
    if (palabra.trim().length === 0) continue;

    //Incremetar el numero de palabras

    numeroPalabras++;

    // Incrementar la loingitud total de pàlabras

    longitudTotalPalabras += palabra.length;

    //verificar si la palabra es mas larga
    if (palabra.length > palabraMasLarga.length) {
      palabraMasLarga = palabra;
    }

    // contar oraciones (cada vez que aparece un punto en la palabra )

    // Contar oraciones (cada vez que aparece un punto en la palabra)
    if (palabra.includes(".")) {
      numeroOraciones += (palabra.match(/\./g) || []).length;
    }
  }
  // Calcular la longitud media de las palabras
  let longitudMediaPalabras =
    numeroPalabras === 0 ? 0 : longitudTotalPalabras / numeroPalabras;
  // Imprimir resultados
  console.log(`Número total de palabras: ${numeroPalabras}`);
  console.log(
    `Longitud media de las palabras: ${longitudMediaPalabras.toFixed(2)}`
  );
  console.log(`Número de oraciones: ${numeroOraciones}`);
  console.log(`La palabra más larga: ${palabraMasLarga}`);
}

// Ejemplo de uso
let texto = "Esta es una oración. Esta es otra oración. Y aquí hay una más.";
analizarTexto(texto);
