document.querySelector("button").addEventListener("click", getClosest);

function getClosest() {
  const x = document.querySelector("input[name=number1]").value;
  const y = document.querySelector("input[name=number2]").value;
  if (x != y) {
    x1 = Math.abs(x - 100);
    y1 = Math.abs(y - 100);

    if (x1 < y1) {
      alert(x);
    }
    if (y1 < x1) {
      alert(y);
    }
  } else return alert("Abu");
}

// document.querySelector("input[name=vardas").addEventListener("blur", printName);
// var items = [];
// function printName(event) {
//   event.preventDefault();

//   const vard = document.querySelector("input[name=vardas]").value;
//   items.push(vard);
//   document.querySelector("h1").innerHTML = items;
// }
