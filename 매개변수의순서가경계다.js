/*
    매개변수의 순서가 경계다

    호출하는 함수의 네이밍과 인자의 순서의 연관성을 고려한다

    취약한 환경을 만들지 않게하기위해서
    1. 매개변수가 2개를 넘지 않도록 만든다
    2. arguments, rest parameter 고려
    3. 랩핑하는 함수를 하나 만든다
    4. 매개변수를 객체에 담아서 넘긴다
*/

// 3
function someFunc(someArg1, someArg2,someArg3, someArg4){
}

function getFunc(someArg1,someArg2){
    someFunc(someArg1,someArg2);
    someFunc(someArg1,undefined,someArg3);
}


// 2개를 넣을경우 시작과 끝이 존재
// 매개변수를 2개가 넘지 않도록 작성
genRandomNumber(1, 50);
getDates('2021-10-10','2021-10-31');
getShuffleArray(1, 5); 