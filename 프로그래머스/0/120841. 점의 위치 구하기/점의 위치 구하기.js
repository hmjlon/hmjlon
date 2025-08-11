function solution(dot) {
//모두 양수 1
//x음수  y양수 2 
//모두 음수 3
//x양수 y음수 4
    
    const [x,y] = dot;
    
    if (x>0 && y>0){ 
     return 1;
    } else if(x<0 && y>0){
     return 2;
    } else if( x<0 && y<0){
     return 3;   
    } else if( x>0 && y<0){
     return 4;
    }
}