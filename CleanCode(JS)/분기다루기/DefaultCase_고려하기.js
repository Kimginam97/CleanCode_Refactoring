// case 1
function sum(x, y) {

    x = x || 1;
    y = y || 1;

    return x + y;
}

sum();

sum(100, 200);

// case 2
function createElement(type, height, width) {
    const element = document.createElement(type || 'div');

    element.style.height = height || 100;
    element.style.width = width || 100;

    return element;
}

createElement();


// case 3
function registerDay(userInputDay) {
    switch (userInputDay) {
        case '월요일':
        case '화요일':
        case '수요일':
        case '목요일':
        case '금요일':
        case '토요일':
        case '일요일':
        default:
            throw Error('입력값이 유효하지 않습니다.');
    }
}

// 위험요소
e.target.value = '월ㄹ요일';
registerDay(e.target.value);


// case 4
const Root = () => (
    <Router history={browserHistory}>
        <Switch>
            <Route exact path="/" component={App}></Route>
            <Route exact path="/welcome" component={Welcome}></Route>
            <Route component={NotFound}></Route>
        </Switch>
    </Router>
);

//example
function safe10진수ParseInt(number, radix) {
    return parseInt(number, radix || 10);
}