// promise의 상태값에 따라 후속처리 진행

/**
 * 후속 메서드 3가지 - Promise 객체를 반환
 * 1. them()
 * 2. catch()
 * 3. finally()
 */

// 1. then()은 2개의 callback function을 인수로 전달받음.
// 두번째 error => 구문은 잘 사용하지 않음, 두번째 인자 값 받을 수 있다는 것을 보여주기 위함
new Promise(resolve => resolve('fulfilled'))
.then(result => console.log(result)), error => console.log(error);


// 2. catch()
new Promise((_, reject) => reject(new Error('rejected')))
.catch(error => console.log(error));

// 3. finally(), 성공 실패에 관계없이 무조건 호출됨
// 공통적으로 수행해야 할 처리 내용이 있을 때 작성
new Promise(() => {})
.finally(()=> console.log('finally'));


// promise를 활용한 비동기 요청
// const getRequestWithPromise = url => {
//     return new Promise((resolve, reject) => {
//         // 실제 비동기 처리가 수행되는 부분
//         const xhr = new XMLHttpRequest();
//         xhr.open('GET', url);
//         xhr.send();

//         xhr.onload = () => {
//             if (xhr.status === 200) {
//                 // 응답 성공
//                 resolve(JSON.parse(xhr.response));
//             } else {
//                 // 에러 처리
//                 reject(new Error(xhr.status));
//             }
//         }
//     });
// };

// getRequestWithPromise('https://jsonplaceholder.typicode.com/posts/1')
// .then(result => console.log(result))
// .catch(error => console.log(error))
// .finally(() => console.log('요청 종료'));


//promise chaning
// promise의 then(), catch(), finally()를 활용해서 콜백 헬을 해결함.
const url = 'https://jsonplaceholder.typicode.com';

const getRequestWithPromise = url => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.send();

        xhr.onload = () => {
            if (xhr.status === 200) {
                // 응답 성공
                resolve(JSON.parse(xhr.response));
            } else {
                // 에러 처리
                reject(new Error(xhr.status));
            }
        };
    });
};


// 프로미스 체이닝(Promise chaining) - then(), catch(), finally()는 promise를 반환하므로 연속적으로 호출 가능.
// getRequestWithPromise(`${url}/posts/1`)
//     .then((user) => getRequestWithPromise(`${url}/users/${user.userId}`))
//     .then(userInfo => console.log(userInfo))
//     .catch(error => console.log(err));


async function asyncFunc1() {
    const user = await getRequestWithPromise(`${url}/posts/1`);
    console.log(user);
    
    const userInfo = await getRequestWithPromise(`${url}/users/${user.userId}`);
    console.log(userInfo);
}

asyncFunc1();

const asyncFunc2 = async () => {
    const user = await getRequestWithPromise(`${url}/posts/1`);
    console.log(user);
    
    const userInfo = await getRequestWithPromise(`${url}/users/${user.userId}`);
    console.log(userInfo);
};

asyncFunc2();