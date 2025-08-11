function solution(slice, n) {
    //2조각 ~ 10조각 원하는 수 대로 잘라줌 
    //피자 조각수 slice 
   // 사람 수 n 
// n/slice < slice => 피자판수+1
   
    return Math.ceil(n / slice);
}