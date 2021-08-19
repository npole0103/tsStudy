var _name = 'suheon'; //string 타입
var nameArray = ['kim', 'park']; //string Array
var objName = { name: 'kim' }; // Object
var objName2 = {}; //속성이 애매할 때 사용
var _name2 = 123; //string 혹은 number 타입
var 이름 = 123; //string 혹은 number 타입임.
//파라미터 및 리턴값 타입 지정
function myfun(x) {
    return x * 2;
}
var john = [123, true]; //john이란 Array는 무조건 number, boolean 형식을 가져아 함.
var mike = { name: "kim" };
var bob = { name: "kim", age: "123", class: "4" };
//class 문법
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
