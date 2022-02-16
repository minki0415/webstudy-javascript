console.log('-----------산술 연산자-------------------');

//산술 연산자
console.log(5 + 5);
console.log(5 - 10);
console.log(5 / 2);
console.log(5 * 4);
console.log(10 % 3);
console.log(2 ** 2);

console.log('-----------후위 연산-------------------');
// 증감 연산자
let age = 5;

// 후위 연산 : 출력문 실행 종료 후 연산
console.log(age++); // age = age+1; -> 5 출력 후 ++
console.log(age++); // age = age+1; -> 6 출력 후 ++
console.log(age--); // age = age-1; -> 7 출력 후 --
console.log(age--); // age = age-1; -> 6 출력 후 --
console.log(age); // age -> 5


console.log('-----------전위 연산-------------------');
// 전위 연산 : 연산을 먼저 진행한 후 출력문 실행
console.log(++age); // ++ 후 출력 6
console.log(--age); // --후 출력 5


console.log('-----------관계 연산자-----------------');
// 관계연산자(결과 값이 true or false가 나오도록 하는 문(statement)을 조건식(condition)이라고 함.)
const result = age > 4;
console.log(result); // true
console.log(age <=3); // false


console.log('-----------동등 연산자-------------------');
// 동등 연산자
console.log(1 == '1'); // true, 타입이 서로 다를 경우, 암시적(묵시적, implicit)으로 변환하여 비교함
console.log(1 === '1'); // false, 엄격한 비교(strict mode)


console.log('-----------논리 연산자-------------------');
// 논리 연산자
console.log(true && true); // and연산(~이고), true
console.log(5 > 3 && 2 === 2); //true
console.log(5 > 3 || 2 !== 2); //or연산(~이거나), true

console.log('-----------상황 연산자-------------------');
// 상황 연산자
const yourAge = 25;
const berverage = yourAge >= 20 ? 'Soju' : 'Sprite';
console.log(berverage);


console.log('-----------할당 연산자-------------------');
// 할당 연산자(우선순위가 거의 아래에 있음.), 변수에 값을 할당(assignment)할 때 사용하는 연산자.
let myAge = 40;
console.log(myAge);