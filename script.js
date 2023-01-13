function mudarTema() {
  const html = document.documentElement;
  html.classList.toggle("light");

  // pegar a tag img
  const img = document.querySelector("#profile img");

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver o light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/albert-wesker2.jpg");
    img.setAttribute("alt", "foto de Albert Wesker pensando");
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/albert-wesker.jpg");
    img.setAttribute("alt", "Foto de Albert Wesker");
  }
}