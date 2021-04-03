const listaGames = [
  {
    id: 0,
    title: "Gears of War",
    description: "DIA DA EMERGÊNCIA - O planeta está em ruínas – cidades desabando, e os maiores trabalhos do Homem caíram. A Horda Locust chegou, e continuará vindo. Eles não vão parar de matar. Um condenado chamado Marcus Fenix, abandonado para morrer, agora está encarregado de manter a humanidade viva. O que lhe conforta é apenas um fato: a raça humana não está extinta. Ainda.",
    img: "https://upload.wikimedia.org/wikipedia/pt/8/82/Gears_of_War.png",
  },
  {
    id: 1,
    title: "Gears of War 2",
    description: "ESPERANÇA NA VEIA - O inverno se aproxima. Guerra que segue. Cidades inteiras estão afundando, engolidas por uma nova ameaça das profundezas. Em breve, não restará nada à humanidade para defender. Só resta uma opção: um ataque total à Horda Locust.",
    img: "https://images-na.ssl-images-amazon.com/images/I/71dKe4mYccL.jpg",
  },
  {
    id: 2,
    title: "Gears of War 3",
    description: "IRMÃOS ATÉ O FIM - “Gears of War 3” é a conclusão espetacular de uma das mais memoráveis e cultuadas sagas dos videogames. Com os sobreviventes dispersos e a civilização em ruínas, Marcus e seus colegas correm contra o tempo em sua luta para salvar a raça humana.",
    img: "https://store-images.s-microsoft.com/image/apps.52315.68607194681373551.b4c09a44-be36-42d6-96c5-4a33b566becd.9199c63b-06f1-41b5-8118-c1d2373ee86a?mode=scale&q=90&h=1080&w=1920",
  },
  {
    id: 3,
    title: "Gears of War Judgement",
    description: "CONFIE NOS SEUS INSTINTOS - Uma espécie subterrânea de criaturas horrendas, os Locust, surgiu das profundezas do planeta Sera e declarou guerra contra a humanidade. Nos momentos subsequentes ao Dia da Emergência, o destino do planeta está nas mãos de um jovem tenente, Damon Baird, e sua equipe de soldados, o Esquadrão Kilo. Arriscando tudo, Kilo precisa contrariar suas ordens para salvar seu mundo sitiado de um novo e horripilante inimigo.",
    img: "https://store-images.s-microsoft.com/image/apps.1787.70323071690757883.aa344172-c923-4b38-a055-9ce9a093bc86.4728b066-afb5-4b2a-bdc2-d91341663e15?mode=scale&q=90&h=1080&w=1920",
  },
  {
    id: 4,
    title: "Gears of War Ultimate Edition",
    description: "REENGRENADO PARA UMA NOVA GERAÇÃO - Experimente o jogo que inaugurou uma das sagas mais consagradas no mundo do entretenimento com Gears of War: Ultimate Edition. O jogo de tiro que definiu a primeira geração de jogos em alta definição foi meticulosamente remasterizado em 1080P e modernizado para Xbox One, e conta com uma série de conteúdos novos, incluindo cinco capítulos da campanha que nunca foram lançados para o Xbox.",
    img: "https://cdn.gearsofwar.com/gearsofwar/sites/9/2020/02/gears-of-war-ultimate-edition-2000x2000-5e4711ecd19e4-1024x1024.jpg",
  },
  {
    id: 5,
    title: "Gears of War 4",
    description: "NUNCA LUTE SOZINHO - Começa um novo capítulo de uma das franquias mais aclamadas da história dos videogames. Após escapar por pouco de um ataque ao seu vilarejo, JD Fenix e seus amigos, Kait e Del, precisam resgatar os que amam e descobrir a origem de um novo e monstruoso inimigo.",
    img: "https://static.wikia.nocookie.net/dublagem/images/e/e5/8432a0d9-36a8-48fb-b91c-d0d668106035.jpg/revision/latest?cb=20200613142418&path-prefix=pt-br",
  },
]

//Pagina incial
for(var i = 0; i < listaGames.length; i++){
  document.write("<img src=" + listaGames[i].img + " width='350px' height='400px'><br />");
  document.write("<span>" + listaGames[i].title + "</span><br />");
}
//Detalhes do jogo
var btn = document.querySelector('button');
btn.onclick = () => {
  var input = parseInt(document.querySelector('input').value);
  for(var x = 0; x < listaGames.length; x++){
    if(input == listaGames[x].id){
      alert(listaGames[x].title + " / " + listaGames[x].description);  
      break;
    }   
  }
  if(input < 0 || input > 6){
    alert('Opção Inválida! Digite novamente');
  }
}