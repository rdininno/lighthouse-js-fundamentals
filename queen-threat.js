const generateBoard = function (qOne, qTwo) {
  let board = [];
  let rows = [];

  for (let i = 0; i < 8; i++) {
    rows = [];
    for (let j = 0; j < 8; j++) {
      if ((qOne[0] === i && qOne[1] === j) || (qTwo[0] === i && qTwo[1] === j)) {
        rows.push(1);
      } else {
        rows.push(0);
      }
    }
    board.push(rows);
  }

  return board;
}

const queenThreat = function (board) {
  let threat = false;
  let queenLocations = [];

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 1) {
        queenLocations.push([i, j]);
      }
    }
  }

  if ((queenLocations[0][0] === queenLocations[1][0]) || (queenLocations[0][1] === queenLocations[1][1]) ||
    Math.abs(queenLocations[0][0]-- - queenLocations[1][0]) === Math.abs(queenLocations[0][1]-- - queenLocations[1][1])) {
    threat = true;
  }

  return threat;
}


let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));



