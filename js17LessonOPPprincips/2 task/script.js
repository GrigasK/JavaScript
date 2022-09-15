const data = document.querySelector("form").addEventListener("submit", getData);

function getData(event) {
  event.preventDefault();
  let brand = document.getElementById("brand").value;
  let model = document.getElementById("model").value;
  let mileage = document.getElementById("mileage").value;
  let price = document.getElementById("price").value;
  let url = document.getElementById("url").value;

  const result = new Cars(brand, model, mileage, price, url);
  result.addData();
}

class Cars {
  constructor(brand, model, mileage, price, url) {
    this.brand = brand;
    this.model = model;
    this.mileage = mileage;
    this.price = price;
    this.url = url;
    this.addData = function () {
      const divContainer = document.createElement("div");
      divContainer.setAttribute("id", "divContainer");
      divContainer.addEventListener("click", () => {
        alert(price);
      });

      const description = document.createElement("h6");
      description.textContent = brand + " " + model;

      const image = document.createElement("img");
      image.src = url;

      document.getElementById("wrapper").append(divContainer);

      // ši vieta neveikė, nes naudojau document.getElementById ir priskirdavo prie vieno divo viską
      divContainer.append(image, description);
    };
  }
}
