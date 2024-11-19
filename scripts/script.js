// Animacion diferentes idiomas
const presentationDiffLang = ["안녕", "Hola", "Hello"];

let text = document.querySelector(".idiomas");
let index = 0;

setInterval(() => {
  index = (index + 1) % presentationDiffLang.length;
  text.innerHTML = presentationDiffLang[index];
}, 1050);
