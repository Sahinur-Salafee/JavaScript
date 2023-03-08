// console.log(this);

// console.log(this === window);

function helloThis() {
    console.log(this);
}

// helloThis();

function hellothis() {
    `use strict`;
    console.log(this);
}

// hellothis();

function myName() {
    this.name = 'Sahinur Salafee';
    this.age = 27;
}

myName();
console.log(name);
console.log(age);

// Object Rules

var myObj = {
    name: 'salafee',
    age: 27,
    msg: function() {
        console.log(this);
    }
}

myObj.msg();


var myObj2 = {
    name: 'sahinur',
    age: 27,
    anotherObj: {
        name: 'sahinur salafee',
        msg: function () {
            console.log('My name is ' + this.name);
        }
    }
}

myObj2.anotherObj.msg();
myObj2.anotherObj.msg.call(myObj2);

