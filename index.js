let imagem = document.getElementById("imagem");
let contador_de_clicks = document.querySelector("p");
let contador = 0;
imagem.addEventListener("click", () => {
  contador++;
  contador_de_clicks.innerHTML = contador;
  if (contador === 1000) {
    contador_de_clicks.innerHTML = contador = 0;
  }
});
