function esViernes13(mes: number, año: number): boolean {
  // Crear una fecha para el día 13 del mes y año indicados
  let fecha = new Date(año, mes - 1, 13);

  // Obtener el día de la semana para el día 13
  let diaSemana = fecha.getDay();

  // Imprimir la fecha y el día de la semana para depuración
  console.log(`Fecha: ${fecha.toDateString()}, Día de la semana: ${diaSemana}`);

  // Verificar si el día de la semana es viernes (5)
  return diaSemana === 5;
}

// Ejemplo de uso:
console.log(esViernes13(9, 2024));
console.log(esViernes13(1, 2023));
console.log(esViernes13(12, 2024));
