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