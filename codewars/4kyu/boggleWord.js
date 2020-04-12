function checkWord( board, word ) {
  for(let i=0; i<board.length; i++)
    for(let j=0; j<board[i].length; j++)
      if (check(i, j, word)) return true;
  return false;
  
  function check(i, j, word) {
    if (!word) return true;
    if (i < 0 || j < 0 || i >= board.length || j >= board[i].length) return false;
    let s = board[i][j];
    if (s !== word[0]) return false;
    board[i][j] = '';
    for (let [ a, b ] of [[i+1, j],[i-1, j],[i, j+1],[i, j-1],[i+1, j+1],[i-1, j+1],[i+1, j-1],[i-1, j-1]]) {
      if (check(a, b, word.slice(1))) {
        board[i][j] = s;
        return true;
      }
    }
    board[i][j] = s;
    return false;
  }
}

// Write a function that determines whether a string is a valid guess in a Boggle board, as per the rules of Boggle. A Boggle board is a 2D array of individual characters, e.g.:

// [ ["I","L","A","W"],
//   ["B","N","G","E"],
//   ["I","U","A","O"],
//   ["A","S","R","L"] ]
// Valid guesses are strings which can be formed by connecting adjacent cells (horizontally, vertically, or diagonally) without re-using any previously used cells.

// For example, in the above board "BINGO", "LINGO", and "ILNBIA" would all be valid guesses, while "BUNGIE", "BINS", and "SINUS" would not.

// Your function should take two arguments (a 2D array and a string) and return true or false depending on whether the string is found in the array as per Boggle rules.

// Test cases will provide various array and string sizes (squared arrays up to 150x150 and strings up to 150 uppercase letters). You do not have to check whether the string is a real word or not, only if it's a valid guess.