const firstScene = document.querySelector("#firstScene");
const secondScene = document.querySelector("#secondScene");
const fortuneCookie = document.querySelector("#fortuneCookie");
const tryButton = document.querySelector("#tryButton");
const messageCookie = document.querySelector("#messageCookie");

var phrases = [
  "A vida trará coisas boas se tiveres paciência.",
  "Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você.",
  "Não compense na ira o que lhe falta na razão.",
  "Defeitos e virtudes são apenas dois lados da mesma moeda.",
  "A maior de todas as torres começa no solo.",
];

function openFortuneCookie() {
  let randomPhrases = Math.floor(Math.random() * phrases.length);
  messageCookie.innerHTML = phrases[randomPhrases];
  firstScene.classList.add("hide");
  secondScene.classList.remove("hide");
}

function tryNewFortuneCookie() {
  firstScene.classList.remove("hide");
  secondScene.classList.add("hide");
}
