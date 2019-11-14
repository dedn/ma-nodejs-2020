const vegetables = ['potato', 'tomato', 'cucumber'];
const fruits = ['apple', 'pineapple', 'banana'];

/**
 * Task 7 variant 1
 *
 * @param {Array} firstArray
 * @param {Array} secondArray
 * @param {string} target
 * @returns {string}
 */
let filterOfArraysFirstVariant = (firstArray, secondArray, target) => {
    if (firstArray.includes(target)) return 'first array contains the target of the search';
    else if (secondArray.includes(target)) return 'second array contains the target of the search';
    else return 'search term not found'
};

filterOfArraysFirstVariant(vegetables, fruits, 'cucumber');

/**
 * Task 7 variant 2
 *
 * @param {Array} firstArray
 * @param {Array} secondArray
 * @param {string} target
 * @returns {string}
 */
let filterOfArraysSecondVariant = (firstArray, secondArray, target) => {
    switch (target) {
        case firstArray.find(item => item === target):
            console.log('first array contains the target of the search');
            break;
        case secondArray.find(item => item === target):
            console.log('second array contains the target of the search');
            break;
        default:
            console.log('search term not found')
    }
};

filterOfArraysSecondVariant(vegetables, fruits, 'cucumber');
