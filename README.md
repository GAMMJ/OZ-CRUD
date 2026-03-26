# OZ TOY CRUD

React + Supabase로 만든 게시판 CRUD 프로젝트입니다.

## 기능

- 게시글 목록 조회
- 게시글 작성
- 게시글 상세 조회
- 게시글 수정 (인라인 편집)
- 게시글 삭제 (확인 팝업)

## 기술 스택

| 분류 | 기술 |
|------|------|
| UI | React 19, Tailwind CSS 4 |
| 라우팅 | React Router DOM 7 |
| 상태관리 | Zustand |
| 백엔드/DB | Supabase (PostgreSQL) |
| 빌드 | Vite |
| 유틸 | dayjs, nanoid |

## 프로젝트 구조

```
src/
├── components/       # Navbar, Footer, PostCard
├── pages/            # MainPage, WritePage, DetailPage
├── layouts/          # RootLayout
├── hooks/            # usePosts, usePost, useCreatePost, useUpdatePost, useDeletePost
├── store/            # usePostStore (Zustand)
└── lib/              # supabase.js
```

## 시작하기

### 1. 패키지 설치

```bash
npm install
```

### 2. 환경변수 설정

`.env.local` 파일을 생성하고 Supabase 프로젝트 정보를 입력합니다.

```
VITE_SUPABASE_URL=your-supabase-project-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

### 3. Supabase 테이블 생성

Supabase SQL Editor에서 아래 SQL을 실행합니다.

```sql
CREATE TABLE posts (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  contents TEXT NOT NULL,
  date TEXT NOT NULL
);

ALTER TABLE posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow all" ON posts
  FOR ALL USING (true) WITH CHECK (true);
```

### 4. 개발 서버 실행

```bash
npm run dev
```

`http://localhost:5173`에서 확인할 수 있습니다.

## 스크립트

```bash
npm run dev      # 개발 서버 실행
npm run build    # 프로덕션 빌드
npm run preview  # 빌드 결과 미리보기
npm run lint     # ESLint 실행
```
