// function fetchData() {
//   return new Promise((resolve, reject) => {
//     //resolve : 성공하는 case, reject : 실패하는 case
//     setTimeout(() => {
//       resolve("data received");
//     }, 3000);
//   });
// }

//fetchData().then((data) => console.log(data));
//화살표 함수 한줄짜리는 중괄호 지워도 가능
//원랜 :
//콘솔에 3초 뒤에 찍힘 ㅋㅋ
// console.log(fetchData()); //현업가면 이렇게 써서 에러 많이 난대

// async function loadData() {
//   const result = await fetchData(); // await 쓸거면 앞에 async 반드시 써야함
//   console.log(result);
// }

// loadData();

//실전 예제 : 유저 정보 가져오기

function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: "Alice", age: 25 });
    }, 1000);
  });
}

async function showUser() {
  console.log("유저 정보 로딩 중 ...");
  const user = await getUser();
  console.log(`이름: ${user.name}, 나이: ${user.age}`);
}

//showUser();

//try catch
async function load() {
  try {
    const data = await fetch("http://example.com/data");
    const json = await data.json();
    console.log(json);
  } catch (err) {
    console.error("데이터 로딩 실패 ", err);
  }
}

load();

//await  병렬 처리 -> 이 부분에 익숙해져야 된대
const p1 = fetch("https://example.com/data1");
const p2 = fetch("https://example.com/data2");

async function test() {
  const [res1, res2] = await Promise.all([p1, p2]);
  console.log(res1);
  console.log(res2);
}

test();

//과제1 : 간단한 비동기 함수 만들기
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function helloAfter2s() {
  await delay(2000);
  console.log(" 2초 후 Hello! ");
}
helloAfter2s();
