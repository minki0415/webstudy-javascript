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

console.table(book);