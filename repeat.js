const repeatNumbers = function (data) {
  let count = 0;
  let output = '';

  for (let i = 0; i < data.length; i++) {
    for (let start = 0; start < data[i][1]; start++) {
      output = output + data[i][0].toString();
    }

    if (data.length > 1 && i !== data.length - 1) {
      output = output + ', ';
    }
  }

  return output;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
