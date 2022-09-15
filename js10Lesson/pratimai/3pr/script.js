document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  name = document.getElementById("name").value;
  age = document.getElementById("age").value;

  const isLegalAge = age >= 18 ? true : false;

  const person = {
    name: name,
    age: isLegalAge,
  };
  console.log(person);
});
