const cars = ["BMW", "MCB2", "VWG", "Toyota", "AUDI"];

let carNum = cars.reduce((total, currentItem) => {
  if (currentItem.length <= 3) {
    return total + 1;
  }
  return total;
}, 0);

console.log(carNum);

// const arrayCities = [
//   "Lentvaris",
//   "Vilnius",
//   "Marijampolė",
//   "Šiauliai",
//   "Kupiškis",
//   "Klaipėda",
// ];

// console.log(
//   arrayCities.every(
//     (value) => value.charAt(0) === value.charAt(0).toUpperCase()
//   )
// );

// -------------------------------------------------------

// const arrayCities = [
//   "lentvaris",
//   "vilnius",
//   "marijampolė",
//   "šiauliai",
//   "kupiškis",
//   "klaipėda",
// ];

// console.log(
//   arrayCities.some((value) => value.charAt(0) === value.charAt(0).toLowerCase())
// );

// -------------------------------------------------------
// const arrayCities = [
//   "Lentvaris",
//   "Vilnius",
//   "Marijampolė",
//   "Šiauliai",
//   "Kupiškis",
//   "Klaipėda",
// ];

// console.log(arrayCities.find((value) => value.charAt(0) === "K"));
// ---------------------------------------------------

// const arrayAge = [5, 8, 36, 73, 50, 35, 30, 4, 6, 17, 18];

// console.log(arrayAge.filter((value) => value >= 18));

// ----------------------------------------------------------------
// const array = ["peTras", "Jonas", "aNTanaS"];

// const newArray = array.map(
//   (value) => value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
// );

// console.log(newArray);

// 1 ---------------------------------------------

// const cars = ["BMW", "VW", "Audi"];

// cars.forEach((value, index) => console.log(index + ": " + value));
