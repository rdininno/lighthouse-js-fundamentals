const calculateChange = function (total, cash) {
  let changeObj = {
    twentyDollar: 0,
    tenDollar: 0,
    fiveDollar: 0,
    twoDollar: 0,
    oneDollar: 0,
    quarter: 0,
    dime: 0,
    nickel: 0,
    penny: 0
  };

  let change = cash - total;

  while (change > 0) {
    if (change >= 2000) {
      changeObj.twentyDollar += 1;
      change -= 2000;
    } else if (change >= 1000) {
      changeObj.tenDollar += 1;
      change -= 1000;
    } else if (change >= 500) {
      changeObj.fiveDollar += 1;
      change += 500;
    } else if (change >= 200) {
      changeObj.twoDollar += 1;
      change -= 200;
    } else if (change >= 100) {
      changeObj.oneDollar += 1;
      change -= 100;
    } else if (change >= 25) {
      changeObj.quarter += 1;
      change -= 25;
    } else if (change >= 10) {
      changeObj.dime += 1;
      change -= 10;
    } else if (change >= 5) {
      changeObj.nickel += 1;
      change -= 5
    } else if (change >= 1) {
      changeObj.penny += 1;
      change -= 1;
    }
  }ß

  for (key in changeObj) {
    if (changeObj[key] === 0) {
      delete changeObj[key];
    }

  }

  return changeObj;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
