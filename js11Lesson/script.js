document.body.style.backgroundColor = "#0057b7";
let divContainer = document.createElement("div");

divContainer.style.cssText =
  " display:flex; align-items: center; flex-direction: column; background-color: #ffd700; border: transparent; border-radius: 10px; margin: 100px auto 100px auto; width: 60%; height: 666px;";
document.body.append(divContainer);

let title = document.createElement("p");
title.style.cssText = "padding-top: 30px; font-size: 25px;";
title.textContent = "John Smith";
document.querySelector("div").prepend(title);

let content = document.createElement("p");
content.style.cssText =
  "padding: 0 30px 0 30px; margin-top: -20px ; font-size: 15px; color: white; font-weight: 900px; widht: 80%";
content.textContent =
  "John Smith (baptized 6 January 1580 – 21 June 1631) was an English soldier, explorer, colonial governor, Admiral of New England, and author. He played an important role in the establishment of the colony at Jamestown, Virginia, the first permanent English settlement in America, in the early 17th century.";
document.querySelector("div").append(content);

let image = document.createElement("img");
image.title = "Push on picture to read more about John Smith";
image.style.cssText =
  "dipslay: flex; margin-top: -50px;height: 100px; width: 100px; border-radius: 100%; border: solid 3px white; outline-color: grey;";
image.src =
  "https://cdn.britannica.com/81/82281-050-3ADDC3DB/John-Smith-engraving.jpg";

document.querySelector("div").prepend(image);

document.querySelector("img").addEventListener("click", goToUrl);
document.querySelector("img").addEventListener("mouseenter", mouseEnter);
document.querySelector("img").addEventListener("mouseleave", mouseLeave);

function goToUrl() {
  document.location.href =
    "https://en.wikipedia.org/wiki/John_Smith_(explorer)";
}

function mouseEnter() {
  image.style.cssText =
    "dipslay: flex; margin-top: -60px;height: 120px; width: 120px; border-radius: 100%; border: solid 3px white; outline-color: grey;";
}

function mouseLeave() {
  image.style.cssText =
    "dipslay: flex; margin-top: -50px;height: 100px; width: 100px; border-radius: 100%; border: solid 3px white; outline-color: grey;";
}
