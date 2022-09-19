const array = [1, 1, 1, 3, 3];

function sortArray() {
  array.sort((a, b) => a - b);
  const newArray = [];
  for (let i = 0; i < array.length; i++)
    if (array[i] != array[i + 1]) {
      newArray.push(array[i]);
    }
  console.log(newArray);
}

sortArray(array);
