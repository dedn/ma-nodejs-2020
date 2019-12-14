const getRandomNumber = () => Math.floor(Math.random() * 7);

const throwDicePromise = () => {
  return new Promise((resolve, reject) => {
    const oneThrow = getRandomNumber();
    return oneThrow ? resolve(oneThrow) : reject(new Error('Lost dice'));
  });
};

const timeOut = ms => new Promise(r => setTimeout(() => r(), ms));

(async function() {
  try {
    await timeOut(700);
    const firstRes = await throwDicePromise();
    console.log('result for first throw', firstRes);

    await timeOut(1300);
    const secondRes = await throwDicePromise();
    console.log('result for second throw', secondRes);

    await timeOut(1000);
    console.log('result', firstRes + secondRes);
  } catch (err) {
    console.log(err.message);
  }
})();
