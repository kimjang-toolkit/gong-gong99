# 프로젝트 이름

공공구구

## 설치 방법

1. **Git 저장소 클론**

   ```bash
   git clone https://github.com/kimjang-toolkit/gong-gong99.git
   cd gong-gong99
   ```

- 서브 모듈 클론 : 반드시 `common-type` 폴더명으로 클론하기

```bash
   git submodule add https://github.com/kimjang-toolkit/kimjang-toolkit-gong-gong99-api-interface.git common-type

```

2. **필요한 패키지 설치**

   - Node.js 환경에서:
     ```bash
     npm install
     ```

3. **환경 변수 설정**
   - `.env` 파일을 생성하고 필요한 환경 변수를 설정
   - ```
     VITE_API_SERVER_URL=서버 api
     ```

## 프로그램 실행 방법

1. **개발 서버 실행**

   ```bash
   npm run dev
   ```

2. **웹 브라우저 실행**
   - 브라우저를 열고 `http://localhost:5173` (또는 설정한 포트)로 이동합니다.

## github 사용법

1. 이 저장소를 포크합니다.
2. 새로운 브랜치를 생성합니다. (`git checkout -b feat/#이슈번호/새로운기능`)
3. 변경 사항을 커밋합니다. (`git commit -m '새로운 기능 추가'`)
4. 브랜치에 푸시합니다. (`git push origin feat/#이슈번호/새로운기능`)
5. pr
