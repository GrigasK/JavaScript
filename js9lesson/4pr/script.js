const main = document.querySelector("body");

document.querySelector("input").addEventListener("input", () => {
  var value = document.querySelector("input").value;
  if (value.length <= 2 && value.length > 0) {
    main.style.backgroundColor = "red";
  } else if (value.length > 2) {
    main.style.backgroundColor = "green";
  } else {
    main.style.backgroundColor = "white";
  }
});
