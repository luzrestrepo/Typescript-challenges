function drawSpiral(size: number): string {
  if (size < 2) return "";

  // Crear una matriz 2D llena de espacios en blanco
  const spiral: string[][] = [];
  for (let i = 0; i < size; i++) {
    spiral.push(new Array(size).map(() => " "));
  }

  let x = size - 1,
    y = 0;
  let dx = -1,
    dy = 0;

  for (let i = size; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (i === size) {
        spiral[y][x] = "═";
      } else if (j === i - 1) {
        spiral[y][x] = dx === -1 ? "╗" : dx === 1 ? "╚" : dy === -1 ? "╔" : "╝";
      } else {
        spiral[y][x] = dx !== 0 ? "═" : "║";
      }
      x += dx;
      y += dy;
    }
    [dx, dy] = [-dy, dx];
  }

  return spiral.map((row) => row.join("")).join("\n");
}

// Ejemplo de uso
console.log(drawSpiral(5));
