# 새 홈페이지 미리보기 (`/redesign/`)

현재 홈페이지는 그대로 두고, 개편안(v9 · Explore)을 같은 사이트의 `/redesign/` 아래에 미리보기로 올립니다.
모든 페이지 오른쪽 아래의 버튼으로 두 사이트를 오갈 수 있습니다.

| 현재 페이지 | 버튼 → 미리보기 | 미리보기 페이지 | 버튼 → 현재 사이트 |
| --- | --- | --- | --- |
| `/` | `/redesign/` | `/redesign/` | `/` |
| `/publications/` | `/redesign/publications/` | `/redesign/publications/...` | `/publications/` |
| `/team/`, 구성원 페이지 | `/redesign/team/` (교수님 페이지는 `/redesign/team/minee-choi/`) | `/redesign/team/...` | `/team/` |
| `/projects/`, 연구 프로그램 페이지 | `/redesign/research/` | `/redesign/research/...` | `/projects/` |
| `/vacancy/` | `/redesign/join/` | `/redesign/join/` | `/vacancy/` |
| `/contact/` | `/redesign/contact/` | `/redesign/contact/` | `/contact/` |
| `/collage/`, 게시물 | `/redesign/media/` | `/redesign/media/...` | `/collage/` |
| 그 밖의 페이지 | `/redesign/` | `/redesign/tools/`, `/redesign/designs/` | `/` |

## 파일 구성

- `redesign/` — v9 `dist/`에서 생성한 페이지 31개와 assets. **직접 고치지 말고** 원본을 고친 뒤 아래 명령으로 다시 가져옵니다.
- `_redesign/import_redesign.py` — 가져오기 스크립트. `_redesign/import-manifest.json`에 원본 파일별 SHA-256을 기록합니다.
- `_includes/redesign-switch.html` — 두 사이트를 오가는 버튼. `_layouts/default.html`(현재 사이트)과 `redesign/` 페이지에서 사용합니다.
- `_config.yaml`의 `redesign_preview_button: false`로 버튼을 모든 페이지에서 숨길 수 있습니다.

```bash
python _redesign/import_redesign.py --dist <v9 압축을 푼 폴더>/dist --replace
```

## 가져올 때 바뀌는 것

- 각 페이지에 `layout: null`, `/redesign/...` permalink, `sitemap: false`를 붙입니다. 기존 머리글·바닥글이 겹치지 않습니다.
- HTML·JavaScript 안의 사이트 내부 경로(`/assets/`, `/team/` 등)를 `{{ '/redesign' | relative_url }}`로 바꿉니다. Jekyll이 빌드할 때 baseurl을 채우므로 같은 파일이 운영(`/redesign/`)과 PR 미리보기(`/preview/pr-N/redesign/`) 모두에서 맞는 경로를 씁니다. 외부 링크와 논문·구성원 원문은 바꾸지 않습니다.
- 페이지와 스크립트 전체를 `{% raw %}`로 감싸 JavaScript가 Liquid로 해석되지 않게 합니다.
- 미리보기 기간에는 검색엔진 색인을 막도록 `<meta name="robots" content="noindex">`를 넣습니다.

## 정식 전환할 때

미리보기를 정식 홈페이지로 바꾸는 것은 별도 결정입니다. 그때는 기존 `index.md`·`team/`·`publications/`·`contact/`의 출력 경로 충돌, `/vacancy/` → `/join/`, `/projects/` → `/research/` 리디렉션, noindex 제거, 사이트맵 포함 여부를 함께 정해야 합니다.
