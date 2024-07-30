// Variables para almacenar el total de la factura y el porcentaje de propina
let totalFactura: number = 100000; // Total de la factura en pesos colombianos
let porcentajePropina: number = 15; // Porcentaje de propina

// Calcular la propina
let propina: number = (totalFactura * porcentajePropina) / 100;

// Imprimir la propina
console.log(`La propina que deberías dejar es: COP ${propina.toFixed(2)}`);
