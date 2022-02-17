/*
    객체의 일반적인 정의, 목적
    여러 변수들을 의미 단위로 묶어서 사용할 수 있는 방식 중 하나.

    JS에서 원시 값(Primitive value)을 제외한 모든 것이 객체
    array, function...

    기본적인 차이는 원시 값은 하나의 값만 나타내지만,
    객체는 다양한 타입의 값들을 하나의 단위로 구성한 복합 자료구조.

    원시값은 변경 불가능한 값(immutable value)
    객체는 변경 가능한 값(mutable value)

    객체는 프로퍼티(property, 속성)로 구성된 집합.
    property는  키(key)와 값(value)으로 구성됨.

    JS에서 사용할 수 있는 모든 값은 프로퍼티 값이 될 수 있음.
    함수는 일급 객체이기 때문에 값이 될 수 있고, 따라서 객체의 property가 될 수 있음(bark property 참조.)
    property 값이 함수일 경우 함수와 구분하기 위해 메서드라고 부름.
*/

//객체 리터럴 방식을 활용한 객체 생성
console.log('-----------객체 리터럴 방식을 활용한 객체 생성------------')
let dog = {
    dogName : 'toto',
    fruit : 'kiwi',
    bark : function() {
        console.log(`왈왈! ${this.fruit}가 먹고싶어`);
        //this : 객체 자신을 가리키는 참조 변수
    }
};

console.log(dog);
console.table(dog);
console.log(`dog는 ${typeof dog} 타입`);

const emptyObject = {}; // 빈객체 생성 
console.log(emptyObject);

dog.bark(); //property가 함수일 경우 호출 시 ()까지 작성해야 함.

//property의 조회(접근)
console.log('-----------property의 조회(접근)------------')
console.log(dog.dogName);
console.log(dog['fruit']);


//property의 동적 추가(존재하지 않는 property에 값을 할당하면 추가됨)
console.log('-----------property의 동적 추가------------')
dog.age = 2;
console.table(dog);


//property의 삭제(delete 연산자)
console.log('-------property의 삭제(delete 연산자)--------')
delete dog.age; // dog.age는 피연산자
console.table(dog);