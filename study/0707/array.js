//고차배열 메서드
const nums = [1, 2, 3, 4, 5];

//map
const squares = nums.map((n) => n ** 2); //화살표함수 기본꼴 const squares = nums.map(()=>{}) ( n ** 2 : 제곱구하는 것 )

for (const val of squares) {
  console.log(`val ============> ${val}`);
}

for (let i = 0; i < nums.length; i++) {
  console.log(`nums[${i}] => ${nums[i]}, squares[${i}] => ${squares[i]}`); //이것도 디버깅인듯
}

//filter
const evens = nums.filter((n) => n % 2 === 0);
for (const val of evens) {
  console.log(`val => ${val}`);
} // 저 중에 짝수만 출력됐음

//reduce
const sum = nums.reduce((acc, cur) => acc + cur, 0);
console.log(`sum => ${sum}`); //1+2+3+4+5
//디버깅 하는 거 보여주심acc => acc 어쩌고 이거  // 콘솔에서 디버깅이 바로된대 // 축약한거 뭐라고 하심

//find
const found = nums.find((n) => n > 2);
console.log(`found => ${found}`); // 조건 충족하는 것 중에 제일 앞에 거 나온다는 거 같음

//some
const hasNegative = nums.some((n) => n < 2);
console.log(hasNegative);

//every
//const allPositive = nums.every((n) => n > 0);
const allPositive = nums.every((n) => n > 1);
console.log(allPositive);

//flat
const nested = [1, 2, 3];
const duplicated = nested.flatMap((n) => [n, n]);

for (let nest of duplicated) {
  //console.log(`nest => ${nest}`);
  console.log(duplicated);
}
