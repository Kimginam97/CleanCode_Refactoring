/**
 * 불변성(immutable)
 *
 * 1. 배열을 복사한다
 * 2. 새로운 배열을 반환하는 메서드를 활용한다
 * 3. Array.prototype.filter()
 * 4. Array.prototype.map()
 * 5. Array.prototype.slice()
 */

const originArray = ['123', '456', '789'];

const newArray = [...originArray];

originArray.push(10);
originArray.push(11);
originArray.push(12);
originArray.unshift(0);

originArray; //[0, '123', '456', '789', 10, 11, 12]
newArray; //[0, '123', '456', '789', 10, 11, 12]
