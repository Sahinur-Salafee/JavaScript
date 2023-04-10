// Destructuring

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