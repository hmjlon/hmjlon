<br><br>

# RESTful API의 개념과 설계<br><br>

## 1. RESTful API란?<br><br>

RESTful API는 웹 환경에서 자원을 효율적으로 다루기 위해 **REST(Representational State Transfer)** 원칙을 따르는 API를 의미함.

REST는 자원을 URI로 표현하고, 해당 자원에 대한 행위는 HTTP 메서드(GET, POST 등)를 통해 정의함.  
즉, **URI는 '무엇'을 요청하는지**, **HTTP 메서드는 '어떻게' 요청하는지를 구분**함.

예를 들어, 게시글(Post)을 다루는 경우:

- `GET /posts` → 게시글 목록 조회
- `POST /posts` → 게시글 생성
- `GET /posts/1` → ID가 1인 게시글 조회
- `PUT /posts/1` → 게시글 수정
- `DELETE /posts/1` → 게시글 삭제

이처럼 RESTful API는 **자원 중심**이며, URL은 명확하고 일관성 있게 구성됨.<br><br>
<br><br>

---

## 2. REST의 원칙 및 HTTP 메서드<br><br>

### REST의 주요 원칙 (간단 정리)

1. **클라이언트-서버 구조**

   - 사용자 인터페이스와 데이터 처리를 분리함.

2. **무상태성 (Stateless)**

   - 서버는 클라이언트의 이전 요청 상태를 저장하지 않음. 모든 요청은 독립적으로 처리됨.

3. **자원의 표현**

   - 자원은 URI로 표현되며, 클라이언트는 이를 다양한 형태(JSON, XML 등)로 받아볼 수 있음.

4. **일관된 인터페이스 (Uniform Interface)**
   - API는 일관된 규칙을 따르며, 누구나 쉽게 이해하고 사용할 수 있어야 함.<br><br><br><br>

---

### 주요 HTTP 메서드<br><br>

| 메서드 | 의미      | 사용 예시         | 설명                      |
| ------ | --------- | ----------------- | ------------------------- |
| GET    | 조회      | `GET /users`      | 사용자 목록 조회          |
| GET    | 조회      | `GET /users/1`    | ID가 1인 사용자 정보 조회 |
| POST   | 생성      | `POST /users`     | 사용자 생성               |
| PUT    | 전체 수정 | `PUT /users/1`    | 사용자 정보 전체 수정     |
| PATCH  | 부분 수정 | `PATCH /users/1`  | 사용자 정보 일부 수정     |
| DELETE | 삭제      | `DELETE /users/1` | 사용자 삭제               |

---

<br><br>

## 3. RESTful 엔드포인트 설계 방법<br><br>

RESTful API에서는 URL이 자원을 표현하며, HTTP 메서드가 해당 자원에 대한 동작을 나타냄.<br><br>

### RESTful URI 설계 예시

| 기능             | URI        | 메서드 | 설명                 |
| ---------------- | ---------- | ------ | -------------------- |
| 게시글 목록 조회 | `/posts`   | GET    | 모든 게시글 조회     |
| 게시글 등록      | `/posts`   | POST   | 게시글 생성          |
| 게시글 상세 조회 | `/posts/3` | GET    | ID가 3인 게시글 조회 |
| 게시글 수정      | `/posts/3` | PUT    | 게시글 전체 수정     |
| 게시글 삭제      | `/posts/3` | DELETE | 게시글 삭제          |

---

<br><br>

### 비RESTful한 잘못된 예시<br><br>

| URI             | 문제점                                         |
| --------------- | ---------------------------------------------- |
| `/getPosts`     | URI에 동사를 사용함 (REST 원칙 위배)           |
| `/deleteUser/1` | 행위가 URI에 포함됨 (동사 사용)                |
| `/users?id=1`   | 쿼리 파라미터로 자원을 식별함 (권장 방식 아님) |

---

<br><br>

### RESTful API 설계 규칙 요약

- URI는 **명사**로 구성하고, **동사는 사용하지 않음**
- **소문자**와 **복수형** 사용 권장 (예: `/users`, `/posts`)
- **계층적 구조** 표현 (예: `/users/1/posts/2`)
- **확장자 사용 금지** (`.json`, `.php` 등은 붙이지 않음)

---

<br><br>

## Express + MongoDB 기반 간단한 RESTful API 예제

<br><br>

책(Book) 정보를 저장하고 불러오는 간단한 REST API 예제 코드.  
Express를 이용하여 서버를 만들고, MongoDB를 사용하여 데이터를 저장함.

---

### 📦 1) 사용된 기술

- **Express**: Node.js 기반 웹 프레임워크
- **Mongoose**: MongoDB ODM(Object Data Modeling)
- **MongoDB**: NoSQL 데이터베이스

---

### 📝 2) 전체 코드

```js
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

// MongoDB 연결 설정
mongoose.connect("mongodb://localhost:27017/mydatabase", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// 스키마 정의
const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
});

// 모델 생성
const Book = mongoose.model("Book", bookSchema);

// 미들웨어 설정 (JSON 파싱)
app.use(express.json());

// 라우트 설정

// 전체 책 목록 조회
app.get("/books", async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 새 책 등록
app.post("/books", async (req, res) => {
  const book = new Book({
    title: req.body.title,
    author: req.body.author,
  });

  try {
    const newBook = await book.save();
    res.status(201).json(newBook);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// 서버 시작
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
```
