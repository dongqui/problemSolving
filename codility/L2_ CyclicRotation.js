function solution(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    while (A.length && K > 0) {
        A.unshift(A.pop());
        K--;
    }
    return A;
}