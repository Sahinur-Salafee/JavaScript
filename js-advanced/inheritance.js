// Inheritance

// Prototype Inheritance
var Person = function (name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
}

Person.prototype.dateOfBirth = function () {
    console.log(this.name + ' was born in ' + (2023 - this.age));
}

Person.prototype.address = 'Dhaka, Bangladesh';

var salafee = new Person('Salafee', 27, 'Software Engineer');
salafee.dateOfBirth();
console.log(salafee);
console.log(salafee.address);

var Teacher = function (name, age, job, subject) {
    Person.call(this, name, age, job);
    this.subject = subject;
}


// Constructor Inheritance
var Car1 = function (name, model, color) {
    this.name = name;
    this.model = model;
    this.color = color;
}

var Car2 = function (name, model, color, type) {
    Car1.call(this, name, model, color);
    this.type = type;
}

var Tesla = new Car2('Tesla', 'Model X', 'Black', 'Electric');
console.log(Tesla.name);
console.log(Tesla.model);
console.log(Tesla.color);
console.log(Tesla.type);