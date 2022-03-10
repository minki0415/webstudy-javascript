// XMLHttpRequest처럼 HTTP 요청 전송 기능을 지원하는 Web API
// 사용법이 간편, 프로미스 지원

// const promise = fetch(url, [options]);
// https://developer.mozilla.org/en-US/docs/Web/API/fetch

// fetch()는 HTTP 응답을 나타내는 response 객체를 감싼 promise 객체를 반환함.
// fetch() 첫 번쨰 인수로, HTTP 요청을 전송할 URL만 입력(기본 요청은 GET 방식)

const url = 'https://jsonplaceholder.typicode.com/todos/1';

const promise = fetch(url)
.then((response) => console.log(response));

// 반환한 객체가 프로미스인지 확인하는 함수 
// https://www.debugpointer.com/check-if-an-object-is-a-promise

const promise2 = fetch(url)
.then(response => response.json())
// Response.prototype.json() : 활용할 객체(HTTP response body)로 변환해줌(역직렬화)
.then(json => console.log(json));