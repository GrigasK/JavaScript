document.querySelector("form").addEventListener("click", (e) => {
  e.preventDefault();
  const fullname = document.getElementById("fullname").value;

  const [name, surname] = fullname.split(" ");

  const addToLocalStorage = JSON.stringify(
    localStorage.setItem("name", name) +
      JSON.stringify(localStorage.setItem("surname", surname))
  );

  createTable();
});

const createTable = () => {
  const vardas = createElement("td");
  vardas.textContent = JSON.parse(localStorage.getItem(name));

  td.append(vardas);
  document.body.append(td);
};
