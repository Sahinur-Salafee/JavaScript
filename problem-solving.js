
function greet(name) {
    if(!name || name === '') {
        return 'Hello World.';
    } else {
        return 'Hello '+ name;
    }

    // (!name || name === '') ? return('Hello World'); : return('Hello ' + name);
}

console.log(greet('Alice'));
console.log(greet(''));
console.log(greet());


function sum(numbers){
    let total = 0;

    for(let i=0; i<numbers.length; i++) {
        total =+numbers[i]; 
    }
    return total;
}

console.log(sum([1,2,3]));
console.log(sum([-1,1]));
console.log(sum([]));



console.log(greet('Alice'));  //  Hello Alice
console.log(greet(''));  // Hellow World
console.log(greet());   // Hellow World


function test(name) {
    // if(!name || name === '') {
    //     console.log('Hello World.');
    // } else {
    //     console.log('Hello ' + name);
    // }

    (!name || name=== '') ? console.log('Hello World') : console.log('Hello ' + name);
}

test('shuvo');
test('');
test();

