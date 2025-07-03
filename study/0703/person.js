var Person1 = /** @class */ (function () {
    function Person1(name, age) {
        this.name = name;
        this.age = age;
    }
    Person1.prototype.introduce = function () {
        console.log("\uC548\uB155\uD558\uC138\uC694, \uC800\uB294 ".concat(this.age, "\uC0B4\uC758 ").concat(this.name, "\uC785\uB2C8\uB2E4"));
    };
    return Person1;
}());
var person = new Person1("Alice", 20);
person.introduce();
