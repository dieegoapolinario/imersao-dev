function adicionarFilme(){
  var campoFilmeFavorito = document.querySelector('#filme');
  var filmeFavorito = campoFilmeFavorito.value;
  
  var campoTrailerFavorito = document.querySelector('#trailer');
  var trailerFavorito = campoTrailerFavorito.value;
  
  if(filmeFavorito.endsWith('.jpg') || filmeFavorito.endsWith('.png')){
    listarFilmesNaTela(filmeFavorito);
  } else{
    alert('Imagem Inválida')
  }
  
  if(trailerFavorito == ""){
    alert('Preencha o campo Trailer');
  } else if(trailerFavorito.endsWith('</iframe>')){
    listarTrailerNaTela(trailerFavorito);
  } else{
    alert('No youtube clica em "compartilhar > incorporar > copiar o código(<iframe...)" ')
  }
  campoFilmeFavorito.value = "";
  campoTrailerFavorito.value = "";
}

function listarFilmesNaTela(filme){
  var listaFilmes = document.querySelector('#listaFilmes');
  var elementoFilme = "<img src=" + filme + ">";
  listaFilmes.innerHTML += elementoFilme;
}

function listarTrailerNaTela(trailer){
  var listaTrailer =  document.querySelector('#listaTrailer');
  var elementoTrailer = trailer;
  listaTrailer.innerHTML += elementoTrailer;
}