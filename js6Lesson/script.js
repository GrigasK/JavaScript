function getGrands(number) {
  let result = "";
  for (let i = 0; i < number; i++) {
    result += " grand";
  }
  return result;
}
function getGeneration(number, gender) {
  const codeToWord = {
    f: "daughter",
    m: "son",
  };
  return getGrands(number) + codeToWord[gender];
}
console.log(getGeneration(5, "m"));

// let i = 0;
// document.querySelector("button").addEventListener("click", getName);

// function getName() {
//   i++;

//   document.querySelector("h1").innerHTML = i;
// }

// function generateRandomNumber() {
//   return Math.floor(Math.random() * 10 + 1);
// }

// function squareNumber(number) {
//   return Math.pow(number, 2);
// }

// squareNum(generateRandomNumber());

// function removeletters(string, num) {
//   return string.slice(04 string.length - num);
// }

// console.log(removeletters("Hello World!", 3));

// function formText(string, num) {
//   let result = "";
//   for (let index = 0; index < string.length - num; index++) {
//     result += string[index];
//   }
//   return result;
// }

// console.log(formText("Hello World!", 3));

// function getFirstLetter(string) {
//   let text = string;
//   alert(text[0].toUpperCase());
// }
// getFirstLetter("bananas");

// function calculate(num1, num2, action) {
//   switch (action) {
//     case "composition":
//       console.log(num1 + num2);
//       break;
//     case "subtraction":
//       console.log(num1 - num2);
//       break;
//     case "multiplication":
//       console.log(num1 * num2);
//       break;
//     case "division":
//       console.log(num1 / num2);
//       break;
//   }
// }
// calculate(10, 9, "multiplication");

// function min(a, b) {
//   if (a < b) return a;
//   return b;
// }

// console.log(min(6, 6));

// function checkAge(age) {
//   return age >= 18 ? alert("puiku") : confirm("Did your parents allowed?");
// }

// checkAge("88");

// function checkAge(age) {
//   if (age >= 18) {
//     return true;
//   } else {
//     return confirm("Ar turi tevu leidima");
//   }

//   let age = prompt("kiek tau metu?", 18);

//   if (checkAge(age)) {
//     alert("gali uzeiti");
//   } else {
//     alert("Negalima");
//   }
// }

// function showName(from, text = "kepk keksa") {
//   console.log(from + ": " + text);
// }
// showName("Grigas");
