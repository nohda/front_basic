### HTML

##### HTML <!DOCTYPE> 선언

선언된 HTML버전을 웹 브라우저에 알려주는 역할을 하는 선언문이다.

##### 호이스팅

함수안에 있는 선언들을 모두 끌어올려서 해당 함수 유효 범위 최상단에 선언하는 것을 의미한다.

자바스크립트 함수는 실행되기 전에 함수 안에 필요한 변수값들을 모두 모아서 유효 범위의 최상단에 선언한다.
	자바스크립트 Parser가 함수 실행 전 해당 함수를 한 번 훑는다.
	함수 안에 존재하는 변수/함수선언에 대한 정보를 기억하고 있다가 실행시킨다.
	유효 범위: 함수 블록 {} 안에서 유효
즉, 함수 내에서 아래쪽에 존재하는 내용 중 필요한 값들을 끌어올리는 것이다.
	실제로 코드가 끌어올려지는 건 아니며, 자바스크립트 Parser 내부적으로 끌어올려서 처리하는 것이다.
	실제 메모리에서는 변화가 없다.	
https://gmlwjd9405.github.io/2019/04/22/javascript-hoisting.html



##### var 과 let



##### 클로져(closure)

지역변수(local variable) : 함수 내에서 정의한 변수

전역변수(global variable) : 윈도우  객체에 속한다.페이지 내의 모든 스크립트에서 사용할 수 있다.



표준모드롸 쿼크모드

쿠키

웹 스토리지

Html5 구성요소

### CSS



##### margin과 padding 차이점

http://blog.naver.com/pungwun/220239716987

##### position

https://medium.com/@yeon22/css-css-position-%EC%84%A4%EB%AA%85-f2c0a0b26556



##### 가상요소를 사용해서 icon적용

https://rgy0409.tistory.com/3075



##### 단위

em : 자기 자신의 폰트 사이즈에 영향을 받는다.

rem : root em 최상단 폰트 사이즈 영향을 받는다.



view port 보이는 화면

vh : view port에서 세로비율

vw : view port 에서 가로 비율(백분율 50vw 가로에서 절반만 영역에 해당된다.)





### Javascript

##### 문법



Import할때 Pascal 따르기 

```js
export function CreateTable(){
    return(
        <div>
            test 입니다
        </div>
    );
}
```

```js
import {CreateTable,functionName} from '../actions/table'
```



```js
export default function CreateTable(){
    return(
        <div>
            test 입니다
            {/* <h1>0</h1> */}
            {/* <button>+1</button> */}
            {/* <button>-1</button> */}
        </div>
    );
}

// export default createTable;
```

```js
import CreateTable,{functionName} from '../actions/table'
```

https://techterms.com/definition/pascalcase





table

리액트 <tbody> 사용 

```js
<table style={tableStyle}>
   <tbody>
       <tr style={rowStyle}>
           <td style={leftColumnStyle}>Battery</td>
           <td><StatsBar/></td>
        </tr>
   </tbody>
</table>
```





### React

##### React create app

```js
npx create-react-app my-app
cd my-app
npm start
```



##### 확장 프로그램

01. ES7 React/Redux/GraphQL/React Native snippets

![img](https://blog.kakaocdn.net/dn/boYNGX/btqz2DK6Oeg/ffdCzG6l5Lbl1clsbG8iB1/img.png)



리액트 개발자라면 거의 필수입니다.

코드 편집기에 아래 키워드로 구조를 만들어버릴수 있는 snippets을 제공합니다. 예를들면,

- rce : class componet 생성
- rafce : allow function component 생성
- rfce : function component 생성





### etc.

##### Window 객체란 무엇인가?

https://mber.tistory.com/55



##### 기술면접

[1. Must-Know-About-Frontend](https://github.com/baeharam/Must-Know-About-Frontend)
[2. tech-interview-for-developer](https://github.com/gyoogle/tech-interview-for-developer)
[3. tech-interview-handbook](https://github.com/yangshun/tech-interview-handbook)
[4. 프론트엔드 개발자 면접 질문(기술면접) 정리](https://sunnykim91.tistory.com/121)
[5. 프론트엔드 개발자 면접 질문 모음](https://mber.tistory.com/2)
[6. 프론트엔드 개발자 기술면접 인터뷰 질문 모음](https://realmojo.tistory.com/300)
[7. 자바스크립트 기술면접 정리](https://m.blog.naver.com/z1004man/222051088407)

