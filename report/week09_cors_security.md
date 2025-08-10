# CORS 정책과 웹 보안 기본 개념

## 1. 기본 정책: Same-Origin Policy(SOP)
- **동일 출처 정책**은 웹 브라우저가 보안을 위해 적용하는 기본 규칙임.  
- **출처(Origin)**는 `프로토콜 + 도메인 + 포트`로 구성됨.  
  - 예: `https://example.com:443` → `https` / `example.com` / `443`
- 동일 출처 정책은 웹 페이지가 자기 자신과 **출처가 동일한 경우**에만 자원 접근을 허용함.  
- 목적: 악성 스크립트가 **쿠키·세션** 같은 민감 데이터에 접근하는 것을 방지함.  

---

## 2. CORS 등장 배경
- 웹 애플리케이션이 발전하면서 외부 API나 서비스 등 **다른 출처의 자원**을 사용할 필요성이 커짐.  
- 그러나 SOP로 인해 기본적으로 이러한 요청은 차단됨.  
- 이를 해결하고 **특정 조건 하에 다른 출처의 접근을 허용**하기 위해 **CORS**가 등장함.

---

## 3. CORS 작동 방식
- **C**ross-**O**rigin **R**esource **S**haring은 **HTTP 헤더**를 통해 동작함.  
- 서버는 응답 헤더에 **허용 규칙**을 명시하고, 브라우저는 이를 확인하여 요청 허용 여부를 결정함.  
- 예시:
  - `Access-Control-Allow-Origin: https://example.com` → 해당 도메인만 허용  
  - `Access-Control-Allow-Origin: *` → 모든 도메인 허용  
- CORS는 **브라우저 환경**에서만 적용되며, 서버-서버 간 통신에는 적용되지 않음.

---

## 4. 요청/응답 헤더 정리

### 요청(Request) 헤더
- **Origin**: 요청을 보낸 페이지의 출처
- **Access-Control-Request-Method**: 사용할 HTTP 메서드(Preflight 전용)
- **Access-Control-Request-Headers**: 사용할 커스텀 헤더 목록(Preflight 전용)

### 응답(Response) 헤더
- **Access-Control-Allow-Origin**: 허용할 출처
- **Access-Control-Allow-Methods**: 허용할 메서드
- **Access-Control-Allow-Headers**: 허용할 요청 헤더
- **Access-Control-Allow-Credentials**: 쿠키·인증정보 포함 허용 여부
- **Access-Control-Max-Age**: Preflight 결과 캐시 시간

---

## 5. Preflight 요청
- **Simple Request** 조건(GET, POST, HEAD + 제한된 헤더)에서 벗어난 요청은 브라우저가 **OPTIONS** 메서드로 먼저 서버에 허용 여부를 확인함.  

**절차:**  
1. 브라우저 → 서버: OPTIONS 요청 전송  
2. 서버 → 브라우저: 허용할 출처·메서드·헤더 응답  
3. 허용 시 본 요청 실행  

- 목적: 서버가 해당 요청을 안전하게 처리할 수 있는지 사전에 확인함.

---

## 6. CORS와 보안
- CORS는 출처 간 접근을 허용하지만, **무분별한 접근을 막기 위해** 허용할 **메서드, 헤더, 인증정보** 등을 제한할 수 있음.  
- `Access-Control-Allow-Credentials: true`를 사용할 경우, `Access-Control-Allow-Origin`에 `*` 사용 불가.  
- 반드시 HTTPS를 사용하여 전송 보안을 강화해야 함.

---

## 7. CORS 에러와 해결 방법
- CORS 정책 위반 시 브라우저에서 요청이 차단됨.  
- 해결 방법:
  - 서버에서 **`Access-Control-Allow-Origin`**을 올바르게 설정  
  - 필요한 경우 **프록시 서버**를 사용하여 요청 중계

---

## 8. 보안 요약
- CORS는 **접근 권한 제어 도구**일 뿐, 인증·인가 기능을 대체하지 않음.  
- 안전한 웹 환경을 위해 **CSRF 방어, XSS 방어, HTTPS 사용**이 필수임.
