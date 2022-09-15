let action = "";
let number1String = "";
let number2String = "";
let isFirstNumber = true;
let operator = "";

function enter(value) {
  action += value;
  if (typeof numer == "string") {
    if (value == "=") {
      console.log(number1String);
      console.log(number2String);
      console.log(operator);
      if (operator == "+") {
    }

    if (isFirstNumber) {
      number1String += value;
    } else {
      number2String += value;
    }
  }
  document.querySelector("#result").innerHTML = action;
}

// let a = {
//   name: `test`,
//   price: 5,
//   tax: 2,
//   totalPrice:
// };

// function foo(name) {
//   console.log(`hello ${name}`);
// }

// const bar = (name) => {
//   console.log(`Hello ${name}`);
// };

// let moo = (name) => {
//   console.log(`Moo ${name}`);
// };

// foo(`one`);
// bar(`two`);
// moo(`three`);
