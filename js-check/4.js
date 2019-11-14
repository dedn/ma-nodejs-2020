/**
 * Task 4
 */

let objectA = {
    name: 'ObjectA'
};

let objectB = new Object();
objectB.name = 'ObjectB';

let objectC = Object.create(null);
objectC.name = 'ObjectB';

class ObjectD {
    constructor(name) {
        this.name = name;
    }
}

let objectD = new ObjectD('ObjectD');

console.log(objectA, objectB, objectC, objectD);
