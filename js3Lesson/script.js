for (i = 10; i > 0; i--) {
  console.log(i);
}

let i = 10;
while (i > 0) {
  console.log(i);
  i--;
}

// var name = `Grigorijus`;
// var count = 10;

// for (let i = 0; i < count; i++) {
//   console.log(i, name);
// }

// Switch 3 užduotis

// let weekDay = 6;
// switch (weekDay) {
//   case 0:
//     weekDay = "Sekmadienis";
//     break;
//   case 1:
//     weekDay = "Pirmadienis";
//     break;
//   case 2:
//     weekDay = "Antradienis";
//     break;
//   case 3:
//     weekDay = "Trečiadienis";
//     break;
//   case 4:
//     weekDay = "Ketvirtadienis";
//     break;
//   case 5:
//     weekDay = "Penktadienis";
//     break;
//   case 6:
//     weekDay = "Šeštadienis";
//     break;
// }
// console.log(weekDay);

// switch 2 užduotis

// var userInput = "Obuolys";

// switch (userInput) {
//   case "Obuolys":
//   case "Bananas":
//   case "Ananasas":
//   case "Kriaušė":
//   case "Vyšnia":
//     console.log("Vaisius");
//     break;
//   case "Agurkas":
//   case "Pomidoras":
//   case "Kopūstas":
//   case "Agurotis":
//   case "Pankolis":
//     console.log("Darzove");
//     break;
//   default:
//     console.log("Nei tas, nei");
// }

// swith 1 užduotis

// var mark = "honda";

// switch (mark) {
//   case "VW":
//   case "Audi":
//   case "skoda":
//   case "Bentley":
//   case "Bugatti":
//   case "Lamborgini":
//     console.log("VW Group");
//     break;
//   case "BMW":
//   case "Mini":
//   case "Rolls Royce":
//     console.log("BMW Group");
//     break;
//   default:
//     console.log("Unknown type");
// }

// 4 užduotis

// var phone = `iPhone`;

// var isIphoneUser = `phone`;

// console.log(phone === isIphoneUser);

// const phone = "iPhone";
// const isIphoneUser = phone === "iPhone";

// 3užduotis

// var legalAge = 20;

// var clientAge = 119;

// clientAge < 0 || clientAge > 120
//   ? alert("Invalid client age")
//   : clientAge < legalAge
//   ? alert("Can`t drive")
//   : alert("can drive");

// 2 užduotis
// var legalAge = 20;

// var clientAge = 19;

// clientAge < legalAge ? alert("Can`t drive") : alert("can drive");

// 1 užduotis
// let vardas = `Grigas`;

// console.log(vardas.length < 5 ? alert(`Short name`) : alert(`Long name`));

// function getNumber() {
//   return `testas ${(6 + 12).toString()}
//     keksas
//     <>
//     `;
// }

// // let a = 1234;
// // console.log(a.toFixed(2));

// console.log(typeof `1234`); //string
// console.log(typeof 1234); //number
// console.log(typeof +"1234"); // + padaro iš string į number
// console.log(1 + +"1234" == 1235); // return true

// console.log(parseFloat(12.3));
// // parseInt();

// let a = +prompt("Pirmas skaicius?", "");
// console.log(a);
// let b = +prompt("Antras skaicius?", "");
// console.log(b);
// alert(a + b);

// let a = Math.floor(Math.random() * 10);
// let b = Math.floor(Math.random() * 10);
// let c = Math.floor(Math.random() * 10);
// let d = Math.floor(Math.random() * 10);
// let e = Math.floor(Math.random() * 10);

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

// console.log(Math.min(a, b, c, d, e));
// console.log(Math.max(a, b, c, d, e));
// /
