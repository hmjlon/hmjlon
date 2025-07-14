function solution(numbers) {
    //제일 큰 수 두개 곱하기 
//     const a = numbers ;
//   const  b = Math.max(...numbers);
//   const c = Math.max(a-b);
  
//     return b * c  ; 
// } -> 배열 빼기 숫자는 불가능 
    const max1 = Math.max(...numbers); 
    const idx = numbers.indexOf(max1); 
    numbers.splice(idx,1);
    const max2 = Math.max(...numbers);
    return max1 * max2 ;
}