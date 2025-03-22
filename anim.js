// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "(Sabes una cosa)", time: 14 },
  { text: "Tengo algo que decirte y no sé cómo empezar a explicar", time: 19 },
  { text: "Lo que te quiero contar", time: 24},
  { text: "(Sabes una cosa)", time: 27 },
  { text: "No encuentro las palabras ni verso, rima o prosa", time: 34 },
  { text: "Quizá, con una rosa te lo pueda decir", time: 39 },
  { text: "(Sabes una cosa)", time: 43 },
  { text: "No sé ni desde cuándo llegaste de repente", time: 49 },
  { text: "Mi corazón se puso a cantar", time: 53 },
  { text: "(Sabes una cosa)", time: 59 },
  { text: "Te quiero, niña hermosa Y te entrego en esta rosa", time: 63 },
  { text: "La vida que me pueda quedar", time: 67 },
  { text: "Doy gracias al cielo", time: 71 },
  { text: "Por haberte conocido", time: 72 },
  { text: "Por haberte conocido", time: 74 },
  { text: "Doy gracias al cielo", time: 76 },
  { text: "Y le cuento a las estrellas", time: 79 },
  { text: "Lo bonito que sentí", time: 80 },
  { text: "Lo bonito que sentí", time: 82 },
  { text: "Cuando te conocí", time: 84 },
  { text: "Sabes", time: 89 },
  { text: "Sabes una cosa", time: 93 },
  { text: "Que yo te quiero", time: 96 },
  { text: "Que, sin ti, me muero", time: 99 },
  { text: "Si estás lejos", time: 101},
  { text: "♪ ♪ ♪", time: 103 },
  { text: "(Sabes una cosa)", time: 122 },
  { text: "Tengo algo que decirte Y no sé cómo empezar a explicar", time: 126 },
  { text: "Lo que te quiero contar", time: 132 },
  { text: "(Sabes una cosa)", time: 136 },
  { text: "Te quiero y te venero Te adoro y te deseo", time: 142 },
  { text: "Cariño, ven y déjate amar", time: 146 },
  { text: "Doy gracias al cielo", time: 148 },
  { text: "Por haberte conocido", time: 150 }, 
  { text: "Por haberte conocido", time: 152 },
  { text: "Doy gracias al cielo", time: 156 },
  { text: "Y le cuento a las estrellas", time: 157 },
  { text: "Lo bonito que sentí", time: 158 },
  { text: "Lo bonito que sentí", time: 160 },
  { text: "Cuando te conocí", time: 163 },
  { text: "Sabes", time: 167 }, 
  { text: "Sabes una cosa", time: 171  },
  { text: "Que yo te quiero", time: 174 },
  { text: "Que sin ti, me muero", time: 179 },
  { text: "Si estás lejos", time: 180 },
  { text: "Sabes una cosa", time: 184 },
  { text: "Sabes una cosa", time: 186 },
    
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);