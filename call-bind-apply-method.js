
// Call Method

let myObj = {
    name: 'John Deo',
    age: 40,
    job: 'engineer',
    anotherObj: {
        name: 'Mike',
        msg: function() {
            console.log('My name is '+ this.name);
        }
    }
}

myObj.anotherObj.msg(); // Mike
myObj.anotherObj.msg.call(myObj); // John Deo


let Rahim = {
    name: 'Rahim',
    dob: 1996,
    age: function(currentYear) {
        console.log(this.name + ' is ' + (currentYear - this.dob) + ' years old');
    }
}

Rahim.age(2023);

let Karim = {
    name: 'Karim',
    dob: 1997
}

Rahim.age.call(Karim, 2023);