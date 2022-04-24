// camel case helper function
let camel = function (inputVar) {
  let newString = '';
  let stringArr = inputVar.split(' ');

  for (let i = 0; i < stringArr.length; i++) {
    if (i !== 0) {
      stringArr[i] = stringArr[i].charAt(0).toUpperCase() + stringArr[i].slice(1);
    }
    newString += stringArr[i]
  }

  return newString;
}

// pascal case helper function
let pascal = function (inputVar) {
  let newString = '';
  let stringArr = inputVar.split(' ');

  for (let i = 0; i < stringArr.length; i++) {
    newString += stringArr[i].charAt(0).toUpperCase() + stringArr[i].slice(1);
  }

  return newString;
}

//snake case helper function
let snake = function (inputVar) {
  let newString = '';
  let stringArr = inputVar.split(' ');

  for (let i = 0; i < stringArr.length; i++) {
    newString += stringArr[i] + '_';
  }

  newString = newString.slice(0, -1);

  return newString;
}

//kebab case helper function
let kebab = function (inputVar) {
  let newString = '';
  let stringArr = inputVar.split(' ');

  for (let i = 0; i < stringArr.length; i++) {
    newString += stringArr[i] + '-';
  }

  newString = newString.slice(0, -1);

  return newString;
}

// title case helper function
let title = function (inputVar) {
  let newString = '';
  let stringArr = inputVar.split(' ');

  for (let i = 0; i < stringArr.length; i++) {
    newString += stringArr[i].charAt(0).toUpperCase() + stringArr[i].slice(1) + ' ';
  }

  newString = newString.slice(0, -1);

  return newString;
}

// vowel case helper function
let vowel = function (inputVar) {
  let newString = '';

  for (let i = 0; i < inputVar.length; i++) {
    if (inputVar[i] === 'a' || inputVar[i] === 'e' || inputVar[i] === 'i' || inputVar[i] === 'o' || inputVar[i] === 'u') {
      newString += inputVar[i].toUpperCase();
    } else {
      newString += inputVar[i];
    }
  }
  return newString;
}

//consonant helper function
let consonant = function (inputVar) {
  let newString = '';

  for (let i = 0; i < inputVar.length; i++) {
    if (inputVar[i] === 'a' || inputVar[i] === 'e' || inputVar[i] === 'i' || inputVar[i] === 'o' || inputVar[i] === 'u') {
      newString += inputVar[i];
    } else {
      newString += inputVar[i].toUpperCase();
    }
  }
  return newString;
}

//lower case helper function
let lower = function (inputVar) {
  let newString = inputVar.toLowerCase();

  return newString;
}
//upper case helper function
let upper = function (inputVar) {
  let newString = inputVar.toUpperCase();

  return newString;
}


//MAIN FUNCTION
const makeCase = function (input, style) {
  let outputString = '';
  let cases = {
    'camel': camel,
    'pascal': pascal,
    'snake': snake,
    'kebab': kebab,
    'title': title,
    'vowel': vowel,
    'consonant': consonant,
    'lower': lower,
    'upper': upper
  }

  if (Array.isArray(style)) {
    for (currentCase in cases) {
      //Priority 1
      if (style.includes('camel')) {
        outputString = camel(input);
      } else if (style.includes('pascal')) {
        outputString = pascal(input);
      } else if (style.includes('snake')) {
        outputString = snake(input);
      } else if (style.includes('kebab')) {
        outputString = kebab(input);
      } else if (style.includes('title')) {
        outputString = title(input);
      }

      //Priority 2
      if (style.includes('vowel')) {
        outputString = vowel(outputString);
      } else if (style.includes('consonant')) {
        outputString = consonant(outputString);
      }

      //Priority 3
      if (style.includes('upper')) {
        outputString = upper(outputString);
      } else if (style.includes('lower')) {
        outputString = lower(outputString);
      }
    }
  } else {
    switch (style) {
      case 'camel':
        outputString = camel(input);
        break;
      case 'pascal':
        outputString = pascal(input);
        break;
      case 'snake':
        outputString = snake(input);
        break;
      case 'kebab':
        outputString = kebab(input);
        break;
      case 'title':
        outputString = title(input);
        break;
      case 'vowel':
        outputString = vowel(input);
        break;
      case 'consonant':
        outputString = consonant(input)
        break;
    }
  }

  return outputString;
};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
console.log(makeCase("THIS IS A STRING", ["lower", "kebab"]));
console.log(makeCase("this is a string", ["vowel", "kebab"]));
console.log(makeCase("this is a string", ["consonant", "snake"]));

