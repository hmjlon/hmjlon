<pre>
\*3‑Tier Architecture (3계층 구조)


1.Presentation Tier (프레젠테이션 계층)

-사용자 인터페이스(UI), 브라우저 화면, 눈에 보이는 부분 → HTML/CSS/JS -데이터 보여주기 & 입력받기, API 호출 시작점 -사용자가 직접 보고, 클릭하거나 입력하는 곳


2.Business Logic Tier (비즈니스 로직 계층)

-웹 서버, 백엔드 프로그램(Python, Java, Node.js 등)
API 처리 및 비즈니스 로직 수행
-Presentation 계층의 요청 처리, 데이터베이스 호출 -실제 ‘처리’가 일어나는 곳, 서버나 API가 여기 속함


3.Data Tier (데이터 계층)

-데이터 저장, 데이터베이스(MySQL, PostgreSQL, MongoDB 등) -모든 데이터를 저장하고, 꺼내오고, 바꾸고, 삭제하는 곳


<특징 & 장점> -각 계층이 독립적으로 개발 · 확장 · 유지보수 가능 -보안 강화 (직접 DB 접근 방지), 성능 튜닝 유리 -대규모 서비스에 적합하고, 클라우드 → 마이크로서비스 전환에도 유리





\*CRUD 개념과 웹 흐름


CRUD: 데이터를 다루는 네 가지 기본 동작
-Create: 데이터 생성 (만들기)
-Read: 데이터 읽기 (가져오기)
-Update: 데이터 수정 (바꾸기)
-Delete: 데이터 삭제 (지우기)


<CRUD와 HTTP의 관계>

웹에서는 HTTP 메서드와 연결됨

-Create → POST
-Read → GET
-Update → PUT (또는 PATCH)
-Delete → DELETE





<웹에서 CRUD가 동작하는 흐름>

1.  Create(생성)
    사용자가 웹사이트에서 입력 폼에 데이터를 작성하고, 저장(제출) 버튼을 누름.
웹 브라우저(프레젠테이션 계층)는 이 데이터를 POST 방식으로 웹 서버(비즈니스 로직 계층)에 전송.
웹 서버는 전달받은 데이터를 검증한 후 데이터베이스(데이터 계층)에 저장.


2. Read(읽기)
   사용자가 게시글 목록 또는 특정 게시글을 조회하고자 할 때, 웹 브라우저가 GET 방식으로 웹 서버에 요청 보냄.
서버는 데이터베이스에서 해당 정보를 조회하여 사용자에게 화면에 보여줌.


3. Update(수정)
   사용자가 기존 게시글의 내용을 수정하고 저장을 누르면, 수정된 데이터가 PUT 또는 PATCH 방식으로 서버에 전송됨.
서버는 해당 데이터를 데이터베이스에서 찾아 내용을 변경한 뒤, 변경된 정보를 다시 사용자에게 전달.


4. Delete(삭제)
   사용자가 게시글 삭제를 요청하면, 웹 브라우저가 DELETE 방식으로 서버에 삭제 요청을 보냄.
서버는 데이터베이스에서 해당 데이터를 삭제하고, 삭제 결과를 사용자에게 알려줌.
</pre>
