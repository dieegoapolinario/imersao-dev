/*Ano Luz*/
const btnAnoLuz = document.getElementById("btnAnoLuz");
btnAnoLuz.onclick = () =>{
  var numAnoLuz = document.getElementById("numAnoLuz").value;
  if(numAnoLuz < 1){
    document.getElementById("resultAnoLuz").innerHTML = "Valor Inválido!!!";
  } else{
    document.getElementById("resultAnoLuz").innerHTML = (numAnoLuz * 94605362070680.16).toFixed(2) + ' KM';
  }
}
/*Dolar p/ Real*/
const btnDolarReal = document.getElementById("btnDolarReal");
btnDolarReal.onclick = () => {
  var valorDolar = document.getElementById("valorDolar").value;
  var valorParaConverter = document.getElementById("valorParaConverter").value;
  if(valorParaConverter <= 0 || valorDolar <= 0){
    document.getElementById("resultDolarReal").innerHTML = "Valor Inválido!!!";
  } else{
    document.getElementById("resultDolarReal").innerHTML = "R$ " + (valorParaConverter * valorDolar).toFixed(2);
  }
}
/*Libra p/ Dolar*/
const btnLibraDolar = document.getElementById("btnLibraDolar");
btnLibraDolar.onclick = () => {
  var valorLibra = document.getElementById("valorLibra").value;
  var valorParaConverterLibra = document.getElementById("valorParaConverterLibra").value;
  if(valorParaConverterLibra <= 0 || valorLibra <= 0){
    document.getElementById("resultLibraDolar").innerHTML = "Valor Inválido!!!";
  } else{
    document.getElementById("resultLibraDolar").innerHTML = "$ " + (valorParaConverterLibra * valorLibra).toFixed(2);
  }
}
/*Celsius p/ Fahrenheit*/
const btnCelsius = document.getElementById("btnCelsius");
btnCelsius.onclick = () =>{
  var numCelsius = document.getElementById("numCelsius").value;
  if(numCelsius === ""){
    document.getElementById("resultCelsius").innerHTML = "Informe Um Valor!!!";
  } else{
    document.getElementById("resultCelsius").innerHTML = (9 * numCelsius /5 + 32).toFixed(2) + ' ºF';
  }
}