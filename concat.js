function concat(a, b) {
  let newArray = [];

  for (let i = 0; i < a.length; i++) {
    //console.log(a[i]);
    const elemA = a[i];
    //console.log("A" + elemA);
    newArray.push(elemA);
  }


  for (let j = 0; j < b.length; j++) {
    const elemB = b[j];
    newArray.push(elemB);
  }


  return newArray;
}

//concat([1, 2, 3], [4, 5, 6]);

console.log(concat([1, 2, 3], [4, 5, 6]), "=?", [1, 2, 3, 4, 5, 6]);
console.log(concat([0, 3, 1], [9, 7, 2]), "=?", [0, 3, 1, 9, 7, 2]);
console.log(concat([], [9, 7, 2]), "=?", [9, 7, 2]);
console.log(concat([5, 10], []), "=?", [5, 10]);
