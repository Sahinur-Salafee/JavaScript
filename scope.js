/* 
    Scoping In JS

    1. Local Scope 
    2. Global Scope

*/

// Local Scope

function localscope() {
    var local = 'Local Scope';
    console.log(local);
}

localscope();


// Global Scope

var globalVar = 'Global Scope';

function global() {
    console.log('Inside a function ' + globalVar);
}
global();
console.log('Outside a function ' + globalVar);

function globarfunc() {
    console.log('Global Function');
}

globarfunc();


// Function Scoping
function anotherGlobalFunc() {
    console.log('This is global function');
    function gfunction() {
        console.log('This is local function');
    }

    gfunction();
}

anotherGlobalFunc();

// Object Scoping

var student = {
    name: 'salafee',
    age: 27
}

console.log(student);

function ObjFunc() {
    var students = {
        name: 'mahbub',
        age: 28
    }

    console.log(students);
}

ObjFunc();

// console.log(students);


/* 
    Auto Global Variable
*/

function GlobalVar() {
    name = 'salafee';
    console.log(name);
}

GlobalVar();

console.log(name);


/* 
    Lexical Scoping
*/

function parentFunction() {
    var a = 10;

    function childFunction() {
        var b = 20;
        console.log('Sum ' + (a + b));
    }

    childFunction();
}

parentFunction();


var x = 'mahbub';

function mahbub() {
    var x = 'salafee';
    console.log('Inside function ' + x);  
}

mahbub();

console.log('Outside function ' + x);


function testParent() {

    var x = 'Mahbub';

    function testChild() {
        var y = 'salafee';
        console.log(x + ' knows ' + y);
    }

    testChild();
}

testParent();


var testObj = {
    name : 'Mahbub',
    age: 27
}

console.log(testObj);

function TestFunc() {
    console.log(testObj);

    var testOb = {
        name : 'Salafee',
        age: 27
    }
    console.log(testOb);
}

TestFunc();





