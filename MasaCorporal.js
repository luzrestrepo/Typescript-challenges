let peso = 70; // peso en kilogramos
let altura = 1.65;
//calculo del BMI
let bmi = peso / Math.pow(altura, 2);
// Impresion del BMI
console.log(`Tu BMI es: ${bmi.toFixed(2)}`);
//Interpretacion del BMI
if (bmi < 18.5) {
  console.log("Bajo peso");
} else if (bmi >= 18.5 && bmi < 24.9) {
  console.log("Normal");
} else if (bmi >= 25 && bmi < 29.9) {
  console.log("Sobrepeso");
} else {
  console.log("Obesidad");
}
