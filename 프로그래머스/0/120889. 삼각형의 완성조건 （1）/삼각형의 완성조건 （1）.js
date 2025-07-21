function solution(sides) {
  //sides 에서 제일 큰 수  < 나머지 변1 + 나머지 변2 
  
    const max = Math.max(...sides);
    const sum = sides.reduce((a, b) => a + b, 0)
    const rest = sum - max; 
    
   if ( max <  rest) {
  return 1;
   } else {
  return 2;
   } 
    
}