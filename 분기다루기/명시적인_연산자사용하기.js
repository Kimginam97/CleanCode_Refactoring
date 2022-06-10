let number;

/**
 * 
 * 1. 예측 가능하고 디버깅 하기 쉬움
 * 2. 연산자 우선 순위 (())
 */

function increment(number) {
    number = number - 1; //명시적으로 선언
    number--;
    --number;
}

function increment(number) {

    number = number + 1; //명시적으로 선언

    ++number;
    number++;
}

(몸무게 / (신장 * 신장))

// 가로를 사용해서 우선순위 지정하기
// if((isLogin && token) || user)
