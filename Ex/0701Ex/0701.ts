let username = "Tom";
console.log(username.toUpperCase());

//1-c, 2-b , 3- b , 4- a,5-b

let anything: any = 5;
anything = "hello";
anything = true;

let value: unknown = "hi";

if (typeof value === "string") {
  console.log(value.toUpperCase());
}
