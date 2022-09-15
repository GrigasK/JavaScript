const mygt = document.querySelector("button");
mygt.addEventListener("click", colorButton);

function colorButton() {
  let firstIndex = Math.floor(Math.random() * 254);
  let secondIndex = Math.floor(Math.random() * 254);
  let thirdIndex = Math.floor(Math.random() * 254);

  mygt.style.backgroundColor = `rgb(${firstIndex},${secondIndex},${thirdIndex})`;
  console.log([firstIndex, secondIndex, thirdIndex]);
}
//   const randomBetween = (min, max) =>
//     min + Math.floor(Math.random() * (max - min + 1));
//   const firstIndex = randomBetween(0, 255);
//   const secondIndex = randomBetween(0, 255);
//   const thirdIndex = randomBetween(0, 255);
