# tsStudy
TypeScript Study

---

## 타입스크립트란?

TypeScript : 자바스크립트 대용품.

Type 부분에서 엄격함. 크기가 좀 큰 프로젝트를 다룰 때 사용함.

JS는 Dynamic Typing을 제공하기 때문에 Type에 관련해서 유연함.

하지만 코드를 길 게 짤 때 자유도와 유연성은 오히려 독이 된다.


TypeScript를 쓰면 타입 엄격히 검사함.


---


## 타입스크립트 설치

1. [Node.js](https://nodejs.org/ko/) 최신 버전 설치
2. vsCode 에디터 준비
3. 터미널에서 `npm install -g typescript`

`.ts` 파일로 생성해야함.

`tsconfig.json` 파일 생성 : 컴파일 옵션임.
``` json
{   
    "compilerOptions" : {     
      "target": "es5",     
      "module": "commonjs",  
    } 
}
```

브라우저는 `.ts` 파일을 못 읽음. 그래서 **ts파일을 js파일로 변환해야함.**

`tsc -w` 명령어 입력하면 자동으로 변환됨. ts파일 저장할 때마다 js파일이 자동으로 갱신됨.

---

## 문법

### 변수 타입 지정
``` ts
let _name :string = 'suheon';
```
타입으로 지정 가능한 것
``` ts
string, number, boolean, null, undefined, bigint, [], {} 등
```
---