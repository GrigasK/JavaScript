document.getElementById("name").addEventListener("input", createArray);

function createArray() {
  let data = document.getElementById("name").value.split(" ");
  let name = (document.createElement("h1").textContent = data[0] + " ");
  let surname = (document.createElement("h1").textContent = data[1]);

  document.body.append(name);
  document.body.append(surname);
}
