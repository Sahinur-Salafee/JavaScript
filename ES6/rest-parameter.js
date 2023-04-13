// Rest Parameter In JS

function arguments5() {
    for (var i = 0; i < arguments.length; i++) {
        console.log('Argument passed: ' + arguments[i]);
    }
}

arguments5('Bangladesh', 'India', 'Sri Lanka');

function animals() {
    for (var i = 0; i < arguments.length; i++) {
        console.log('Love : ' + arguments[i]);
    }
}

animals('Cat', 'Dog');