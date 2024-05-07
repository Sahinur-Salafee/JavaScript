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
 * 
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