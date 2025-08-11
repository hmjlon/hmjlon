// //1. 타입에 맞는 값만 허용
// function printAge(age: number) {
//   if (typeof age !== "number") {
//     throw new Error("숫자만 허용");
//   }
//   console.log(`${age}살`);
// }

// printAge(20);

// //2.
// type UserInput = string | number;
// function isString(input: UserInput): input is string {
//   return typeof input === "string";
// }

// //3. 반환타입읭 유효성 검사
// function getStatus(code: number): "success" | "error" {
//   if (code == 200) return "success";
//   return "error";
// }

// //4.매개변수가 string 일떄만 길이 출력하는 함수
// function showLength(input: string | number) {
//   if (typeof input === "string") {
//     console.log(`길이" ${input.length}`);
//   } else {
//     console.log("문자열이 아닙니당");
//   }
// }

let name1: string = "Alice";

let age: number = 21;
let isStudent: boolean = true;

function add(a: number, b: number): number {
  return a + b;
}

let scores: number[] = [80, 90, 100];

let person1: { name: string; age: number } = {
  name: "tom",
  age: 20,
};

let id: number | string = "user123";
