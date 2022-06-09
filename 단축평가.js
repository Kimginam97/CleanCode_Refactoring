/*
    AND
*/

true && true && '도달 0' 

true && false && '도달 x'

/*
    OR
*/

false || false || '도달 O'

true || true || '도달 x'


// case 1
function fetchData() {
    if (state.data) {
        return state.data;
    } else {
        return 'Fetching...';
    }

    // OR 연산의 단축평가 사용
    return state.data || 'Fetching...';
}

// case 2
function favoriteDog(someDog) {
    // let favoriteDog;    // 임시변수

    // if (someDog) {
    //     favoriteDog = dog;
    // } else {
    //     favoriteDog = '냐옹';
    // }

    // return favoriteDog + '입니다'
    return (someDog || '냐옹') + '입니다';

}

favoriteDog() // => 냐옹
favoriteDog('포메') // => 강아지 입니다


// case 3
const getActiveUserName(user, isLogin){

    if (isLogin) {
        if (user) {
            if (user.name) {
                return user.name
            } else {
                return '이름없음'
            }
        }
    }

    if (isLogin && user) {
        if (user.name) {
            return user.name
        } else {
            return '이름없음'
        }
    }

    if (isLogin && user) {
        return user.name || '이름없음'
    }
}


