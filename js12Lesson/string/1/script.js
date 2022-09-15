document.querySelector("button").addEventListener("click", check);

function check() {
  let name = document.getElementById("name").value;
  let rep = Number(document.getElementById("lenght").value);

  for (let i = 0; i < rep; i++) {
    if (Number.isInteger(rep)) {
      let printout = (document.createElement("h1").textContent = name);
      document.body.append(printout);
    } else {
      alert("Error");
    }
  }
}
