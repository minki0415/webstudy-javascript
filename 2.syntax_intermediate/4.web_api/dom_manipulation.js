console.log(document); //HTML 문서에 대한 기본 정보만 출력
console.dir(document); // property까지 조회

console.log(window.document);
console.log(window.document === document);

// DOM의 조작
console.log(document.querySelector('#main-title'));
// console.log(document.getElementById('main-title'));

const h1 = document.querySelector('#main-title');
// h1의 텍스트를 바꾸기 위해선 어떤 property를 써야할까?

console.log(typeof h1.innerText, h1.innerText);

//여기서부터는 dev tool에서 실습
document.getElementsByClassName('list-item');

//CSS Select를 통한 조회, 선택자 기호 필수.
document.querySelector('#main-title');
document.querySelector('.list-item');

document.querySelectorAll('.list-item'); //NodeList
document.querySelectorAll('.list-item')[0];

document.querySelector('ul li'); // first element
document.querySelector('ul li:first-of-type');  //first element
document.querySelector('ul li:last-of-type');  // last element : ul li:last-of-type

