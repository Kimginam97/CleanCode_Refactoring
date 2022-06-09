function example() {
    return condition1 ? value1
        : condition2 ? value2
            : condition3 ? value3
                : value4;        
}

function example() {
    if (condition1) { return value1; }
    else if (condition2) { return value2; }
    else if (condition3) { return value3; }
    else { return value4; }


    // 조건이 많다면 switch 문 고려하기
    const temp = condition1; condition2; condition3;

    switch (key) {
        case value:
            break;
        default:
            break;
    }
}

const example = condition1
    ? (a === 0 ? 'zero' : 'positive')
    : 'negative';



const welcomeMessage = (isLogin) => {
    const name = isLogin ? getName() : '이름없음';

    // if (isLogin) {
    //     return `안녕하세요 ${getName() }`;
    // }

    return `안녕하세요 ${name}`;
};


// bad case 
function alertMessage(isAdult) {
    isAdult
        ? alert('입장이 가능합니다.')   // undefined
        : alert('입장이 불가능합니다.');    // undefined
    
    // not bad case
    if (isAdult) {
        alert('입장이 가능합니다.');
    } else {
        alert('입장이 불가능합니다.');
    }
    
}

function alertMessage(isAdult) {
    return isAdult ? '입장이 가능합니다.' : '입장이 불가능합니다.';
}



