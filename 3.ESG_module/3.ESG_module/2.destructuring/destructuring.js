/**
 * Destructuring
 * Destructuring assignment(분해할당)은 객체의 프로퍼티나 배열을 변수로 분해해주는 것을 의미함
 * -> 코드를 보다 간결하게 해줌.
 * 
 * 1. Object Destructuring
 * 2. Array Destructuring
 */


// 1. Object Destructuring
/**
 * 객체명 : book
 * id : 1 
 * title : The Great Gatsby
 * pubDate : 10/04/1925
 */

const book = {
    id : 1,
    title : 'The Great Gatsby',
    pubdate : '10/04/1925'
}

// 기존방식
// const id = book.id;
// const title = book.title;
// const pubDate = book.pubdate;

// 1. Object Destructuring 방식
// const {bookId, bookTitle, bookPubDate} = book;
// console.log(bookId, bookTitle, bookPubDate);

// 결과 : undefined undefined undefined -> 변수는 객체의 프로퍼티 명과 동일한 이름으로 작성해야함.
const {id, title, pubdate} = book;
console.log(id, title, pubdate);

// destructuring은 원본 객체를 수정하지 않음
console.log(book);

// 다른 이름으로 저장하고 싶을 경우, 
// id -> book Id / title -> bookTitle, pubdate -> bookPubdate
const { id : bookId, title : bookTitle, pubdate : bookPubdate} = book;
console.log(book);


// 2. Array Destructuring : 배열의 요소들을 개별 변수들로 분해.
const date = ['1970', '12', '01'];

// JS Array는 순서를 보장받아야하기 때문에 인덱싱 활용하였음.
// const year = date[0];
// const month = date[1];

// Array Destructuring 방식
const [year, month, day] = date;
console.log(year, month, day);