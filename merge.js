function merge(arr1, arr2) {
  let newArray = [];

  for (let i = 0; i < arr1.length; i++) {
    newArray.push(arr1[i]);
  }

  for (let j = 0; j < arr2.length; j++) {
    newArray.push(arr2[j]);
  }

  newArray.sort((a, b) => a - b);

  return newArray;
}




console.log(merge([4, 5, 6], [1, 2, 3, 4]), "=?", [1, 2, 3, 4, 4, 5, 6]);
console.log(merge([4], [2, 5, 8]), "=?", [2, 4, 5, 8]);
console.log(merge([1, 2, 6], []), "=?", [1, 2, 6]);
