// ES5 function

var greeting = function () {
    console.log('Hello World');
}

greeting();

// ES6 Arrow Function
var greeting = () => console.log('Hello World');
greeting();

let addTwoNumber = (a, b) => console.log('Sum is:', a + b);
addTwoNumber(20, 40);