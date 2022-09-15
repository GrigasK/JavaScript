// document.querySelector("form").addEventListener("submit", checkLeapYear);

// function checkLeapYear(event) {
//   event.preventDefault();

//   const result = document.querySelector("input[name=year]").value;
//   const float = result / 4;

//   if (float % 1 === 0) {
//     document.querySelector("h1").textContent = "keliamieji metai";
//   } else {
//     document.querySelector("h1").textContent = "nekeliamieji metai";
//   }
// }

document.querySelector("form").addEventListener("submit", checkExp);

function checkExp(event) {
  event.preventDefault();
  const result = document.querySelector("input[name=stazas]").value;
  const b = 50;
  const c = 100;
  if (result <= 10) {
    document.querySelector("h1").textContent =
      "Kalėdos bus liūdnos, tik " + b + "EUR";
  }

  if (result > 10 && result <= 20) {
    document.querySelector("h1").textContent =
      "Šaunuolis, imk " +
      b +
      "EUR, ir dar papildomus " +
      b +
      "EUR, Bendrai gausi " +
      c +
      "EUR";
  }
  if (result > 20) {
    document.querySelector("h1").textContent =
      "Kalėdos bus sočios, tau skirta " +
      c +
      "EUR, ir dar papildomai " +
      c +
      "EUR, bendrai " +
      (c + c) +
      "EUR";
  }
}

// function binarySearch(array, target) {
//   let start = 0;

//   let end = array.length - 1;

//   while (start <= end) {
//     let mid = Math.floor((start + end) / 2);

//     if (array[mid] === target) {
//       return console.log("yra " + mid + " skaiciuojama nuo 0");
//     } else if (array[mid] < target) {
//       start = mid + 1;
//     } else {
//       end = mid - 1;
//     }
//   }

//   return console.log("Nope");
// }

// var items = [0, 5, 1, 2, 3, 6, 7, 8, 10, 13, 15];
// items.sort(function (a, b) {
//   return a - b;
// });
// console.log(items);
