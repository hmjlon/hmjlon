function solution(n, k) {
    //10인분 -> 음료1개 , 30 인분 -> 음료수 3개 => 30/10=3
    //양꼬치 -> 12000원 , 음료 -> 2000원
    //양꼬치 n인분 , 음료수 k개 
    //얼마 ? 
const free = Math.floor (n/10)
const freeD = k - free ;
    return (12000 * n) + (2000* freeD) ;
}