# 홈페이지 구성

연구실 홈페이지(`/`)는 새 디자인입니다. 이전 홈페이지는 지우지 않고 `/old/`에 그대로 남겨 두었습니다.

- 새 홈페이지: `/`, `/research/`, `/publications/`, `/members/`, `/news/`, `/contact/` (영어: `/en/`, `/en/research/` …)
- 이전 홈페이지: `/old/`, `/old/team/`, `/old/projects/` … (검색에 노출되지 않음, 오른쪽 아래 버튼으로 새 홈페이지로 이동)
- 새 홈페이지 바닥글의 **이전 홈페이지** 링크는 `/old/`의 같은 내용 페이지로 연결됩니다.

두 홈페이지는 **같은 자료**를 씁니다. 아래 파일을 고치면 두 곳에 함께 반영됩니다.

| 내용 | 고치는 곳 |
| --- | --- |
| 구성원 (사진, 이름, 역할) | `_members/*.md` (`role` 값으로 현재 구성원·졸업생·협력 연구자를 나눔. 졸업하면 `ug` → `undergrax`처럼 바꿈) |
| 논문 | `_data/sources.yaml` → CI가 `_data/citations.yaml`을 자동 생성 |
| 보도 · 강연 · 영상 | `_data/press.yaml` (새 항목은 목록 맨 위에) |
| 연구실 뉴스레터 | `_posts/` |
| 모집 공고 | `_includes/vacancy-body.md` (이전 홈페이지의 `/old/vacancy/`와 공용) |
| 영어 모집 공고 | `_includes/vacancy-body-en.md` (한국어 공고가 바뀌면 함께 고침) |
| 페이지 문구 (한·영) | `_data/redesign_text.yaml` (`ko`, `en`) |
| 보도·영상의 영어 제목 | `_data/press.yaml`의 `title_en`, `source_en` |
| 공동연구자 소개 | `_data/redesign_collaborators.yaml` (`focus`, `focus_en`) |
| 연구 주제 목록 | `_programmes/*.md` |

## 페이지

| 주소 | 내용 | 이전 홈페이지 |
| --- | --- | --- |
| `/` | 첫 화면(최근 소식, 연구 4가지, 구성원, 연락처) | `/old/` |
| `/research/` | 네 가지 연구 기술, 이미징, 연구 주제 | `/old/projects/` |
| `/publications/` | 주요 논문, 전체 목록(검색) | `/old/publications/` |
| `/members/` | 교수 소개, 현재 구성원, 졸업생, 협력 연구자 | `/old/team/` |
| `/members/<이름>.html` | 구성원 개인 페이지 (`_members/<이름>.md`) | `/old/members/<이름>.html` |
| `/news/` | 보도·강연, 영상, 뉴스레터, 연구실 사진 | `/old/collage/` |
| `/2024/05/17/…html` | 뉴스레터 글 (`_posts/`) | `/old/2024/05/17/…html` |
| `/contact/` | 연락처, 지도, 모집 공고(`#join`), 소속 기관 | `/old/contact/`, `/old/vacancy/` |

이전 홈페이지의 주소로 들어오면 새 페이지로 넘어갑니다: `/team/` → `/members/`, `/projects/` → `/research/`, `/collage/` → `/news/`, `/vacancy/` → `/contact/#join`.
없는 주소는 새 디자인의 `404.html`이 보입니다.

## 파일 구성

- `redesign/` — 새 홈페이지의 페이지들. 폴더 이름은 미리보기 시절의 것이며, 실제 주소는 각 파일 앞부분의 `permalink`로 정함
  - `redesign/*/index.html`(한국어), `redesign/en/*/index.html`(영어) — 앞부분의 `lang`(ko/en)으로 언어를 정하고 본문은 `_includes/redesign/page-*.html`(한·영 공용)을 불러옴
  - `redesign/404.html`, `redesign/vacancy.html`(`/vacancy/` → `/contact/#join`)
  - `redesign/assets/` — `site.css`, `site.js`, 웹용으로 줄인 사진(`photos/`), 구성원 사진의 작은 사본(`people/<이름>.webp|.jpg`, 없으면 `_members`의 `image`를 씀)
- `_layouts/redesign.html` — 공통 틀(머리글·바닥글). `redesign-member.html`(구성원 개인 페이지), `redesign-post.html`(뉴스레터)
- `_includes/redesign/` — 머리글·바닥글, 제목 띠, 구성원 카드, 사진 찾기(`photo-lookup.html`), 페이지 본문
- `_plugins/old_site.rb` — 본 사이트를 만든 뒤 이전 홈페이지를 `_site/old/`에 한 번 더 만듦. 설정은 `_config.yaml`의 `old_site`. `images/`(약 200 MB)는 복사하지 않고 본 사이트의 것을 가리키게 함
- `_plugins/redesign_passthrough.rb` — `redesign/` 페이지가 `jekyll-spaceship`의 HTML 재작성(예: SVG `viewBox`가 소문자로 바뀌는 문제)을 거치지 않게 함
- 이전 홈페이지의 파일(`index.md`, `team/`, `projects/`, `publications/`, `collage/`, `contact/`, `vacancy/`, `404.md`, `_layouts/default.html` 등)은 그대로 두었고, `_config.yaml`의 `exclude`로 본 사이트에서만 뺐습니다

## 아직 하지 않은 것

- 연구 주제 개별 페이지(`_programmes/`)는 새 디자인에 따로 없고 `/research/`의 목록으로만 보입니다 (이전 홈페이지의 `/old/programmes/`에는 있음)
