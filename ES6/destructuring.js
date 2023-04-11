// Destructuring

// Array

let salafee = ['Salafee', 27, 'WordPress Developer'];

// ES5
let name = salafee[0]; console.log(name);
let age = salafee[1]; console.log(age);
let job = salafee[2]; console.log(job);


// ES6

let [name2, age2, job2] = salafee;

console.log(name2);
console.log(age2);
console.log(job2);


// Destructuring in Object

// ES5
const myObj = {
    name: 'salafee',
    age: 27,
    job: 'Web Developer'
}

var name1 = myObj.name;
var age1 = myObj.age;
console.log(name1);
console.log(age1);

// ES6 
const { name: name3, age: age3, job: job3 } = myObj;
console.log(name3);
console.log(age3);