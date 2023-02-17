// JavaScript Object
let MyObject = {
    firstName: 'sahinur',
    lastName: 'salafee',
    age: 26,
    height: '5.9inc',
    weight: '72kg',
    welcomeMsg: function() {
        console.log('Welcome to my site.');
    },
    salafee: function () {
        console.log('Salafee');
    },
    mahbub: function() {
        console.log('I am Mahbub');
    },
    students: [
        'rahim',
        'karim',
        'shagor'
    ]
}

console.log(MyObject);

let arr = [
    'shuvo',
    'salafee',
    'shagor',
    classes = {

    }

];
console.log(arr[1]);

console.log(MyObject.mahbub());
console.log(MyObject.firstName);
console.log( 'Students Name: ' +  MyObject.students[2]);

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

MyObject.salafee();

MyObject.salafee = function () {
    console.log('Hello salafee');
}

MyObject.salafee();

MyObject.Mahbub = function() {
    console.log('Hello I am Mahbub');
}

MyObject.Mahbub();

// Array in Object 
console.log('//Array Inside a Object');
let ObjArr = {
    item: 'student list',
    studentsName: ['Rahim', 'Karim', 'Jamal', 'Kamal'],
    age: [12,13,14,15]
}

console.log(ObjArr.studentsName[2]);
console.log(ObjArr.age[2]);

// Object In Array 
console.log('//Object Inside a Array');

let ArrObj = [
    'Salafee',
    {
        name: 'Sahinur',
        age: 27,
        job: 'student'
    },
    'Bangladesh',
    {
        id: 1,
        student_name: 'salafee',
    }
]

console.log(ArrObj[3].id);