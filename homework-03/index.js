/**
 * Prime number check
 *
 * @returns {boolean}
 */

const primeNumber = n => {
  const max = Math.sqrt(n);
  for (let i = 2; i <= max; i++) {
    return !(n % i === 0);
  }
  return true;
};

let count = 0;
let currentPrimeNumber = 0;

setInterval(() => {
  count++;
  if (primeNumber(count)) {
    currentPrimeNumber = count;
    console.log(currentPrimeNumber);
  }
}, 0);

setInterval(() => {
  console.log(`${Date.now()} : -- IN PROCESS -- Biggest prime number foun ${currentPrimeNumber}`);
}, 1000);
