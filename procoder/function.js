function myFunction() {
    console.log('Hello Salafee');
}

myFunction();

function greeting(name, age, dateOfbirth = 1996) {
    console.log('Hello ' + name + ' I am ' + age + '.' + ' My date of birth ' + dateOfbirth);
}

greeting('Salafee.', 28);
greeting('Wania.', 3, 2021);
greeting('Euyaan.', 1, 2024);


function isSunbscribe() {
    console.log('Subscribed');
}

document.getElementById('btn').addEventListener('click', isSunbscribe);

/**
 * Self Invoked function
 */

(function (name) {
    console.log('Hi! I am ' + name);
})('Salafee');

/**
 * Function Expression
 */
let maths = function (x, y) {
    console.log('Test');
    return x * y;
    console.log('Test');
}
console.log(maths(5, 4));
console.log(maths(15, 12));

/**
 * Anonymous Function
 */

let numbers = [4, 5, 3, 7, 8];
let sqNumbers = numbers.map(function (number) {
    return number * number;
});

console.log(sqNumbers);

/**
 * Regular Function
 */

let add = function (a, b) {
    return a + b;
}

console.log(add(5, 4));

/**
 * Arrow Function
 * funcName = (parameters) => return
 * 
 * Note: This works only if the function has only one statement.
 * 
 * Arrow Functions Return Value by Default:
 */

let addition = (x, y) => x + y;
console.log(addition(9, 9))
let hello = () => console.log('Hello World');
hello();


/**
 * Nested Function
 */

function greet(name) {

    function hello() {
        console.log('Hello ' + name);
    }

    return hello();
}

greet('Salafee');

outerFunction < - function (x) {
    innerFunction < - function (y) {
        a < - x + y;
        return (a);
    }
    return innerFunction;
}

output < - outerFunction(5);
console.log(output(6));

