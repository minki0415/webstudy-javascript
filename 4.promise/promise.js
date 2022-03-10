// ES6, Promise
// Promise는 비동기 처리 상태 및 처리 결과를 관리하는 객체

// const isSuccess = false;
// const promise = new Promise((resolve, reject) => {
//     //비동기 처리는 생성자 함수로 전달받은 콜백함수 내부에서 수행됨.
//     //비동기 처리가 성공하면 콜백 함수의 인자로 전달받은 resolve() 호출됨.
//     // 처리 실패 시 reject()호출됨
//     if (isSuccess) {
//         resolve('비동기 처리에 따른 응답 결과 값을 작성한 부분(응답받은 데이터)')
//     }else{
//         reject('비동기 처리 실패에 대한 예외처리 작성하는 부분')
//     }
// });
// promise 생성자 함수는 인자값으로 콜백 함수를 전달 받음.

// console.log(promise);

// 비동기 처리의 진행 상태(경과)를 나타내는 별도의 상태 정보(state)를 가짐.

// 세가지 state.
// 1. pending : 비동기 처리가 아직 수행되지 않은 상태, 프로미스가 생성된 직후 기본 상태
// 2. fullfilled : 비동기 처리가 수행된 상태(성공), resolve() 호출
// 3. rejected : 비동기 처리가 수행된 상태(실패). reject() 호출

// promise를 활용한 비동기 요청
const getRequestWithPromise = url => {
    return new Promise((resolve, reject) => {
        // 실제 비동기 처리가 수행되는 부분
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.send();
        xhr.onload = () => {
            if(xhr.status === 200) {
                //응답성공
                resolve(JSON.parse(xhr.response));
            }else{
                //에러 처리
                reject(new Error(xhr.status));
            }
        }
    });
}

console.log(getRequestWithPromise('https://jsonplaceholder.typicode.com/posts/1'));
