document.getElementById("name").addEventListener("input", alertas);

function alertas() {
  let input = document.getElementById("name").value.trim();

  console.log(input.length);
}
