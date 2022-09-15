const age = 10;
if (age > 100 || age < 0) {
  console.log("Invalid age");
} else if (age > 1 && age < 18) {
  console.log("Child");
} else if (age > 19 && age < 99) {
  console.log("Adult");
}
