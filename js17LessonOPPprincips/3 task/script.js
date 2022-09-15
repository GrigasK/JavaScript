const array = [1, 3, 3, 5, 5, 5, 10, 10, 11, 11, 11, 12, 12, 12];

function sortArray() {
  const newArray = [];
  for (let i = 0; i < array.length; i++)
    if (array[i] != array[i + 1]) {
      newArray.push(array[i]);
    }
  console.log(newArray);
}

sortArray(array);
