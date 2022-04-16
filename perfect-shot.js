const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north']


const finalPosition = function (moves) {
  let x = 0;
  let y = 0;

  for (let i = 0; i < moves.length; i++) {
    switch (moves[i]) {
      case 'north':
        y = y + 1;
        break;
      case 'east':
        x = x + 1;
        break;
      case 'south':
        y = y - 1;
        break;
      case 'west':
        x = x - 1;
        break;
    }
  }

  let position = [x, y];
  //console.log(position);

  return position;
}

console.log()
finalPosition(moves);
