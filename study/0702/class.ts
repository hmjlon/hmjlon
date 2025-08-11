class Person2 {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  // constructor(public name: string, private age: number) {} //축약하면 이렇게 쓸 수 있음

  introduce(): string {
    return `Hi, I'm ${this.name}`;
  }
}

// 이게 상속이다 ~

class Car implements Vehicle {
  carModel: string;
  owner: string;
  carWeight: number;
  buyYear: number;
  isSunk: boolean;
  distance: number;

  drive() {
    console.log("Go");
  }
  alarm() {
    console.log("Beep Beep");
  }
  back() {
    console.log("Back");
  }
  wipe() {
    console.log("wipe");
  }
  break() {
    console.log("Break");
  }
  accelerate() {
    console.log("Accelerate");
  }
  trunck() {
    console.log("trunck");
  }
}

class DumpTruck extends Car {
  storage: number;
  operate() {
    console.log("Operate");
  }
  spread() {
    console.log("Spread");
  }
}

class Bus extends Car {
  passenger: number;
  busNumber: number;

  constructor(passenger: number, busNumber: number) {
    super();
    console.log("Bus constructor");
  }
  openDoor() {
    console.log("Open Door");
  }

  trunck() {
    console.log("");
  }
}

interface Vehicle {
  break(): void;
  accelerate(): void;
  trunck(): void;
}

class Student {
  name: string;
  no: number;
}

const stu = new Student();

stu.name = "나이";
stu.no = 5;

console.log(stu);

let car = new Car();
