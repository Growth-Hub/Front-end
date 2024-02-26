# 📂 페이지네이션 (1week)

OpenAPI를 이용해서 데이터를 가져오고 페이징 처리릁 통한 페이지네이션 구현
<br>추가적인 최적화 요소를 단계별로 구성하였으니 난도에 맞게 수행하면 됩니다 ~ ~

## 🗾 웹 디자인

디자인 : [ABC마트](https://abcmart.a-rt.com/display/category/main?dfltChnnlMv=Y&genderGbnCode=10000&ctgrNo=1000000497&page=1)

<details>
	<summary>예시</summary>
<img width="1206" alt="스크린샷 2024-02-15 오후 10 52 23" src="https://github.com/kangsinbeom/fastcampus/assets/83047601/48c82723-4380-450c-a6de-becad8caef40">
</details>

🎉 **필독!!! 추가설명**

- 한 페이지 당 10개씩 아이템을 만들 것 한 줄에 3개의 이미지 배치 (item, layout 크기 자유)
- 네비게이션 바는 구현 X
- 이미지 아래 설명 부분에는 OpenAPI의 다른 데이터를 통해 구성할 것

<br>
<br>

## 🛠️ 세팅

**React 세팅**: create react-app

**스타일 라이브러리**: styled-component

**eslint 및 prettier**: 자유

**전역 상태관리 라이브러리r**: ContextAPI 활용

**비동기 데이터 관리 라이브러리**: React-Query (TanStack-Query)

**OpenAPI**: [OpenAPI 고양이 사이트](https://thedogapi.com/)

- API KEY는 이메일로 오기에 확인 잘하시면 됩니다.
- GUIDES 또는 DOCUMENTATION에서 API 사용법 및 query 작성 방법 나와 있습니다.

<br>
<br>

## 🏆 완성조건

- ### STEP 1: 데이터를 불러와서 화면에 나타내기
- ### STEP 2: 페이징 처리를 통한 페이지네이션 구현
- ### STEP 3: 새로고침 시 현재 페이지 고정
- ### STEP 4: 이미지 최적화를 통한 전 후 light house 측정 (이미지 최적화 요소는 스스로 찾아보시길!)
- ### STEP 5: portal을 통해 디테일 모달 띄우기

---

---

<br>
<br>

<br>
<br>

## 🏆 완성조건

- ### STEP 1: 데이터를 불러와서 화면에 나타내기
- ### STEP 2: 페이징 처리를 통한 페이지네이션 구현
- ### STEP 3: 새로고침 시 현재 페이지 고정
- ### STEP 4: 이미지 최적화를 통한 전 후 light house 측정 (이미지 최적화 요소는 스스로 찾아보시길!)
- ### STEP 5: portal을 통해 디테일 모달 띄우기

---

---

<br>
<br>

# 📂 인피니티 스크롤 (2week)

인피니티 스크롤을 구현할 것입니다. 새로고침을 했을 때 이전에 보던 페이지가 띄어지게 하려면 어떻게 해야할지와 데이터가 올바르게 불러와지는지 그리고 기타 인피니티 스크롤 구현시에 주의사항을 잘 공부해서 만들어 봅시다!

## 🗾 웹 디자인

디자인 : [핀터레스트](https://www.pinterest.co.kr/ideas/)

<details>
	<summary>예시</summary>
<img width="1441" alt="스크린샷 2024-02-15 오후 11 13 29" src="https://github.com/kangsinbeom/fastcampus/assets/83047601/5bbf3084-2645-4e59-8b87-4dbe09865758">
</details>

🎉 **필독!!! 추가설명**

- 아이템의 크기는 예시와 같이 이미지의 크기 및 컨텐츠의 크기별로 다르게 구성되게 할 것입니다.
- 시간이 남는다면 상단의 header부분을 구현해도 됩니다. (UI만)
- 이미지 아래 설명 부분에는 OpenAPI의 다른 데이터를 통해 구성할 것

<br>
<br>

## 🛠️ 세팅

**React 세팅**: create react-app

**스타일 라이브러리**: styled-component

**eslint 및 prettier**: 자유

**전역 상태관리 라이브러리r**: ContextAPI 활용

**비동기 데이터 관리 라이브러리**: React-Query (TanStack-Query)

**OpenAPI**: [OpenAPI 고양이 사이트](https://thedogapi.com/)

- API KEY는 이메일로 오기에 확인 잘하시면 됩니다.
- GUIDES 또는 DOCUMENTATION에서 API 사용법 및 query 작성 방법 나와 있습니다.

<br>
<br>

## 🏆 완성조건

- ### STEP 1: 데이터를 불러와서 화면에 나타내기
- ### STEP 2: trriger설정을 통해 인피니티 스크롤 구현
- ### STEP 3: 컨텐츠의 길이가 2줄을 넘어가면 ... 생략을 해봅시다.
- ### STEP 4: 새로고침 시 현재 위치 및 데이터 유지하기
- ### STEP 5: react-virtuoso가 뭔지 알아보고 적용하기

---

---

<br>
<br>

# 📂 검색창 구현 (3week)

카카오 OpenAPI를 이용해서 검색 기능을 구현을 해볼 것입니다. 이번 과제에선 이전 과제에서 사용했던 UI에서 API를 교체할 것입니다!
<br>또한 input에 입력할 때마다 요청을 하게 되면 뭔가 불편하지 않을까요? ㅎㅎ

## 🗾 웹 디자인

디자인 : [핀터레스트](https://www.pinterest.co.kr/ideas/)

<details>
	<summary>예시</summary>
<img width="1441" alt="스크린샷 2024-02-15 오후 11 13 29" src="https://github.com/kangsinbeom/fastcampus/assets/83047601/5bbf3084-2645-4e59-8b87-4dbe09865758">
</details>

🎉 **필독!!! 추가설명**

- 썸네일로 사용하는 이미지와 그냥 이미지는 뭐가 다른지 한번 찾아보시겠어요?
- 이미지 최적화 방법 중 가장 간단한 방법은 자체 크기를 줄이는 것이랍니다. webP와 jpg의 차이점이 키워드입니다!

<br>
<br>

## 🛠️ 세팅

**React 세팅**: create react-app

**스타일 라이브러리**: styled-component

**eslint 및 prettier**: 자유

**전역 상태관리 라이브러리r**: ContextAPI 활용

**비동기 데이터 관리 라이브러리**: React-Query (TanStack-Query)

**OpenAPI**: [Kakao Daum 검색](https://developers.kakao.com/docs/latest/ko/daum-search/dev-guide)

- API KEY 발급 받으셔야 합니다.
- 사용 방법은 잘 나와 있습니다!

<br>
<br>

## 🏆 완성조건

- ### STEP 1: 웹문서 데이터를 불러와서 화면에 나타내기
- ### STEP 2: content에 포함된 불필요한 tag 제거하기
- ### STEP 3: 디바운스 쓰로틀링 공부하고 적용하기
- ### STEP 4: 카테고리 별 검색 구현 (웹문서, 이미지, 블로그, 책, 카페)
- ### STEP 5: 자동 완성 구현!

---

---

<br>
<br>

# 📂 로그인 / 회원가입 및 소셜 로그인 (4week)

firebase를 통해서 이메일 로그인 / 회원가입과 소셜로그인을 구현해보겠습니다.
<br>다양한 정보를 firebase storage에 user 정보를 저장해봅시다.

## 🗾 웹 디자인

디자인 : [핀터레스트](https://www.pinterest.co.kr/ideas/)

<details>
	<summary>예시</summary>
<img width="1483" alt="스크린샷 2024-02-15 오후 11 36 24" src="https://github.com/kangsinbeom/fastcampus/assets/83047601/d7ee6581-8b21-484f-bf93-c13bd4b8823e">
</details>

🎉 **필독!!! 추가설명**

- facebook 대신 카카오 소셜로그인을 연동할 것입니다. 카카오와 구글 2개와 이메일로 가입까지 총 3가지 방법이 있겠습니다.
- portal을 사용해서 구현을 해주세요~
- 회원가입 때 생년월일은 5단계로 구현해주세요

<br>
<br>

## 🛠️ 세팅

**React 세팅**: create react-app

**스타일 라이브러리**: styled-component

**eslint 및 prettier**: 자유

**전역 상태관리 라이브러리r**: ContextAPI 활용

**비동기 데이터 관리 라이브러리**: React-Query (TanStack-Query)

**유저 인증 및 데이터베이스**: firebase

<br>
<br>

## 🏆 완성조건

- ### STEP 1: 이메일 로그인 / 회원가입 구현
- ### STEP 2: 소셜로그인 구현
- ### STEP 3: hooks 패턴을 통한 관심사 분리
- ### STEP 4: react-hook-form을 통한 랜더링 성능 최적화
- ### STEP 5: 생년월일도 데이터를 받아보자! (react-day-picker)
