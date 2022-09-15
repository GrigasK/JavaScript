document.querySelector("button").addEventListener("click", calculate);

function calculate() {
  let fuelPrice = Number(document.getElementById("price").value);
  let fuelQuantity = Number(document.getElementById("quantity").value);

  let result = fuelPrice * fuelQuantity;

  let output = document.createElement("h1");
  output.textContent = result.toFixed(2) + "EUR";
  document.body.append(output);
}

// ================================================================
// let milkPrice = 1.1;

// if (Number.isInteger(milkPrice)) {
//   alert("turėk lygiai, nes kaina, " + milkPrice.toFixed(2) + "EUR");
// } else {
//   alert("krapštyk centus, nes kaina, " + milkPrice.toFixed(2) + "EUR");
// }
