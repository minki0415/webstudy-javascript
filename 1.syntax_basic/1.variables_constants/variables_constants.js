/**
 * 
 * 변수 키워드의 종류
 *  var, let, const
 * 
 * 변수와 상수(Variables & Constants)
 * Java와 마찬가지로 변수의 선언(Declaration) 과 초기화(Initialization) or 정의(Definition)
 * 
 */

// 변수 (Varialbe)
// 호이스팅(Hoisting)의 개념 , 함수안의 선언들을 모두 끌어올려서 최상단에서 선언하는 것
console.log(tiger); // undefined, 변수 호이스팅 때문에 최상단에 등록됨.
var tiger;

// let : var의 대체로 사용하는 키워드
// console.log(rabbit);
// let rabbit

//변수 네이밍 컨벤션(Naming convention) : Camelcase
let userName = 'Kim';
console.log(userName); // shortcut : log
// document.write(userName); Chrome 개발자도구에서 확인, 화면에 출력해주는 기능

userName = 'Park'
console.log(userName)

//상수(Constant)
const allUsers = 20;
console.log(allUsers);

// const allUsers = 20; //상수 키워드로 쓴 const 변수에는 재할당 불가능 
console.log(allUsers);