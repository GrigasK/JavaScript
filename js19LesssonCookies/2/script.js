const profile = {
  name: "Grigorijus",
  surname: "Kareiva",
  about: "Little known fact: I am half Lithuanian, half russian and half bunny",
  image:
    "https://freightservices.greencarrier.com/wp-content/uploads/2016/06/grigorijus-blinovas.gif",
};

localStorage.setItem("profilis", JSON.stringify(profile));

const showProfile = (parametras) => {
  const img = document.createElement("img");
  img.src = parametras.image;
  document.body.append(img);

  const fullname = document.createElement("h1");
  fullname.textContent = parametras.name + " " + parametras.surname;
  document.body.append(fullname);

  const description = document.createElement("p");
  description.textContent = parametras.about;
  document.body.append(description);
};

const getDataFromLocalStorage = JSON.parse(localStorage.getItem("profilis"));
showProfile(getDataFromLocalStorage);
