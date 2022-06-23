/**
 * 유사 배열 객체
 */

const arrayLikeObject = {
    0: 'HELLO',
    1: 'WORLD',
    length: 2,
};

const arr = Array.from(arrayLikeObject);

console.log(Array.isArray(arrayLikeObject)); // false
console.log(Array.isArray(arr)); // true

// ex2

function generatePriceList() {
    console.log(Array.isArray(arguments));

    for (let index = 0; index < arguments.length; index++) {
        const element = arguments[index];
        console.log(element);
    }
    // Map, forEach, reduce, filter, every, some - 고차함수

    // return arguments.map((arg) => arg + '원');
}

generatePriceList(100, 200, 300, 400, 500, 600);

function generatePriceList() {
    return Array.from(arguments).map((arg) => arg + '원');
}

generatePriceList(100, 200, 300, 400, 500, 600);
