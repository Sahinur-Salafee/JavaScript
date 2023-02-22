// Select Id

let box1 = document.querySelector('#box1');
console.log(box1);

let box2 = document.getElementById('box2');


// Select Class
let box = document.querySelector('.box');

// Select All Elements
let AllBoxs = document.querySelectorAll('.box');
console.log(AllBoxs);
let boxArr = Array.prototype.slice.call(AllBoxs);
console.log(boxArr);
console.log(boxArr[2].innerHTML);


let a = document.getElementsByClassName('box');
console.log(a);