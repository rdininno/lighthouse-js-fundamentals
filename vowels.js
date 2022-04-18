const numberOfVowels = function (data) {
  let count = 0;
  let i = 0;

  while (i < data.length) {
    if (data[i] === 'a' || data[i] === 'e' || data[i] === 'i' || data[i] === 'o' || data[i] === 'u') {
      count++;
    }

    i++;
  }

  return count;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
