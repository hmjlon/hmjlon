function solution(n) {
//n의 각자리 숫자의 합 
//자른다음에 더하기 

 return String(n)
    .split('')
    .reduce((sum, digit) => sum + Number(digit), 0);
}