/**
 * Task 6
 *
 * @param {Array} array
 * @param {number} element
 * @param {number} index
 * @returns {Array}
 */

let splicer = (array, element, index) => {
    array.splice(index * 2, 0, element);
    return array;
};

let modifidedArray = (array1, array2) => {
    array1.reverse();
    array2.reverse();
    return array1.reduce(splicer, array2.slice());
};

let array1 = [1, 2, 3, 4, 5];
let array2 = [6, 7, 8, 9, 0];
let outcome = modifidedArray(array1, array2);

console.log(outcome);
