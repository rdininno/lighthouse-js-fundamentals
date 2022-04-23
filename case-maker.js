const camelCase = function (input) {
  let newString = '';
  let stringArr = input.split(' ');

  for (let i = 0; i < stringArr.length; i++) {
    if (i !== 0) {
      stringArr[i] = stringArr[i].charAt(0).toUpperCase() + stringArr[i].slice(1);
    }
    newString += stringArr[i]
  }

  return newString;

};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
