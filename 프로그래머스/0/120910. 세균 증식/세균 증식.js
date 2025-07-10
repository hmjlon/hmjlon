function solution(n, t) {
  // 1시간 -> n * 2
 //t 시간 후 => (n*2) * (n*2)
 //제곱 .. 
 //  n * 2
    
    
//     for (let i = 0; i < t ; i ++ ) {
//        n = n * 2 ;
//     }
//     return n;
        
        return n * (2 ** t ) ;
}