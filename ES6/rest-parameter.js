// Rest Parameter In JS

// function showCountries() {
//     for (var i = 0; i < abc.length; i++) {
//         console.log('Argument passed: ' + abc[i]);
//     }
// }

// showCountries('Bangladesh', 'USA', 'Canada');

function arguments5() {
    for (var i = 0; i < arguments.length; i++) {
        console.log('Argument passed: ' + arguments[i]);
    }
}

arguments5('Bangladesh', 'India', 'Sri Lanka');

function animals() {
    for (var i = 0; i < arguments.length; i++) {
        console.log('Argument passed: ' + arguments[i]);
    }
}

animals('Cat', 'Dog');