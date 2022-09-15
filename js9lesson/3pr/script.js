const mygt = document.querySelector("button");
mygt.style.cssText = "position:absolute; top:120px; left:120px;";

let rotateDeg = 0;
mygt.addEventListener("click", () => {
  rotateDeg = rotateDeg + 45;
  mygt.style.transform = "rotate(" + rotateDeg + "deg)";

  // for (let i = 0; i < 10; i++) {
  //   button = document.querySelector("button").style.cssText =
  //     "position:absolute; top:120px; left:20px; transform:rotate(45deg);";
});
