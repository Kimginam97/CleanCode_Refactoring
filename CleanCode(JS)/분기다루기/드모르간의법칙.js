/**
 * 드모르간의 법칙
 * true is not true
 * false is not false
 */

const isValidUser = true;
const isValidToken = true;

if (isValidToken && isValidUser) {
    console.log('로그인 성공!');
}


// 요구상황이 나올경우 복잡
if (!(isValidToken && isValidUser)) {
    console.log('로그인 실패!');
}


if (!(A && B)) {
    성공
}

if (!A || !B) {
    성공
}

if (!isValidToken || !isValidUser) {
    console.log('로그인 실패!');
}


if (!(A || B)) {
    성공
}

if (!A && !B) {
    성공
}





