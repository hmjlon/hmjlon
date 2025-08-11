function solution(array, height) {
    //반친구들 array 머쓱이 키 height  
  //height 보다 큰 수 있으면 개수 
  //height 보다 큰 수 없으면 0 
     //array 중에 height 보다 큰 숫자 개수
   // arr.filter((x)=>x > 기준값).length
   
    return  array.filter((x)=>x > height).length ;
}