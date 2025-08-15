function solution(my_string) {
    
    return my_string.split("").map(Number).filter(x=>!isNaN(x)).reduce((a,b)=> a+b,0);
}