function solution(n) {
// 7조각 / n명  -> 몇 판 시켜야 되냥 
    //나머지 없으면 그 판 , 나머지 있으면 +1판 
return Math.ceil(n / 7);
}