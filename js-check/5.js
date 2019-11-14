/**
 * Task 3
 *
 * @param string
 * @returns {string}
 */

let filterString = (string) => {
    return [...string].map((char) => {
        if (char % 2 === 0 && char !== 0) {
            return char
        }
    }).join('')
};

filterString('21345A67098');

console.log('filterString', filterString('21345A67098'));
