const mygt = document.querySelector("button");
mygt.addEventListener("click", colorButton);

const spalvos = ["red", "green", "blue", "yellow"];

function colorButton(event) {
  event.preventDefault();
  const randomNumber = Math.floor(Math.random() * 4);

  mygt.style.backgroundColor = spalvos[randomNumber];
}
