document.querySelector("form").addEventListener("submit", getData);

function getData(event) {
  event.preventDefault();
  const fullname = document.querySelector("input").value;
  const name = fullname.split(" ")[0];
  const editedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  const surname = fullname.split(" ")[1];
  const editedSurname =
    surname.charAt(0).toUpperCase() + surname.slice(1).toLowerCase();

  const person = new People(editedName, editedSurname);
  person.fillTable();
}

class People {
  constructor(fname, lname) {
    this.fname = fname;
    this.lname = lname;
    this.fillTable = function () {
      const fnameRow = document.createElement("td");
      fnameRow.textContent = this.fname;
      const lnameRow = document.createElement("td");
      lnameRow.textContent = this.lname;
      const tr = document.createElement("tr");
      tr.append(fnameRow, lnameRow);
      document.querySelector("table > tbody").append(tr);
    };
  }
}
