/**
 * ...(spread syntax)
 * 하나로 뭉쳐있는 여러 값들의 집합을 펼쳐서(전개, 분산)하여 개별적인 값들의 목록으로 바꿈.
 * 
 * 스프레드 문법의 사용 가능 대상은 Array, String, Map, Set, DOM Collection 등으로 한정됨. 
 */


// 1. Spread with Arrays
const fruits = ['apple', 'banana'];
const otherFruits = ['kiwi', 'grapes'];

//기존의 배열 연결 방식
const allFruits = fruits.concat(otherFruits);
console.table(allFruits);


//spread 활용 방식
const MyFruits = [...fruits, ...otherFruits];
console.table(MyFruits);

//users array에 새로운 user객체를 추가하려면?
const users = [
    { id : 1, userName : 'Koo' },
    { id : 2, userName : 'Ki' },
];
console.table(users);

//기존 방식
const newUser = {id : 3, userName : 'Park'};
users.push(newUser);
console.table(users);

//spread 방식
const SecondNewUser = {id : 4, userName : 'Kim'};
const updateUsers =[...users, SecondNewUser];
console.table(updateUsers);