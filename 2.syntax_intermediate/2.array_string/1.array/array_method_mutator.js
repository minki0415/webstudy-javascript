/*
    배열 메서드의 반환 패턴
    1. 원본은 변경하지 않고, 새로운 배열을 생성해서 반환(accessor method)
    2. 원본의 직접적인 수정이 이루어짐(mutator method)
*/

let fish = ['piranha',' koi','nimo','clown-fish'];

// fish가 무슨 타입인지 확인하고 싶다.
console.group('object의 타입 확인')
console.log(typeof fish);
console.log(Array.isArray(fish));
console.groupEnd();

// 1. 원본을 직접 수정하는 mutator methods.

// 1. pop() : 원본 배열의 가장 끝 요소 제거, 해당 값 반환, 추가 파라미터는 없음
console.group('pop()');
console.log(`제거된 값 : ${fish.pop()}`);
console.log(fish);
console.groupEnd();

// 2. shift() : 원본 배열의 가장 첫번재(왼쪽 기준, 앞) 요소 제거.
console.group('shift()');
console.log(`제거된 값 : ${fish.shift()}`);
console.log(fish);
console.groupEnd();

// 3. push() : 원본 배열의 가장 끝(오른쪽)에 새로운 요소 추가. 배열의 길이 반환
console.group('push()');
console.log(`새로운 값이 추가된 후 배열의 길이 : ${fish.push('shark')}`);
console.log(fish);
console.groupEnd();

// 4. unshift() : 원본 배열의 가장 앞에 요소 추가.
console.group('unshift()');
console.log(`추가된 후 배열의 길이(length) : ${fish.unshift('defense')}`);
console.log(fish);
console.groupEnd();

// 배열의 끝에서 제거하는게 효율적임, 배열의 앞에서 제거할 경우 뒤에 있는 값들을 앞으로 땡겨서 새롭게 인덱싱 하는 과정이 수행됨

// 5. splice() : 정해진 위치에 요소를 추가하거나 제거, 추가와 제거를 동시에도 가능

//splic()를 활용한 요소 추가.
console.group('splice()를 활용한 요소 추가');
console.log(fish.splice(1, 0, 'whale'));
console.log(fish);

//splice()를 활요한 요소 제거.
//세 번째 파라미터였던 'whale'을 작성하지 않으면 요소의 제거가 가능
console.log(fish);
console.log(fish.splice(1, 2)); // splice(지정된 인덱스, 지정된 인덱스 위치부터 삭제할 요소의 수), 제거한 배열 요소 반환
console.log(fish);

// 추가와 제거를 동시에 하는 법
console.log('splice()를 활용한 추가와 제거 동시 진행');
fish = ['shark','whale',' koi','nimo','defense']
console.log(fish);
console.log(fish.splice(1,2,'sakana')); // 1번째 요소부터 2개의 요소 삭제 후 1번 인덱스에 'sakana' 추가
console.log(fish);