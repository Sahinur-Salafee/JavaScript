// Function Expression
let funcName = function() {
    // Statement
    console.log('Hello World');
}

funcName();

// Callback function
// function ShowName(name, callback) {
//     var age = 20;
//     callback(age);
//     console.log('My age is:' + age);
// }

// function ShowAge(age) {
//     console.log('I am ' + age + 'years old.');
// }

// ShowName('Sahinur', ShowAge(10));

function callMyName(name, callbacks) {
    var myAge = 20;
    console.log('Is it interesting? Yes it is Mr.' + name);
}

function callMyName(name, callback) {
    var myAge = 40;
    var myAge2 = 50;
    callback(myAge,myAge2);
    console.log('Hi there.' + name);
}

function hello(age, a) {
    console.log('I am passed through argument and my age is: ' + age + a);
}

callMyName('Zonayed Ahmed', hello);

function welcomeMsg(name) {
    console.log('Welcome Mr.' + name);
    return function option(menu) {
        console.log('Do you like '+ menu + ' Mr. ' + name);
    }
}

welcomeMsg('Sahinur Salafee') ('Coffe');


function changeValue(a) {
    console.log('Value of a inside function before changing: ' + a);
    a = 10;
    console.log('Value of a inside function after changing: ' + a);
}

var a = 100;
console.log('Value of a before changing function is applied: ' + a);
changeValue(a);
console.log('Value of a after changing function is applied: ' + a);





function aFunc(a) {
    console.log('Before changing the property: ' + a.one);
    a.one = 'two';
    console.log('After changing the property: ' + a.one);
}

var a = {
    one: 'one'
}
aFunc(a);