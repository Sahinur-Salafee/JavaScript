// Lexical This Operator

// ES5
const Es5 = {
    aFunc: function () {
        console.log(this);
        return function () {
            console.log(this);
        }
    }
}

Es5.aFunc()();

// ES6 

const Es6 = {
    aFunc: () => {
        console.log(this);
        return () => console.log(this);
    }
}

Es6.aFunc()();

// Mix

const mix = {
    aFunc: function () {
        console.log(this);
        return () => console.log(this);
    }
}

mix.aFunc()();

// Arrow Function Using IFFE

(
    () => { console.log('Hello my name is salafee'); }
)();