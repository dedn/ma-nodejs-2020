/**
 * Task 9
 */

const getPromise = (delay) => new Promise(resolve => setTimeout(()=>{
    resolve('resolved')
}, delay));

getPromise(2000).then(result => console.log(result));
