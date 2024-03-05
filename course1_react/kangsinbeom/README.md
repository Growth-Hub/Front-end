# 1️⃣ 페이지네이션

## ✅ 내가 적용한 최적화 사항

- useCallback 과 useMemo를 사용한 메모이제이션 (랜더링 성능 개선)

- Suspense와 skeleton UI를 통한 사용자 경험 증가

- prefetch를 통한 데이터 미리 불러오기

<br>
<br>

## ✅ 공유하고 싶은 기술

- Suspense & usSuspenseQuery (데이터 불러오기 및 사용자 경험 증가)

- HOC 패턴 (가독성 증가)

- hooks 패턴 (관심사 분리)

- tanstack query toolkit

<br>
<br>

## ✅ 공부 방법

### 📦 Tanstack-query 공식 홈페이지 참고

- 공식 홈페이지에서 useQuery에 관련된 내용을 찾아서 가지고 있는 속성값에 대해서 천천히 살펴보았음.

- 적용가능한 부분 혹은 필요하다 생각되는 부분에 대해서 적용을 하였음

- suspense를 통해서 사용자 경험을 올릴 수 있을 것이라고 생각되어서 새롭게 suspense를 적용할 수 있는 방법을 찾아보았음

- useSuspencseQuery를 통해서 새롭게 코드를 구현

### 📦 Chat GPT를 활용한 에러문 검증

- 에러 문구 및 코드를 보고 이해가 가지 않는다면 Chat GPT에 검색 후 구글링을 통하여 교차로 검증하면서 에러문에 대해 해결 방안을 찾으려 노력하였음

- 에러문에 나온 키워드를 살펴보면서 해결 방법을 강구하였음

### 📦 결과 이미지

<details>
	<summary>이미지</summary>
	<div markdown="1">  
    ![localhost_3000_ (1)](https://github.com/NextGen-Coders/CS-Study-2024/assets/83047601/8f621120-9db1-4714-a17e-abd9bfb34c2b)
	</div>
</details>

---

---

# 2️⃣ 인피니티 스크롤

## ✅ 내가 적용한 최적화 사항

- useCallback 과 useMemo를 사용한 메모이제이션 (랜더링 성능 개선)

- useSuspenceInfiniteQuery를 통한 suspence와 infinitescroll 구현

<br>
<br>

## ✅ 공유하고 싶은 기술

- useSuspenceInfiniteQuery

- gird를 통한 Masonry 구현

<br>
<br>

## ✅ 공부 방법

### 📦 Tanstack-query 공식 홈페이지 참고

- 공식 홈페이지에서 infinite scroll 관련된 내용을 찾아서 예제를 보면서 필요한 정보에 대해 수집을 하였음

- 구글링을 통해서 추가적으로 어떻게 최적활를 할 수 있을지 고민하였고 프리패치를 하는 방법에 대해서 고민을 많이하였음

- 내용에 대한 이해를 잘못한 부분이 있어서 infinite scroll 다음 데이터를 미리 불러와서 사용자의 UX를 개선시키겠다는 생각을 하는 것보다 trigger를 좀 더 상단에 위치하여 일찌감치 데이터를 불러옴으로써 개선시키는 것이 좀 더 docs의 예제와 사용법의 내용이라는 것을 알게 됨

### 📦 Masonry에 대한 구글링 및 구현

- 수현님(조원)의 구글링으로 먼저 Masonry에 대한 용어를 알 수 있었고 이를 토대로 구글링을 통해 좋은 레퍼런스 및 개념을 잡을 수 있는 글을 알 수 있었음 - [관련 레퍼런스](https://medium.com/@andybarefoot/a-masonry-style-layout-using-css-grid-8c663d355ebb)

- 천천히 구현을 하면서 모르는 부분에 대해서 구글링을 다시하며 gird를 통해 구현해야하는 이유와 특징들을 알 수 있었음

### 📦 Chat GPT를 활용한 에러문 검증

- 에러 문구 및 코드를 보고 이해가 가지 않는다면 Chat GPT에 검색 후 구글링을 통하여 교차로 검증하면서 에러문에 대해 해결 방안을 찾으려 노력하였음

- 에러문에 나온 키워드를 살펴보면서 해결 방법을 강구하였음

### 📦 결과 이미지

<details>
	<summary>이미지</summary>
	<div markdown="1">  
    ![localhost_3000_ (2)](https://github.com/kangsinbeom/Algorism/assets/83047601/5f688fe6-315a-4162-9f34-0a4c1adb4599)
	</div>
</details>
