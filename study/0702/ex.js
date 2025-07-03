// let name: string = "Tom";
// let age: number = 20;
// let isStudent: boolean = true;
// let score: number[] = [100, 90, 80];
// let user: { name: string; age: number } = {
//   name: "ann",
//   age: 25,
// };
// let id: string | number = "user01";
// console.log(name, age, isStudent, score, user, id);
// function add(a: number, b: number): number {
//   return a + b;
// }
// console.log(add(5, 3));
// function greet(name: string): void { //void: 이 함숙가 아무것도 return 하지 않는다 = 반환값이 없다
//   console.log("Hello," + name);
// }
// greet("Alice");
// type Status = "success" | "error";
// function getStatus(code: number): Status {
//   if (code === 200) return "success";
//   return "error";
// }
// console.log(getStatus(200));
// console.log(getStatus(404));
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        console.log("Hi ! I'm ".concat(this.name));
    };
    return Person;
}());
var p = new Person("Alice", 30);
p.greet();
