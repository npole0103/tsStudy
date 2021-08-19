let _name :string = 'suheon'; //string 타입

let nameArray :string[] = ['kim', 'park']; //string Array

let objName :{name : string} = {name : 'kim'}; // Object

let objName2 :{name? : string} = { }; //속성이 애매할 때 사용

let _name2 :string | number = 123; //string 혹은 number 타입

//타입 담아서 사용 가능
type MyType = string | number; //보통 타입 이름 생성시 관례상 대문자
let 이름 :MyType = 123; //string 혹은 number 타입임.

//파라미터 및 리턴값 타입 지정
function myfun(x :number) :number
{
    return x*2;
}

//튜플 타입
type Member = [number, boolean];
let john :Member = [123, true]; //john이란 Array는 무조건 number, boolean 형식을 가져아 함.

//Object 자료형
type Member2 = {
    name : string
}
let mike :Member2 = {name : "kim"};

//모든 Object 속성을 string으로 지정하기
type Member3 = {
    [key :string] : string
}
let bob :Member3 = {name : "kim", age : "123", class : "4"};


//class 문법
class User {
    name;
    constructor(name :string)
    {
        this.name = name;
    }
}