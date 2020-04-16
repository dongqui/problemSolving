const sortedDigits = n => n.toString().split('').sort((a, b) => b - a).join('');

function nextBigger(n){
  
  let str = sortedDigits(n);
  for(let i = n + 1; i <= Number(str); i++){
    if(sortedDigits(i) === str) return i;
  }
  
  return -1;
}

console.log(nextBigger(2017))

// Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

// 12 ==> 21
// 513 ==> 531
// 2017 ==> 2071
// If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift):

// 9 ==> -1
// 111 ==> -1
// 531 ==> -1