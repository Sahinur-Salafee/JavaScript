/* Array */

let students = ['Rahim','Latif','Tomal'];
console.log(students.length);

let studentOne = students[0];
document.write(students + '<br>');

for(let i=0; i<students.length; i++) {
    document.write('Students Name: ' + students[i] + '<br>');
}

// Insert element start of the array
let addStudents = students.unshift('Tanin');
console.log(students);

// Insert element of the array
let addStudent = students.push('Touki');
console.log(students);

// Remove element start of the array
let removeStudent = students.shift();
console.log(students);

// Remove element of the array
let removeStudents = students.pop();
console.log(students);


// Array Splice
let animal = ['Cow', 'Dog', 'Sheep', 'Goat', 'Cat', 'Monkey'];
console.log(animal);

let animalList = animal.splice(2,3);
console.log(animalList);
console.log(animal);

let newAnimals = animal.splice(1);
console.log(animal);

// Array Slice
let cars = ['BMW','AXIO', 'Tesla', 'Ferari', 'Lembergini', 'Alion'];
console.log(cars);

let newCars = cars.slice(2,4);
console.log(newCars);