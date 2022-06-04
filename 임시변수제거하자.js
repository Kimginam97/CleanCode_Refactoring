// 임시변수를 제거하자

// 임시변수 result (X)
function getElements(){
    const result = {};

    result.title = document.querySelector('.title');
    result.text = document.querySelector('.text');
    result.value = document.querySelector('.value');

    return result;
}

// 임시변수 없는것 (코드가 더 명확하다) (O)
function getElements(){
    const result = {
        title: document.querySelector('.title'),
        text: document.querySelector('.text'),
        value: document.querySelector('.value'),
    };

    return result;
}

// 가져와서 반환 (O)
function getElements(){
    return {
        title: document.querySelector('.title'),
        text: document.querySelector('.text'),
        value: document.querySelector('.value'),
    };
}

// 임시변수  추가적인 기능넣을때 심각한 영향을줌 (X)
function getDateTime(targetDate){
    // let 사용한경우 수정해서 재활당한다 의미
    let month = targetDate.getMonth();
    let day = targetDate.getDate();
    let hour = targetDate.Hours();

    month = month >= 10 ? month : '0' + month;
    day = day >= 10 ? day : '0' + day;
    hour = hour >= 10 ? hour : '0' + hour;

    return{
        month, day, hour
    };
}

// 임시변수 사용 X  (O)
function getDateTime(targetDate){
    // const 사용
    const month = targetDate.getMonth();
    const day = targetDate.getDate();
    const hour = targetDate.Hours();

    return{
        month : month >= 10 ? month : '0' + month,
        day : day >= 10 ? day : '0' + day,
        hour : hour >= 10 ? hour : '0' + hour,
    };
}

// 임시변수 사용 X  (O)
function getDateTime(){

    const currentDateTime = getDateTime(new Date());

    return{        
        // 추상화해서 받아올수 있다
        month : computedKrDate(currentDateTime.month) + '분 전',
        day : currentDateTime.day + '분 전',
        hour : currentDateTime.hour + '분 전',
    }
}

// 임시변수 사용 X  (O)
function getRandomNUmber(min, max){
    const randomNumber = Math.floor(Math.random() * (max + 1) + min);
    return randomNumber;
}


