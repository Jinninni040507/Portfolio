// Animacion diferentes idiomas
const presentationDiffLang1 = [
  "안녕 하세요, 모니카입니다!",
  "Hola, soc la Mònica!",
  "Hi, I'm Monica!",
  "Hola, soy Mónica!",
];

const presentationDiffLang2 = [
  "저는 웹 개발자 학생이고<br> 언어 공부하는 것을 마음에 들어요.",
  "Soc estudiant de Desenvolupament Web,<br> i una gran apasionada dels idiomes.",
  "I'm a Web Development student,<br>and I'm passionate about learning languages.",
  "Soy estudiante de Desarrollo Web,<br>y una gran apasionada de los idiomas.",
];
let text1 = document.querySelector(".idiomas1");
let text2 = document.querySelector(".idiomas2");
let index1 = 0,
  index2 = 0;

setInterval(() => {
  index1 = (index1 + 1) % presentationDiffLang1.length;
  index2 = (index2 + 1) % presentationDiffLang2.length;
  text1.innerHTML = presentationDiffLang1[index1];
  text2.innerHTML = presentationDiffLang2[index2];
}, 4000);
