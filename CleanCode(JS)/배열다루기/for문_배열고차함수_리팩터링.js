/**
 * 배열 고차 함수
 *
 * 1. 원화 표기
 * 2. 1000원 초과 리스트만 출력
 * 3. 가격 순 정렬
 *
 */

const suffixWon = (price) => price + '원';
const isOverOneThousand = (price) => Number(price) > 1000;

const price = ['2000', '1000', '3000', '5000', '4000'];

function getWonPrice(priceList) {
    // map 사용하면 임시변수를 줄인다
    // let temp = [];

    // for (let i = 0; i < priceList.length; i++) {
    //     temp.push(priceList[i] + '원');
    // }

    const isOverList = priceList.map(isOverOneThousand);

    return isOverList.map(suffixWon);
}

const result = getWonPrice(price);

console.log(result); // ['2000원', '1000원', '3000원', '5000원', '4000원']
