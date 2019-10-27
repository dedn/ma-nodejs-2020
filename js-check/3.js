/**
 * Task 3
 *
 * @param str
 * @param replaceTarget
 * @param searchTarget
 * @returns {string}
 */

let workingOnString = ((str, replaceTarget, searchTarget) => {
    let position = 0;
    while (true) {
        let foundPos = str.indexOf(searchTarget, position);
        if (foundPos == -1) break;
        console.log(foundPos + 1);
        position = foundPos + 1;
    }

    return str.replace(new RegExp(replaceTarget, "g"), "")
});

workingOnString('Hello World!', 'l', 'o');

console.log(workingOnString('Hello World!', 'l', 'o'))
