/**
 * javascript 배열은 객체다
 */
const arr = [1, 2, 3];

arr[3] = 'test';
arr['property'] = 'string value';
arr['obj'] = {};
arr[{}] = [1, 2, 3];
arr['func'] = function () {
    return 'hello';
}

for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

arr

// case 2
const arr2 = [1, 2, 3];

Array.isArray(arr2);

if (arr2.length) {
    console.log('배열 확인');
}

if (arr2 in Array) {
    console.log('배열 확인');
}

if (arr2 instanceof Array) {
    console.log('배열 확인');
}