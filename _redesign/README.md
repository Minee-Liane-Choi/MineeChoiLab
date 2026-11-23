# 새 홈페이지 미리보기 (`/redesign/`)

현재 홈페이지는 그대로 두고, 새 디자인(시안 D)을 같은 사이트의 `/redesign/` 아래에 미리보기로 올립니다.
모든 페이지 오른쪽 아래의 버튼으로 두 사이트를 오갈 수 있습니다.

새 홈페이지는 기존 사이트와 **같은 자료**를 씁니다. 구성원·논문·뉴스레터·모집 공고를 한 곳에서 고치면 두 사이트에 함께 반영됩니다.

| 내용 | 고치는 곳 |
| --- | --- |
| 구성원 (사진, 이름, 역할) | `_members/*.md` (`role` 값으로 현재 구성원·졸업생·협력 연구자를 나눔) |
| 논문 | `_data/sources.yaml` → CI가 `_data/citations.yaml`을 자동 생성 |
| 보도 · 강연 · 영상 | `_data/press.yaml` (새 항목은 목록 맨 위에) |
| 연구실 뉴스레터 | `_posts/` |
| 모집 공고 | `_includes/vacancy-body.md` (기존 `/vacancy/` 페이지와 공용) |
| 연구 주제 목록 | `_programmes/*.md` |

## 페이지

| 미리보기 | 내용 | 버튼 → 현재 사이트 |
| --- | --- | --- |
| `/redesign/` | 첫 화면(최근 소식, 연구 4가지, Neural Pong, 구성원, 연락처) | `/` |
| `/redesign/research/` | 네 가지 연구 기술, 이미징, 연구 주제 | `/projects/` |
| `/redesign/publications/` | 주요 논문, 전체 목록(검색) | `/publications/` |
| `/redesign/members/` | 교수 소개, 현재 구성원, 졸업생, 협력 연구자 | `/team/` |
| `/redesign/news/` | 보도·강연, 영상, 뉴스레터, 연구실 사진 | `/collage/` |
| `/redesign/contact/` | 연락처, 지도, 모집 공고(`#join`), 소속 기관 | `/contact/` |

현재 사이트의 버튼은 `/vacancy/` → `/redesign/contact/#join`, 구성원 페이지 → `/redesign/members/`, 게시물 → `/redesign/news/`처럼 가장 가까운 페이지로 연결합니다.

## 파일 구성

- `_layouts/redesign.html`, `_includes/redesign/` — 레이아웃, 머리글·바닥글, 제목 띠, 구성원 카드
- `redesign/*/index.html` — 각 페이지
- `redesign/assets/site.css`, `site.js` — 스타일과 동작 (메뉴, 소식 넘기기, 사진 전환, 구성원 카드 넘기기, 논문 검색, 보도 분류)
- `redesign/assets/photos/` — 웹용으로 줄인 연구실 사진 (원본은 `images/`)
- `redesign/assets/people/<이름>.webp` — 구성원 사진의 작은 사본. 없으면 `_members`의 `image`를 그대로 씁니다
- `_plugins/redesign_passthrough.rb` — `redesign/` 페이지가 `jekyll-spaceship`의 HTML 재작성(예: SVG `viewBox`가 소문자로 바뀌는 문제)을 거치지 않게 함
- `_config.yaml` — `redesign` 경로에 `layout: redesign`, `sitemap: false` 기본값. `redesign_preview_button: false`로 버튼을 모든 페이지에서 숨김

미리보기 페이지는 `noindex`이고 사이트맵에서 빠져 있습니다.

## 아직 하지 않은 것

- 영어(EN) 버전
- 구성원 개인 페이지와 뉴스레터 글은 아직 기존 디자인 페이지로 연결됩니다
- 정식 전환: 루트(`/`)를 새 디자인으로 바꾸고 기존 주소(`/team/`, `/vacancy/`, `/projects/` 등)를 새 주소로 넘기는 작업
