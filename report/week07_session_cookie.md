# 세션과 쿠키 기반 인증 흐름 이해

---

## 🔐 1. 세션(Session)과 쿠키(Cookie) 기반 인증 흐름 이해

### ✅ 쿠키(Cookie) 기반 인증

- **정의**: 쿠키는 사용자의 브라우저에 저장되는 작은 데이터 조각입니다.
- **용도**: 서버는 로그인 시 발급한 인증 정보를 쿠키에 저장하고, 이후 요청마다 이 쿠키를 포함시켜 사용자를 식별합니다.

#### 🔄 흐름

1. 사용자가 로그인 정보를 입력하여 로그인 요청.
2. 서버가 사용자 정보를 확인 후, **JWT 토큰** 또는 **사용자 식별 정보**를 생성.
3. 이 정보를 **HTTP 쿠키**로 브라우저에 저장.
4. 이후 모든 요청에 쿠키가 자동으로 포함되어 인증 수행.
5. 로그아웃 시 쿠키 삭제.

👉 **장점**: 서버에서 상태를 관리하지 않으므로 확장성이 좋음  
👉 **단점**: 쿠키 탈취 시 보안 위험 (XSS, CSRF 등)

---

### ✅ 세션(Session) 기반 인증

- **정의**: 세션은 서버에 저장되는 사용자 상태 정보입니다. 클라이언트는 세션 ID만을 쿠키에 저장합니다.
- **용도**: 서버가 세션 ID를 발급하고, 이 ID를 기반으로 사용자 정보를 조회하여 인증합니다.

#### 🔄 흐름

1. 사용자가 로그인 정보를 입력하여 로그인 요청.
2. 서버가 사용자 정보를 확인 후, **세션 생성 + 세션 ID 발급**.
3. 서버는 세션 ID를 **쿠키에 담아 브라우저에 전달**.
4. 클라이언트는 이후 요청에 세션 ID를 포함.
5. 서버는 이 ID를 기반으로 사용자를 인증.

👉 **장점**: 민감한 정보는 서버에만 존재하므로 보안성이 높음  
👉 **단점**: 서버 메모리를 사용하므로 사용자 수가 많을 경우 확장성에 제약

---

## 🏗️ 2. 로그인 구조 적용 예시

### 예시 1: 쿠키 + JWT 기반 인증

```
[클라이언트] → 로그인 요청 → [서버]
[서버] → 사용자 검증 후 JWT 생성 → Set-Cookie (JWT 포함)
[클라이언트] → 모든 요청에 JWT 쿠키 포함 → [서버] → JWT 검증
```

### 예시 2: 세션 기반 인증

```
[클라이언트] → 로그인 요청 → [서버]
[서버] → 사용자 검증 후 세션 생성 → 세션 ID를 쿠키에 저장
[클라이언트] → 모든 요청에 세션 ID 포함 → [서버] → 세션 조회
```

---

## 📌 상태 유지 전략 비교

| 구분      | 쿠키 기반 인증       | 세션 기반 인증       |
| --------- | -------------------- | -------------------- |
| 저장 위치 | 클라이언트(브라우저) | 서버(메모리 또는 DB) |
| 보안      | 상대적으로 취약      | 상대적으로 안전      |
| 확장성    | 좋음                 | 상대적으로 낮음      |
| 서버 부하 | 적음                 | 많음                 |

---

💡 인증 방식 선택은 **시스템 구조와 보안 요구 사항에 따라** 달라집니다.  
간단한 서비스는 세션 기반으로, SPA나 모바일 앱 등은 JWT 기반 쿠키 인증이 많이 사용됩니다.
