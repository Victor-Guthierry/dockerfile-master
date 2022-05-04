function adicionarFilme() {
  //Pega a URL digitada pelo usuário
  var filmeDigitado = document.getElementById("filme").value;
  //Faz a validação do endereço, verificando se o mesmo termina com ".jpg"
  if (filmeDigitado.endsWith(".jpg")) {
    listarFilmes(filmeDigitado);
  } else {
    console.error("Endereço de filme inválido!");
  }
  //Limpa a caixa de texto
  document.getElementById("filme").value = "";
}

function listarFilmes(filme) {
  //Cria a tag imagem para imprimir na tela
  var imprimir = "<img src=" + filme + ">";
  //Pega o espaço onde os filmes serão exibidos
  var filmeNaTela = document.getElementById("listaFilmes");
  //Faz a iteração para exibir os filmes
  filmeNaTela.innerHTML = filmeNaTela.innerHTML + imprimir;
}
