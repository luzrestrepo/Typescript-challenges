function drawSpiral(size) {
  if (size < 2) return "";

  // Crear una matriz 2D llena de espacios en blanco
  const spiral = Array(size)
    .fill()
    .map(() => Array(size).fill(" "));

  let x = 0,
    y = 0;
  let dx = 1,
    dy = 0;
  let steps = size;
  let turn = 0;

  for (let i = 0; i < size * size; i++) {
    spiral[y][x] = getSymbol(dx, dy, turn === 0 && i > 0);

    steps--;
    if (steps === 0) {
      steps = size - 1 - Math.floor(turn / 2);
      [dx, dy] = [-dy, dx];
      turn++;
    }

    x += dx;
    y += dy;
  }

  return spiral.map((row) => row.join("")).join("\n");
}

function getSymbol(dx, dy, isCorner) {
  if (isCorner) {
    return dx === 1 && dy === 0
      ? "╗"
      : dx === 0 && dy === 1
      ? "╝"
      : dx === -1 && dy === 0
      ? "╚"
      : "╔";
  }
  return dx !== 0 ? "═" : "║";
}

// Ejemplo de uso
console.log(drawSpiral(5));
