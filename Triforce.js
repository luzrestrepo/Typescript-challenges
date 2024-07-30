function dibujarTrifuerza(n) {
  //Dibujar el primer triangulo superior
  for (var i = 0; i < n; i++) {
    var espacios = " ".repeat(n - i - 1);
    var asteriscos = "*".repeat(2 * i + 1);
    console.log(espacios + asteriscos);
  }
  // dibujar los dos triangulos inferiores
  for (var i = 0; i < n; i++) {
    var espaciosIniciales = " ".repeat(n - i - 1);
    var asteriscosIzquierda = "*".repeat(2 * i + 1);
    var espacioMedio = " ".repeat(2 * (n - i - 1) + 1);
    var asteriscosDerecha = "*".repeat(2 * i + 1);
    console.log(
      espaciosIniciales + asteriscosIzquierda + espacioMedio + asteriscosDerecha
    );
  }
}
var n = 2;
dibujarTrifuerza(n);
