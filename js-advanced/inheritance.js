// Inheritance
var Person = function (name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
}

Person.prototype.dateOfBirth = function () {
    console.log(this.name + ' was born in ' + (2023 - this.age));
}

var salafee = new Person('Salafee', 27, 'Software Engineer');
salafee.dateOfBirth();
console.log(salafee);

var Teacher = function (name, age, job, subject) {
    Person.call(this, name, age, job);
    this.subject = subject;
}