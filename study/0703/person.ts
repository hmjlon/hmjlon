class Person1 {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`안녕하세요, 저는 ${this.age}살의 ${this.name}입니다`);
  }
}

let person = new Person1("Alice", 20);
person.introduce();
