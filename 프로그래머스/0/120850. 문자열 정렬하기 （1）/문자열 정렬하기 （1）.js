function solution(my_string) {
   
    return my_string.split("").filter(x => !isNaN(x)).map(Number).sort((a,b)=>a-b);
}