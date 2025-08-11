type Points = 20 | 30 | 40 | 50; // points 로 만들어 놓으면 뭐 추가할 때 간단함 . 없으면 하나하나 다 바꿔야되니까 (유지보수 할때 좋)
let score: Points = 40;
let score2: 20 | 30 | 40 | 50 = 40;
let score3: Points = 40;
let score4: Points = 40;
let score5: Points = 40;

console.log(score);

//@ts-ignore
//@ts-nocheck
//prettier-ignore

type ComplexPerson = {
  name: string,
  age: number,
  birthday: Date,
  married: boolean,
  address: string,
};

type Type1 = number;
type Type2 = string;
type Type3 = boolean;
type Type4 = {};
type Type5 = { name: string } & { age: number };
type Type6 = { name: string } | { age: number };
type Type7 = Type5 & Type6;
