const audio = document.getElementById("myAudio");
const pausar = document.getElementById("pausar");

pausar.addEventListener("click", () => {
    if (audio.paused) {
    audio.play();
    } 

    else {
    audio.pause();
    }
});

const myImage = document.getElementById("myImage");

let showImage1 = true; // Variável para controlar qual imagem mostrar


pausar.addEventListener("click", () => {
    if (showImage1) {
      myImage.src = "IMG/pause.png"; // Muda para a segunda imagem
    } else {
      myImage.src = "IMG/play.png"; // Volta para a primeira imagem
    }
    showImage1 = !showImage1; // Inverte o valor da variável
  });

  window.onload = function() {
    var audio = document.getElementById("myAudio");
    audio.volume = 0.01; // Define o volume inicial para 50% (ajuste conforme necessário)
  };

