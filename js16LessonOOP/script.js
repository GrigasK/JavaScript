// Susikurkite konstruktorių car, kuris priims brand, model, engine ir turės metodą 'turnOn' - kuris alertins 'vrooom'. Sukurkite du objektus ir patikrinkite ar veikia.
// Pakoreguokite šį konstruktorių ir pridėkite papildomą property 'basePrice' ir metodą 'getPrice'. basePrice propertį įrašys sukuriant objektą, tačiau getPric priklausimai nuo variklio išmes kokia yra galutinė kaina. Jei variklis 'electric' - kaina bus +10,000; jei 'diesel' +5,000; jei 'petrol' - kaina tokia kokia ir basePrice.

function Car(brandParam, modelParam, engineParam, basePrice) {
  this.brand = brandParam;
  this.model = modelParam;
  this.engine = engineParam;
  this.price = basePrice;

  this.turnOn = function () {
    alert("vroooom");
  };

  this.getPrice = function () {
    let electricAddOn = 10000;
    let dieselAddOn = 5000;

    if (engineParam === "Electric") {
      console.log(
        this.brand +
          " " +
          this.model +
          " have an " +
          this.engine +
          " engine. Price tag: " +
          (this.price + electricAddOn) +
          "EUR"
      );
    } else if (engineParam === "Diesel") {
      console.log(
        this.brand +
          " " +
          this.model +
          " have an " +
          this.engine +
          " engine. Price tag: " +
          (this.price + dieselAddOn) +
          "EUR"
      );
    } else if (engineParam === "Petrol") {
      console.log(
        this.brand +
          " " +
          this.model +
          " have an " +
          this.engine +
          " engine. Price tag: " +
          this.price +
          "EUR"
      );
    } else {
      console.log("Neturi variklio");
    }
  };
}

let car1 = new Car("VW", "Passat", "Diesel", 35000);
let car2 = new Car("Škoda", "Octavia", "Petrol", 25999);
let car3 = new Car("Nissan", "Leaf", "Electric", 45000);
let car4 = new Car("Renault", "Clio", " ", 25000);

let array = [car1, car2, car3, car4];
