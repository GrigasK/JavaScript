const button = document.querySelector("button");
button.style.cssText = "position:absolute; top:20px; left:20px;";

document.querySelector("button").addEventListener("click", changePosition);

let isInOriginalPosition = true;
function changePosition(event) {
  event.preventDefault();

  if ((event.target.style.cssText = isInOriginalPosition)) {
    document.querySelector("button").style.cssText =
      "position:absolute;bottom: 20px;right:20px;";
    isInOriginalPosition = false;
  } else {
    document.querySelector("button").style.cssText =
      "position:absolute;top: 20px;left:20px;";
    isInOriginalPosition = true;
  }
}
