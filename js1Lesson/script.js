var isBlack = false;

function paint1() {
  isBlack = !isBlack;
  document.querySelector(".container1").style.backgroundColor = "black";
  if (isBlack) {
    spalva = "black";
  } else {
    document.querySelector(".container1").style.backgroundColor = "red";
  }
}

function paint2() {
  document.querySelector(".container2").style.backgroundColor = "red";

  var color = 'red'

// function SayHello() {
//   if (color == 'red') {
//     document.querySelector('#my').style.backgroundColor = 'red'
//     color = 'black'
//   } else {
//     document.querySelector('#my').style.backgroundColor = 'black'
//     color = 'red'
//   }
// }
}
function paint3() {
  document.querySelector(".container3").style.backgroundColor = "red";
}

//   var a = 1000;
//   if (a / 10 <= 10) {
//     console.log("tiesa");
//   } else {
//     console.log("melas");
//   }
// for (var i = 0; i < 100; i++) {
//     console.log(i % 5);
//   }

// for (var i = 1; i <= 100; i++) {
//     if (i % 2 == 1) {
//       console.log(i);
//     }
//   }

// == true/false
// // var i = 2;
// // console.log(i == 1);

// random spalvos
// var randomColor = Math.floor(Math.random() * 16777215).toString(16);
//   console.log(randomColor);
//   document.querySelector(
//     ".container"
//   ).style.backgroundColor = `#${randomColor}`;
