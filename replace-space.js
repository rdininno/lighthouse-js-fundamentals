const urlEncode = function (text) {
  newText = text.trim();
  let urlEncoded = "";

  for (let i = 0; i < newText.length; i++) {
    if (newText[i] === " ") {
      urlEncoded += '%20';
    } else {
      urlEncoded += newText[i];
    }
  }

  return urlEncoded;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
