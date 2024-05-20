/**
 * JS Object
 * Object Literals
 */

const newSym = Symbol('My Symbol');
console.log(newSym);
const mobileModel = {
    brand: 'Samsung',
    model: 's24 Ultra',
    processor: 'Snapdragon Gen 3',
    camera: ['200MP', '12MP', '12MP'],
    hasZoomCamera: true,
    'selfi camera MP': 12,
    [newSym]: 'Symbol for brackets notation',
    brandModel: function () {
        console.log(`The mobile brand is ${this.brand} & the model is ${this.model}`);
    },
    battary: {
        mah: 5000
    }
}

const mobileId = Symbol('id');
console.log(mobileId);
mobileModel[mobileId] = 548;
Object.freeze(mobileModel); // Freeze any key
mobileModel.model = 's25 Ultra';
console.log(mobileModel);
console.log(mobileModel.brand);
console.log(mobileModel['model']);
console.log(mobileModel[newSym]);
console.log('Mobile ID: ' + mobileModel[mobileId]);

console.log(mobileModel.hasOwnProperty('camera'));
// Return Object keys as Array
console.log(Object.keys(mobileModel));
// Return Object values as Array
console.log(Object.values(mobileModel));
mobileModel.brandModel();

console.log(mobileModel.battary.mah);


const obj1 = {
    a: 1,
    b: 2,
    c: 3
}

const obj2 = {
    p: 1,
    q: 2,
    r: 3
}

const obj3 = {
    x: 1,
    y: 2,
    z: 3
}

const finalObj = Object.assign({}, obj1, obj2, obj3);
console.log(finalObj);

// Spread Operator
const finalObj2 = { ...obj1, ...obj2, ...obj3 }
console.log(finalObj2);


/**
 * Constructor Object
 */

function Person(fName, lName) {
    (this.firstName = fName),
        (this.lastName = lName)
}

const person1 = new Person('Joe', 'biden');
console.log(person1);

