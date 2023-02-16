// Function Expression
let funcName = function() {
    // Statement
    console.log('Hello World');
}

funcName();

// Callback function
function ShowName(name, callback) {
    var name = 'Salafee';
    callback(name);
    console.log('My name is:' + name);
}

function ShowAge(age) {
    console.log('I am ' + age + 'years old.');
}

ShowName('Sahinur', ShowAge);


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