/* 
    IIFE
    Immediately Invoked Function Expressions 
*/

// Normal Function
function One() {
    console.log('One Function');
}

One();


// IIFE Function
(function One() {
    console.log('One Function');
})();

var sum = (function() {
    return 10 + 14;
})();

console.log(sum);

(function Two(a,b) {
   console.log('Sum ' + (a+b));
}
) (50, 20);



var controller = (function() {
    var students = {
        name: 'salafee',
        id: 01
    }

    return students;
})();

console.log(controller);

var interface = (function() {
    console.log('Hello ' + controller.name);
})();


function mahbub() {
    console.log('I am Mahbub');
}

mahbub();

var x = (function mahbub() {
    var a = 'Mahbub';
    return a;
})();

console.log(x);

var y = (function salafee() {
    return 'I know ' + x;
})();

console.log(y);

