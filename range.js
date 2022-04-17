function range(start, end, step) {
  let rangeArray = [];

  if (start === undefined || end === undefined || step === undefined || step < 0 ) {
    return [];
  } else {
    for (let i = start; i <= end; i += step) {
      rangeArray.push(i);
    }

    return rangeArray;
  }
}


console.log(range(0,10,-5));
