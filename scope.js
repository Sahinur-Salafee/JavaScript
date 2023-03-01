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