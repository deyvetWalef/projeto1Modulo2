let botao = document.getElementById("botao");
let imagem = document.getElementById("imagem");
let cientifico = document.getElementById("cientifico");
let informacao = document.getElementById("informacao");

botao.addEventListener("click", () => {
  if (botao.value == "um") {
    imagem.src = "./assets/imagens/Homer01.png";
    cientifico.innerText = "Nome Científico: Monkius Eatalotis";
    informacao.innerText = "Habilidades: Literalmente um acéfalo";
    botao.value = "dois";
  } else if (botao.value == "dois") {
    imagem.src = "./assets/imagens/Homer02.png";
    cientifico.innerText = "Nome Científico: Chimpus Imbecilus";
    informacao.innerText = "Habilidades: Um acéfalo com braço mais longo";
    botao.value = "tres";
  } else if (botao.value == "tres") {
    imagem.src = "./assets/imagens/Homer03.png";
    cientifico.innerText = "Nome Científico: Apeis Stupidus";
    informacao.innerText = "Habilidades: Agora o acéfalo é corcunda";
    botao.value = "quatro";
  } else if (botao.value == "quatro") {
    imagem.src = "./assets/imagens/Homer04.png";
    cientifico.innerText = "Nome Científico: Neanderslob";
    informacao.innerText =
      "Habilidades: O corcunda aprendeu a andar posturado e marrento";
    botao.value = "cinco";
  } else {
    imagem.src = "./assets/imagens/Homer05.png";
    cientifico.innerText = "Nome Científico: Homersapien";
    informacao.innerText =
      "Habilidades: O marrento agora quer usar roupa de cria";
    botao.value = "um";
  }
});
