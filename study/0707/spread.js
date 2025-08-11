//스프레드 연산자 ,구조분해 (리액트에서 많이 씀)

const user = { id: 1, name: "kim", age: 20, address: "seoul" };
const updated = { id: 2, ...user, name: "Lee", age: 21 }; //...하면 그대로 가져옴 , ...user가 뒤에있으면 id:2 이거 덮어씌어져서 안먹힘

console.log(updated);

const userArr = [1, 2, 3, 4, 5];
const updatedArr = [1, 2, ...userArr, 6, 7];

console.log(updatedArr);

//구조분해
const userSplit = { id: 1, name: "kim", age: 20, address: "Seoul" };
// const { id, name, age, address } = userSplit;

// console.log(id, name, age, address);

const { id, name, ...rest } = userSplit; //=> 리액트에서 속성 넘길 떄 이거 자주 씀 -> 이해하고있어야함 !
console.log(id, name, rest);

//1. 구조분해 할당을 이용해서 다음 객체에서 'title'과 'author'를 추출해보세요

const book = { title: "G", author: "F" };
const { title: title2, author } = book;
console.log(title2);
console.log(author);

//연습문제 1 : Map 과 Set 활용하기
// 문제 : 1~5 숫자가 포함된 배열 [1,2,2,3,4,5,5]에서 중복을 제거한 후 , 모든 숫자에 5를 더한 값을 순서대로 출력하세요//
//그리고 total 이라는 키에 중복을 제거한 숫자들의 합을 저장한 Map을 만들어 출력하세요
//답 -> 깃허브에 있음

// const numbers = [1,2,2,3,4,5,5] ;
// const num = set

//연습문제 2 : 다음 배열에서 짝수만 골라 ... -> filter  // 깃에 답
// const numbers = [3,4,7,8,10,13];
// const  evens = numbers.filter(num => num % 2 === 0);
// const squared = evens.map ((num => num * num))
// const sum = squared.reduce()

//연습문제 3 : 비동기 함수 실습
async function fetchDate() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("data Ok!");
    }, 2000);
  });
}
async function loadData() {
  const data = await fetchDate();
  console.log(data);
}
