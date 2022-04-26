//Helper function to remove space
function removeSpace(inputVar) {
  let stringNoSpace = '';
  let stringArr = inputVar.split(' ');

  for (let i = 0; i < stringArr.length; i++) {
    if (i !== 0) {
      stringArr[i] = stringArr[i].charAt(0) + stringArr[i].slice(1);
    }
    stringNoSpace += stringArr[i]
  }

  return stringNoSpace;
}

//Helper function to find string length
function findLength(newString) {
  let count = 0;

  for (let i = 0; i < newString.length; i++) {
    count++;
  }

  return count;
}
// main fucnction  
const squareCode = function (message) {
  let newString = removeSpace(message)
  let stringLength = findLength(newString);
  let stringRoot = Math.ceil(Math.sqrt(stringLength));

  let square = '';

  for (let j = 0; j < stringRoot; j++) {
    for (let i = 0 + j; i < newString.length; i += stringRoot) {
      square += newString[i];
    }

    if (j !== stringRoot) {
      square += ' ';
    }
  }

  return square;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));
