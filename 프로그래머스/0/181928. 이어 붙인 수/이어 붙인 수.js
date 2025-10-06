function solution(num_list) {
   
   // return 숫자로(numlist.홀수. 이어붙이기) + 숫자로(numlist.짝수. 이어붙이기);
    return Number(num_list.filter(x => x%2==1).join("")) + Number(num_list.filter(x=> x%2==0).join(""));

}