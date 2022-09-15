// Sukurkite funkciją, kuri kaip parametrą gaus array su skaičiais. Funkcija turės grąžinti mažiausią trūkstamą skaičių iš array.
// Pvz. Paduodu: [1, 2, 4, 5]; Grąžina: 3

// const numb = [1, 2, 4, 5];

// function findNumber() {
//   let maziausiasSkaicius =
//     numb.find((value, index) => value + 1 !== numb[index + 1]) + 1;
//   return maziausiasSkaicius;
// }

// console.log(findNumber());

// Sukurkite funkciją, kuri paims skaičių parametrą ir sugeneruos array su tiek random skaičių (nuo 1 - 10)), kiek parametre nurodyta.
// T.y. "3" => [1, 6, 3].

// function getRandom(num) {
//   let array = [];
//   for (var i = 0; i < num; i++) {
//     array.push(Math.ceil(Math.random() * 10));
//   }
//   return array;
// }

// console.log(getRandom(100));

// Sukurkite funkciją, kuri kaip parametrą gaus array su skaičiais. Funkcija turės grąžinti mažiausią trūkstamą skaičių iš array.
// Pvz. Paduodu: [1, 2, 4, 5]; Grąžina: 3

// 10. Parašykite funkciją, kuri paimtų array (susideda iš objektų su vardu ir amžium) bei grąžina array išrykiuotą pagal amžių ir jei amžius sutampa – vardus a>z tvarka.
// Pvz.: fn([{name: „Alfredas“, age: 25}, {name: „Jonas“, age: 25}, {name: „Kasparas“, age: 20}]) -> [{name: „Kasparas“, age: 20}, {name: „Alfredas“, age: 25}, {name: „Jonas“, age: 25}]

// const people = [
//   { name: "Alfredas", age: 25 },
//   { name: "Jona", age: 25 },
//   { name: "Kasparas", age: 20 },
//   { name: "Kasparas", age: 22 },
//   { name: "Alfredas", age: 25 },
//   { name: "Jonas", age: 25 },
// ];

// const sortedArray = people
//   .sort((a, b) => (a.name > b.name ? 1 : -1))
//   .sort((a, b) => a.age - b.age);

// console.log(sortedArray);

// 6. Sukurkite funkciją, kuri paims stringą ir grąžins jį apverstą mažosiomis.
// T.y. "Petras" -> "sartep"

// const fn = (text) => {
//   console.log(text.split("").reverse().join("").toLowerCase());
// };

// fn("Grigorijus");

// 4.  Parašykite arrow funkciją (viena eilutę), kuri paėmus du skaičius (aukštį ir plotį) grąžintų trikampio plotą ((aukštis * plotis) / 2)
// Pvz: fn(10, 10) -> 50

// funkcija = (num1, num2) => {
//   console.log((num1 * num2) / 2);
// };

// 2. Parašykite funkciją, kuri priims varotojų amžių ir grąžins kiek dienų jis jau nugyveno (skaičių, metų tikslumu, neskaičiuojant keliamųjų metų - t.y. visada 365 dienos).
// Pvz: fn(20) => 7300.

// function calcDays(age) {
//   console.log(age * 365);
// }
