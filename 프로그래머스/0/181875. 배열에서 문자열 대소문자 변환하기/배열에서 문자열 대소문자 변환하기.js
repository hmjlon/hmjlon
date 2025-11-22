function solution(strArr) {
    
   return strArr.map((item, idx) =>  idx%2===0 ? item.toLowerCase() : item.toUpperCase() )
  
  
}