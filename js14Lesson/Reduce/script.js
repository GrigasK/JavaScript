const people = [
  {
    name: "Petras",
    age: "18",
  },
  {
    name: "Jonas",
    age: 15,
  },
  {
    name: "Antanas",
    age: 20,
  },
  {
    name: "Urtė",
    age: 10,
  },
  {
    name: "Diana",
    age: 25,
  },
  {
    name: "Ieva",
    age: 16,
  },
];

function sortArray(array) {
  array.sort((person1, person2) => person1.age - person2.age);
  return {
    jauniausias: array[0].name,
    vyriausias: array[array.length - 1].name,
  };
}

console.log(sortArray(people));

// let cars = ["BMW", "MCB", "VWG", "Toyota", "AUDI"];

// console.log(cars.reduce((a, v) => (v.length === 3 ? a + 1 : a), 0));

// ---------------------------------------------

// // let nums = [1, 5, 2, 7, 8];

// // let print = nums.reduce((a, b) => a + b, 0);

// // console.log(print);
