function solution(n) {
   
let sum = 0;
    
    if (n % 2 === 1) {
        for (let i = 1; i <= n; i++) {
            if (i % 2 === 1) sum += i ;
        }
    } else {
        for (let i =1 ; i <= n; i++) {
            if (i % 2 === 0 ) sum += i * i ;
        }
    }
    
    return sum;
}