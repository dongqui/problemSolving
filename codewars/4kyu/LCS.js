function lcs(x,y) {
  const dp = new Array(x.length + 1).fill().map(v => new Array(y.length + 1).fill(''));
  for (let i = 1; i <= x.length; i++) {
    for (let j = 1; j <= y.length; j++) {
      if (x[i - 1] === y[j - 1]) {
        dp[i][j] = dp[i- 1][j - 1] + y[j - 1];
      } else {
        dp[i][j] = dp[i - 1][j].length > dp[i][j - 1].length ? dp[ i- 1][j] : dp[i][j - 1];
      }
    }
  }

  return dp[x.length][y.length];
}

// function lcs(x, y) {
//   let t = Array(x.length).fill('')        // Represents LCS table (working row only)
//   for (let r = 0; r < y.length; r++) {    // Iterate through each 'row' of table
//     let l = ''                            // Reset the cell to the left, then set it as work through row...
//     t = t.map((a,c) => (l = x[c] == y[r] ? (t[c-1]||'') + x[c] : (l.length > a.length ? l : a)))  // R and C match ? use Above-Left + match : use longer of Left and Above
//   }
//   return t.pop() || ''  // Bottom right cell is the LCS
// }

// Longest Common Subsequence (Performance version)
// from Wikipedia: The longest common subsequence (LCS) problem is the problem of finding the longest subsequence common to all sequences in a set of sequences.
// It differs from problems of finding common substrings: unlike substrings, subsequences are not required to occupy consecutive positions within the original sequences.

// Task
// Write a function lcs that accepts two strings and returns their longest common subsequence as a string. Performance matters.

// Examples
// lcs( "abcdef", "abc" ) => "abc"
// lcs( "abcdef", "acf" ) => "acf"
// lcs( "132535365", "123456789" ) => "12356"
// lcs( "abcdefghijklmnopq", "apcdefghijklmnobq" ) => "acdefghijklmnoq"
// Testing
// This is a performance version of xDranik's kata of the same name. This kata, however, has much more full and heavy testing. Intermediate random tests have string arguments of 20 characters; hard random tests 40 characters; extreme 60 characters (characters are chosen out of 36 different ones).

// The reference algorithm solves all (12 fixed, 72 intermediate, 24 hard, 12 extreme) tests within ~150ms. The example algorithm without memoisation would take ~15000ms.

// Notes
// The subsequences of "abc" are "", "a", "b", "c", "ab", "ac", "bc", "abc". "" is a valid subsequence in this kata, and a possible return value.
// All inputs will be valid.
// Two strings may have more than one longest common subsequence. When this occurs, return any of them.

// lcs( string0, string1 ) === lcs( string1, string0 )