function howManyHundreds(num) {
  let rem = num % 100;

  if(num % 100 !== 0){
    num = num - rem;
  }

  let count = num/100;

  return Math.floor(count);
}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);
