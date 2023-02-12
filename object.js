// JavaScript Object

let MyObject = {
    firstName: 'sahinur',
    lastName: 'salafee',
    age: 26,
    height: '5.9inc',
    weight: '72kg',
    welcomeMsg: function() {
        console.log('Welcome to my site.');
    }
}

console.log(MyObject);

let MyName = MyObject.firstName;
console.log(MyName);

// Add new value in object
MyObject.zip = 1207;

// Add new method in object
MyObject.greeting = function() {
    console.log('Hello There');
}

MyObject.welcomeMsg();

// Access all the object properties
for(item in MyObject) {
    console.log(item);
}