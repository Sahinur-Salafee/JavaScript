/**
 * Object
 */
const circle = {
    radius: 1,
    location: {
        x:1,
        y:2
    },
    draw: function() {
        console.log('Draw');
    }
}

circle.draw();
console.log(circle.location.x);

/**
 * Factory Function thats returns an object
 * @param {*} radius 
 * @returns Object
 * For more about factory function: https://www.linkedin.com/pulse/factory-functions-javascript-nikhil-nishad/
 */

function createCircle(radius) {
    return {
        radius,
        draw: function () {
            console.log('Draw');
        }
    }
}

const circle2 = createCircle(2);
console.log(circle2);
console.log(circle2.draw());

const circle3 = createCircle(3);
console.log(circle3);


/**
 * Constructor Function
 * @param {*} radius 
 */

function Circle(radius) {
    this.radius = radius,
    this.draw = function () {
        console.log('Draw');
    }
}

const anotherCircle = new Circle(4);
console.log(anotherCircle);

//Value vs Reference Type
// Value
let x = 10;
let y = x;
x = 30;

console.log(x);
console.log(y);

// Reference Type
let a = {value:2};
let b = a;
a.value = 5;
console.log(a.value);
console.log(b.value);

// Primitives are copied by their values
// Objects are copied by their reference
