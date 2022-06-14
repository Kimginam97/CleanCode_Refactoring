
typeof '문자열'
typeof true
typeof 123
typeof Symbol()

// ---------------------------

function Person(name, age){
    this.name = name;
    this.name = age;
}

const p ={
    name: 'poco',
    age: 99
}

const poco = new Person('poco',99);

p instanceof Person //false

poco instanceof Person //true


// ---------------------------

const arr = [];
const func = function(){}
const date = new Date();

arr instanceof Array //true
func instanceof Function //true
date instanceof Date //true

// 주의
arr instanceof Object //true
func instanceof Object //true
date instanceof Object //true

// ---------------------------

// REF 객체까지 감지
Object.prototype.toString.call(arr); // [object Array]
Object.prototype.toString.call(func); // [object Function]
Object.prototype.toString.call(date); // [object Date]
