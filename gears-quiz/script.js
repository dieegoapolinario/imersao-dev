const gears = [
  {
    name: "Anya",
    nameComplete: "Anya Stroud",
    img: "https://i.pinimg.com/originals/b4/c0/fb/b4c0fba6f430660b55a2bbd1629a6699.jpg"
  },
  {
    name: "Marcus",
    nameComplete: "Marcus Fenix",
    img: "https://i.pinimg.com/originals/48/13/d9/4813d934f15aca9f82b82e6f1fd04aad.jpg"
  },
  {
    name: "Dom",
    nameComplete: "Dominic Santiago",
    img: "https://i.pinimg.com/564x/ef/f1/a5/eff1a5db6ea479445f55e5531806b4db.jpg"
  },
  {
    name: "Cole",
    nameComplete: "Augustus Cole",
    img: "http://images2.wikia.nocookie.net/__cb20110616021334/gearsofwar/images/c/c7/ColeInfoBoxPic.JPG"
  },
  {
    name: "Carmine",
    nameComplete: "Clayton Carmine",
    img: "http://3.bp.blogspot.com/-AFg-91EdhVY/TvNqkIrr2bI/AAAAAAAAWNc/kXa7XY-TfiA/s1600/DLC3-Variant_Chars+-+Recruit+Clayton+Carmine.jpg"
  }
];
const btnEnviar = document.getElementById('btnEnviar');
const img = document.querySelector('img');
var num = 0;
function random(){
  num = Math.floor(Math.random() * gears.length);
  img.setAttribute('src', gears[num].img);
}

function reset(){
  document.getElementById('txtNome').value = "";
  document.getElementById('result').innerHTML = "";
  document.getElementById('imgGears').className = null;
  random();
}

reset();

btnEnviar.onclick = () => {
  let result = document.getElementById('txtNome').value

  if(result.length){
    if(result.toLowerCase() == gears[num].name.toLowerCase()){
      document.getElementById('result').innerHTML = "Acertou! Gears " + gears[num].nameComplete;
      setTimeout(() => { reset(); }, 1500);
    }else{
      document.getElementById('result').innerHTML = "Errado! Gears " + gears[num].nameComplete;
      setTimeout(() => { reset(); }, 1500);
    }
  }else{
    document.getElementById('result').innerHTML = "Coloque o nome";
  }
}
