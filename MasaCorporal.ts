let peso: number = 70; // Peso en kilogramos
let altura: number = 1.75; // Altura en metros

// Cálculo del BMI
let bmi: number = peso / altura ** 2;

console.log(`Tu BMI es: ${bmi.toFixed(2)}`);

// Interpretación del BMI
if (bmi < 18.5) {
  console.log("Bajo peso");
} else if (bmi >= 18.5 && bmi < 24.9) {
  console.log("Normal");
} else if (bmi >= 25 && bmi < 29.9) {
  console.log("Sobrepeso");
} else {
  console.log("Obesidad");
}
