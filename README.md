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

### 배열 사용하기

``` ts
let nameArray :string[] = ['kim', 'park'];
```

---

### Object 형
``` ts
let objName :{name : string} = {name : 'kim'};
let objName :{name? : string} = { }; << name이란 속성이 확실하지 않을 때
```

### 여러가지 타입
``` ts
let _name2 :string | number = 123;
```
_name2는 string이거나 number 타입 둘 중 하나다.

---

### 타입 담아서 사용 가능
``` ts
type MyType = string | number; //보통 타입 이름 생성시 관례상 대문자
let 이름 :MyType = 123; //string 혹은 number 타입임.
```

---

### 파라미터 및 리턴값 타입 지정
``` ts
function myfun(x :number) :number
{
    return x*2;
}
```

### 튜플 타입
``` ts
type Member = [number, boolean];
let john :Member = [123, true]; //john이란 Array는 무조건 number, boolean 형식을 가져아 함.
```

### Object 자료형
``` ts
type Member2 = {
    name : string
}
let mike :Member2 = {name : "kim"};
```

### 모든 Object 속성을 string으로 지정하기
``` ts
type Member3 = {
    [key :string] : string
}
let bob :Member3 = {name : "kim", age : "123", class : "4"};
```

### class 문법
``` ts
class User {
    name;
    constructor(name :string)
    {
        this.name = name;
    }
}
```

---


