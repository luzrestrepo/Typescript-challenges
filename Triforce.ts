function dibujarTrifuerza(n: number): void {
  //Dibujar el primer triangulo superior

  for (let i = 0; i < n; i++) {
    let espacios = "".repeat(n - i - 1);
    let asteriscos = "*".repeat(2 * i + 1);
    console.log(espacios + asteriscos);
  }

  // dibujar los dos triangulos inferiores

  for (let i = 0; i < n; i++) {
    let espaciosIniciales = "".repeat(n - i - 1);
    let asteriscosIzquierda = "*".repeat(2 * i + 1);
    let espacioMedio = "".repeat(2 * (n - i - 1) + 1);
    let asteriscosDerecha = "*".repeat(2 * i + 1);
    console.log(
      espaciosIniciales + asteriscosIzquierda + espacioMedio + asteriscosDerecha
    );
  }
}

let n = 3;
dibujarTrifuerza(n);
