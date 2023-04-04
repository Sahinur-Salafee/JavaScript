// var let and const

// var
var name = "John Doe";
console.log(name);
name = "Steve Smith";
console.log(name);

// let
let name1 = "John Doe";
console.log(name1);
name1 = "Steve Smith";
console.log(name1);

// const
const name2 = "John Doe";
console.log(name2);
//name2 = "Steve Smith"; // error
// console.log(name2);

// scope
// var
function test() {
    var playername = "Lionel Messi";

    if (true) {
        let playername = "Cristiano Ronaldo";
        console.log(playername);
    }

    console.log(playername);
}
test();