const sumLargestNumbers = function (array) {
  let highest = 0;
  let second = 0;

  array.forEach(function (i, j) {
    if (array[j] > highest) {
      second = highest;
      highest = array[j];
    }

    //console.log(highest); //console log to test value at highest
    //console.log(second);  //console log to test value at second
  });

  let sumLargest = highest + second;

  return sumLargest;
}

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
