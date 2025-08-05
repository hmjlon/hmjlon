function solution(money) {
   //가지고 있는 돈  / 5500원 = 몫 : 잔수 ,나머지 : 남은돈 
    const ame =  Math.floor(money / 5500)
   const cash = money % 5500  
    return [ame,cash];
}