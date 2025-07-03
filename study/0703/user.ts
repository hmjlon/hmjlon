class User {
  constructor(public name: string) {}
  //원래 방식 깃에서 붙여넣기 name: 어쩌고

  greet() {
    console.log(`안녕하세요 제 이름은 ${this.name}입니다.`);
  }
}
let user = new User("홍길동");
user.greet();
