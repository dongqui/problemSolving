// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    const open = '{[(';
    const stack = [];
    for (const c of S) {
        if (open.indexOf(c) >= 0) {
            stack.push(c)
            continue;
        }
        
        const top = stack.pop();
        if ((c === ')' && top !== '(')
            || (c === '}' && top !== '{')
            || (c === ']' && top !== '[')) {
            return 0;
        } 
    }
    if (stack.length) return 0;
    return 1;
}
