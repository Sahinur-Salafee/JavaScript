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
