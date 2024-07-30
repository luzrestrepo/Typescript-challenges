function analizarTexto(texto) {
    //variables
    var palabras = texto.split(/\s+/);
    var numeroPalabras = 0;
    var longitudTotalPalabras = 0;
    var numeroOraciones = 0;
    var palabraMasLarga = "";
    //Bucle para analizar cada palabra
    for (var _i = 0, palabras_1 = palabras; _i < palabras_1.length; _i++) {
        var palabra = palabras_1[_i];
        if (palabra.trim().length === 0)
            continue;
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
    var longitudMediaPalabras = numeroPalabras === 0 ? 0 : longitudTotalPalabras / numeroPalabras;
    // Imprimir resultados
    console.log("N\u00FAmero total de palabras: ".concat(numeroPalabras));
    console.log("Longitud media de las palabras: ".concat(longitudMediaPalabras.toFixed(2)));
    console.log("N\u00FAmero de oraciones: ".concat(numeroOraciones));
    console.log("La palabra m\u00E1s larga: ".concat(palabraMasLarga));
}
// Ejemplo de uso
var texto = "Esta es una oración. Esta es otra oración. Y aquí hay una más.";
analizarTexto(texto);
