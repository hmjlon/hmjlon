function solution(n) {
 const arr = Array.from({ length: n},(_, i)=> i + 1);
    return arr.filter(x => x % 2 === 1);
}