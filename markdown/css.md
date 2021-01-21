## css 강의 순서

#### **소개 및 방법**

css 간단한 소개

**CSS 연결 방법의 종류**

- inline style

```html
<div style="color:red; font-size:20px;">hello</div>
```

- head style

```html
<head>
  <style>
    div{
      color:red;
      font-size:15px;
      font-weight:bold;
    }
  </style>
</head>
<body>
	<div>
    Hello
  </div>  
</body>
```

- link

```html
<link rel = "stylesheet" href="style.css">
```

: 아래쪽에 위치 할 수록 우선순위가 높아짐



#### 선택자 및 우선순위

##### **선택자 종류**

| 선택자                | 기호            | Description                                |
| --------------------- | --------------- | ------------------------------------------ |
| 전체선택자            | *               |                                            |
| 태그선택자            | <A>             |                                            |
| id 선택자             | #A              |                                            |
| Class 선택자          | .A              |                                            |
| 일치선택자            | AB              | 선택자 여러개 선택                         |
| 자식 선택자           | A>B             | 부모요소 > 자식요소                        |
| 후손,하위,자손 선택자 | A B             |                                            |
| 형제 선택자           | A+B             | 부모요소를 공유, 다음에 인접한 요소 한개   |
| 일반 형제 선택자      | A~B             | 다음 형제 요소 모두 선택                   |
| NTH child             | A:nth-child(n)  | 형제요소 중 n번째 요소를 선택              |
| 속성 선택자           | [attr = value]  | 속성 값으로 elements를 선택                |
| 속성(시작) 선택자     | [attr^ = value] | 속성 값에서 "특정값"으로 시작하는 elements |
| 속성(마지막) 선택자   | [attr$ = value] | 속성 값에서 "특정값"으로 끝나는 elements   |



##### **선택자 우선순위**

| 선택자               | 우선순위 |
| -------------------- | -------- |
| !important           | 1        |
| HTML 인라인 선언방식 | 2        |
| ID 선택자            | 3        |
| class 선택자         | 4        |
| tag 선택자           | 5        |
| * 전체 선택자        | 6        |
| 상속 선택자          | 7        |



##### **가상요소 선택자** (예시)

| 선택자:가상요소 | action                            |                   |
| --------------- | --------------------------------- | ----------------- |
| 선택자:hover    | 마우스를 올렸을때                 |                   |
| 선택자:active   | 마우스를 클릭 했을때              |                   |
| 선택자:focus    | 대화형 콘텐츠에서 포커스 되었을때 | Ex) <input> <img> |

https://developer.mozilla.org/ko/docs/Web/CSS/Pseudo-elements



##### **상속 개념**

태그간의 상속 개념 설명 -> html 예시로 선택자 적용 예시 연계하여 설명

```html
<body>
    <div>1 //조상
        <div>1-1 //부모
            <div>1-1-1</div> //자식 or 자손
            <div>1-1-2</div> //자식 or 자손
            <div>1-1-3</div> //자식 or 자손
        </div>
        <div>1-2
            <div>1-2-1</div> } //형제
            <div>1-2-2</div> } //형제
            <div>1-2-3</div> } //형제
        </div>
    </div>
</body>
```



#### Style



##### **글자 꾸미기(font style)**

- font-family : 글꼴

- font-style : 서체(이탤릭체, 기울기)

- font-variant : 대문자/소문자

- font-weight : 두께

- font-size : 크기



##### **단위**

- px : 픽셀단위
- em : 배수단위 -> 해당 글꼴의 기본크기 = 1em 상대적인 크기
- % : 퍼센트 -> 기본크기 100% 기준



##### **크기**

- width : 너비

- height : 높이

- max-width : 최대 너비

- min-width : 최소 너비

- max-height : 최대 높이

- min-height : 최소 높이

  

##### **색**

- color : 글자의 색을 바꾼다.
- Background-color : 요소의 색을 바꾼다.



##### **margin, padding,border(테두리)**

**<img src="/Users/noda/Downloads/img_css_boxmodel.png" alt="img_css_boxmodel" style="zoom:67%;" />**

: width와 height에는 margin과 padding border의 크기는 포함되지 않는다.

- Margin : 테두리와 이웃하는 요소 사이의 간격, background-color에 영향을 받지 않는다.
- Padding : 내용과 테두리 사이의 간격

```css
a{
  margin: 10px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 2px;
}
```



 **display 속성**

**inline, block**

Inline : 해당 컨텐츠의 크기만큼의 공간을 차지한다. <span> <a> <img>

Block : 해당하는 라인 모든 너비를 차지한다. <div> <h1> <p> <ul> <form>



**display 속성 변경**

```css
div{
	display: inline; //속성을 inline으로 변경한다.
  display: block; //속성을 block으로 변경한다.
  display: inline-block; //inline이지만 block처럼 너비,높이,margin 지정 가능하다.
}
```

**display 숨기기**

```css
div{
  display: none;//웹페이지와 레이아웃에 영향을 끼치지 않는다.
  또는
  visibility: hidden;//웹페이지에서 숨겨지며, 레이아웃에는 존재한다.
}
```



**position**

 : 실습하면서 코드공유

| Position                     |                                                              |                                                              |
| ---------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 정적 위치(static position)   | 배치가 불가능하다. (default 값)                              |                                                              |
| 상대 위치(relative position) | static위치를 기준으로 위치를 설정 한다.                      | 자기가 원래 있었던 자리에서 top,bott...만큼 이동한다.        |
| 고정 위치(fixed position)    | 보이는 화면을 기준으로 고정된 위치, 같은 곳에 위치한다.      |                                                              |
| 절대 위치(absolute position) | 설정된 조상요소를 기준으로 위치를 설정한다. 조상이 없다면 body요소가 기준이 된다. | 위치상의 부모요소를 기준으로-> 부모라고 판단되는 요소에 position 정의 해야함 (없다면 강제적으로 position:relative라고 정의하기 ) |
| sticky position              | 스크롤 영역 기준으로 배치한다. 지정값이 한개 이상 필요, IE 지원불가. |                                                              |



#### 레이아웃

**flex**

: 레이아웃에서의 수평 또는 수직을 정렬하는 기능이다.



<img src="https://heropy.blog/images/screenshot/css-flexible-box/flex-base.jpg" alt="Flex" style="zoom:50%;" />

생활코딩 : https://codepen.io/enxaneta/pen/adLPwv

헤로피테크 : https://heropy.blog/2018/11/24/css-flexible-box/



**float**

: 객체를 오른쪽 또는 왼쪽으로 정렬할때 사용된다.

Float해제 -> clear : none/left/right/both

![스크린샷 2021-01-21 오후 2.06.22](/Users/noda/Library/Application Support/typora-user-images/스크린샷 2021-01-21 오후 2.06.22.png)

![스크린샷 2021-01-20 오후 3.50.01](/Users/noda/Desktop/스크린샷 2021-01-20 오후 3.50.01.png)

개인 블로그 : https://techbug.tistory.com/181

##### **HTML 레이아웃**

<img src="/Users/noda/Downloads/hrml layout.jpeg" alt="hrml layout" style="zoom:80%;" />

##### **그리드**

<img src="/Users/noda/Downloads/그리드.jpg" alt="그리드" style="zoom:50%;" />





```css
a{
	didplay: grid; //dispay를 그리드로 설정
  grid-template-rows: 200px 200px 400px; //그리드의 행 배치
  grid-template-columns: 200px 200px 400px; //그리드의 열 배치

  row-gap: 10px;
  column-gap: 10px;
  or
  gap: 10px;(row, column 그리드 간격 설정)
}
```

