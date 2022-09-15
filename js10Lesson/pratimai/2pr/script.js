document.querySelector("form").addEventListener("submit", createObject);

function createObject(event) {
  event.preventDefault();
  fname = document.getElementById("name").value;
  lname = document.getElementById("surname").value;

  let person = new Object();
  person.name = fname;
  person.surname = lname;
  console.log(person.name, person.name);
}

// let car = new Object();
// car.doors = 5;
// car.color = "grey";
// car.brand = "VW";

// console.log(car);

// let car = {
//   doors: 5,
//   color: "grey",
//   brand: "VW",
// };

// console.log(car);

// class Movie {
//   constructor(titleProp, yearProp, directorProp, budgetProp, incomeProp) {
//     this.title = titleProp;
//     this.year = yearProp;
//     this.director = directorProp;
//     this.budget = budgetProp;
//     this.income = incomeProp;
//   }
//   getIntroduction() {
//     console.log(
//       "Title: " +
//         this.title +
//         ", Director: " +
//         this.director +
//         ", year: " +
//         this.year
//     );
//   }

//   getProfit() {
//     const profit = this.income - this.budget;
//     console.log("Profit: " + profit);
//   }
// }

// const terminatorius = new Movie(
//   "Terminatorius",
//   1985,
//   "Cameronas",
//   100000000,
//   500000
// );

// const terminatorius2 = new Movie(
//   "Terminatorius2",
//   1965,
//   "Aš",
//   10000000,
//   50000099999
// );

// // function book(nameProp, authorProp, yearProp) {
// //   this.name = nameProp;
// //   this.author = authorProp;
// //   this.year = yearProp;
// //   this.bookTitleAndAuthor = function () {
// //     console.log("name: " + this.name + ", author: " + this.author);
// //   };

// //   this.bookYEar = function () {
// //     console.log("book year: " + this.year);
// //   };
// // }

// // const knyga = new ook("Testas", "Grigas", "2022");
// // console.log(knyga.bookTitleAndAuthor);
