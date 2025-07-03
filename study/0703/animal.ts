class Animal {
  sound() {
    console.log();
  }
}

class Dog1 extends Animal {
  sound() {
    console.log("멍멍!");
  }
}

class Cat extends Animal {
  sound() {
    console.log("야옹!");
  }
}

let dog1 = new Dog1();
dog1.sound();

let cat = new Cat();
cat.sound();
