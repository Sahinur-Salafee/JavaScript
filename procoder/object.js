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
    [newSym]: 'Symbol for brackets notation'
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