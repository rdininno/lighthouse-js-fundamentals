const smartGarbage = function (trash, bins) {
  if(trash === 'waste'){
    bins.waste += 1;
  } else if (trash === 'recycling'){
    bins.recycling += 1;
  } else if (trash === 'compost'){
    bins.compost += 1;
  }
  
  return bins;
}

console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));

/*
switch(bins.trash){
  case 'waste':
    bins.trash += 1 || 1;
    break;
  case 'recycling':
    bins.recycling = bins.recycling + 1 || 1;
    console.log(REC);
    break;
  case 'compost':
    bins.trash += 1 || 1;
    break;
}
*/