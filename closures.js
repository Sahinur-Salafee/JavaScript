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





