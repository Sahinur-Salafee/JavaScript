
function greet(name) {
    if (!name || name === '') {
        return 'Hello World.';
    } else {
        return 'Hello ' + name;
    }

    // (!name || name === '') ? return('Hello World'); : return('Hello ' + name);
}

console.log(greet('Alice'));
console.log(greet(''));
console.log(greet());


function sum(numbers) {
    let total = 0;

    for (let i = 0; i < numbers.length; i++) {
        total = +numbers[i];
    }
    return total;
}

console.log(sum([1, 2, 3]));
console.log(sum([-1, 1]));
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

    (!name || name === '') ? console.log('Hello World') : console.log('Hello ' + name);
}

test('shuvo');
test('');
test();


// Count number of Vowels in String

const text = 'Hello';
// let letter = text.charAt(1);
// console.log(letter);

function findVowels(text) {
    let vowels = ["a", "e", "i", "o", "u"];
    let vowelCount = 0;

    for (let i = 0; i < text.length; i++) {
        if (vowels.includes(text[i].toLowerCase())) {
            vowelCount++;
        }
    }

    return vowelCount;
}

//   console.log(findVowels('sahinur salafee'));



function countVowel(str) {
    let count = 0;
    str = str.toLowerCase();

    for (i = 0; i < str.length; i++) {
        if (str.charAt(i) == 'a' || str.charAt(i) == 'e' || str.charAt(i) == 'i' || str.charAt(i) == 'o' || str.charAt(i) == 'u') {
            count++;
        }
    }

    return count;
}

console.log(countVowel('bangladesh'));



function showName(name) {
    console.log('My Name is: ', name);
}

showName('Shuvo');
showName('Sahinur');
showName('Salafee');
showName('Mahbub');


// write a function that takes a string and reverses the string
function reverseString(str) {
    let reverse = '';

    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
    }

    return reverse;
}

// console.log(reverseString('Bangladesh'));
// console.log(reverseString('hello'));
// console.log(reverseString('12345'));
// console.log(reverseString('Greeting from ChatGPT!'));

let result = reverseString('My Country Name is Bangladesh');
let cap = result.toUpperCase();
console.log(cap);
let arr = cap.split('');
console.log(arr);

// string to array word by word
let str = 'My Country Name is Bangladesh';
let arrr = str.split('');
console.log(arrr);

// write a complex object
let complexObj = {
    name: 'Shuvo',
    age: 25,
    job: 'Web Developer',
    address: {
        city: 'Dhaka',
        country: 'Bangladesh'
    },
    friends: ['Sahinur', 'Salafee', 'Mahbub']
}


console.log(complexObj.friends);
