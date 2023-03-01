// JavaScript Closures

function closureFunc() {
    var x = 10;

    return function() {
        var y = 15;
        console.log('Sum ' + (x+y));
    }
}

closureFunc()();

function Add(a) {

    return function(b) {
        console.log('Sum ' + (a+b));
    }
}

Add(4)(6);

var a = Add(10);
var total = a(40);



/* 
    Closures Example
*/

// Example One

function numberGenerator() {
    var num = 1;

    function checkNumber() {
        console.log(num); //1
    }
    num++; // num = num + 1; num = 1+1; num = 2
    return checkNumber(); //2
}

numberGenerator();


// Example Two

function sayHello() {
    var say = function() {
        console.log(hello);
    }

    var hello = 'Hello World';

    return say;
}

var sayHelloClousers = sayHello();
sayHelloClousers();






