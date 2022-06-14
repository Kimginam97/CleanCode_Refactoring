// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator

function createElement(type, height, width) {
    const element = document.createElement(type || 'div');

    element.style.height = String(height || 10) + 'px';
    element.style.width = String(width || 10) + 'px';

    return element;
}

// 만약에? 3개 매개변수가 들어 올때
const el = createElement('div', 0, 0);

// 3번째가 10이 들어온다
// 0 은 false 귀결 되기 때문에


function createElement(type, height, width) {
    const element = document.createElement(type ?? 'div');

    element.style.height = String(height ?? 10) + 'px';
    element.style.width = String(width ?? 10) + 'px';

    return element;
}

// null or undefined => ??
// flase => ||


// null과 undefined 사용할때만 사용해야 된다 ?? <

function helloWorld(message) {
    if (!message) {
        return 'Hello! World';
    }

    return 'Hello! ' + (message || 'World');
}

console.log(helloWorld(undefined)); // Hello! World
console.log(helloWorld(0)); // Hello! World