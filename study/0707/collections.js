const set = new Set([1, 2, 2, 2, 3, 4]); // 생성자 호출하는 것 , 데이터 미리 세팅 하려고
set.add(5);
set.add(5); //set은 중복 제거라서 5몇개 넣어도 콘솔 찍어보면 하나만 들어감
set.delete(2);
console.log(set);

//-----------------------------------------------------------------------------

const map = new Map(); // map 은 실무에서 엄청 많이 씀
map.set("name", "Lee"); // name 이라는 이름 (key)에 "Lee"라는 값을 저장
map.set("age", 20); // age 이라는 이름 (key)에 20 이라는 값을 저장
console.log(map.get("name")); //저장해둔 거 get으로 찾는 것
console.log(map.get("age"));
console.log(map.size);
map.delete("age");
console.log(map);

for (const val of set) {
  console.log(val);
}

for (const [key, val] of map) {
  console.log(key, val);
}
