function solution(numbers) {
  //부등호를 빼고 숫자만 찾기.  순서대로 정렬한 뒤 -> 오름차순, 인덱스 . 마지막 & 마지막에서 하나 앞 둘이 곱하기 
    
   numbers.sort((a,b) => a-b) 
    
    const case1 = numbers[numbers.length-1]*numbers[numbers.length-2]
    const case2 = numbers[0]*numbers[1]
     return  Math.max(case1,case2);
}
