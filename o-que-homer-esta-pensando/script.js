var attempts = 3;
const btn = document.querySelector("button");

function game(){
  var numberSecret = parseInt(Math.random() * 11);
  while (attempts > 0){
    var number = parseInt(prompt("Digite o número"));   
    if(numberSecret == number){
      alert("Opa, você acertou! Será que você consegue acertar quantidade que irei pensar novamente?!");
      break;
    } else if(numberSecret < number){      
      alert("A quantidade é menor!");      
    } else {
      alert("A quantidade é maior!")      
    }      
    attempts--
  }
    if(number != numberSecret){
      alert("Não foi dessa vez! A quantidade que irei beber é " + numberSecret);
    }
    attempts = 3;
}
btn.onclick = game;