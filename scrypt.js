let inputNumero = document.getElementById("numero-calc");

function calcular() {
  console.log("Calculando...");
  let numero = inputNumero.value;

  let resultado = numero * 4.67;
  alert("Você tem " + parseFloat(resultado) + " dolares");
}
