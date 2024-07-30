// Variables para almacenar el total de la factura y el porcentaje de propina
let totalFactura = 100000; // Total de la factura en pesos colombianos
let porcentajePropina = 15; // Porcentaje de propina
// Calcular la propina
let propina = (totalFactura * porcentajePropina) / 100;
// Imprimir la propina
console.log(
  "La propina que deber\u00EDas dejar es: COP ".concat(propina.toFixed(2))
);
