/*
    배열 메서드의 반환 패턴

    1. 원본의 직접적인 수정(mutator method).
    2. 원본은 변경하지 않고, 새로운 값을 생성하여 반환(accessor method).
 */

// 원본을 변경하지 않고, 새로운 값을 반환하는 Accessor methods.

//1. concat(), concatenation(접합, 연결) : 두 개 이상의 배열을 합쳐서 새로운 배열을 반환.
console.group('concat()')
const disney = ['mickey','mini',' stitch','donald duck'];
const ghibli =['howl', 'totoro','mononoke','kiki'];

const animations = disney.concat(ghibli);
console.log(animations);

console.log(disney);
console.log(ghibli);
console.groupEnd();


//2. join() : 모든 배열 요소들을 string으로 변환
console.group('join');
let fish = ['shark',' whale','koi','nemo','defense'];
console.log(typeof fish);
const fishString = fish.join(); //join 내부에 별도의 파라미터를 지정하지 않으면, (comma)를 기준으로  합쳐짐
console.log(typeof fishString, fishString);
console.groupEnd();


//3. slice() : 일부 요소들을 잘라서(가져다가) 새로운 요소로 반환
console.group('slice()');
console.log(fish);
let slicedFishArr = fish.slice(2);
console.log(slicedFishArr);

slicedFishArr = fish.slice(2,4);
console.log(slicedFishArr);
console.groupEnd();

//4. indexOf() : 배열에서 찾고자 하는 요소의 가장 첫 번째 인덱스 위치만 반환.(찾고자 하는 요소가 중복이면 첫번재 인덱스를 반환)
console.group('indexOf()');
fish = ['shark','whale','koi','whale','nemo'];
console.log(`fish array에서 'whale'의 가장 첫 번째 인덱스의 위치 : ${fish.indexOf('whale')}`);

//찾고자하는 요소가 없을 경우 -1 출력
console.log(`한치가 있나요? ${fish.indexOf('hanchi')}`);
console.groupEnd();


// 5. lastIndexOf() : 배열에서 찾고자 하는 요소의 가장 마지막 인덱스 위치를 반환. 
console.group('lastIndexOf()');
console.log(fish);
console.log(`'whale'이 위치한 마지막 인덱스 위치 : ${fish.lastIndexOf('whale')}`);
console.groupEnd();