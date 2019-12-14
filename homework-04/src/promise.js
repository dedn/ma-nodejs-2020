const getRandomNumber = () => Math.floor(Math.random() * 7);

const throwDicePromise = () => {
  return new Promise((resolve, reject) => {
    const oneThrow = getRandomNumber();
    return oneThrow ? resolve(oneThrow) : reject(new Error('Lost dice'));
  });
};

const timeOut = ms => new Promise(resolve => setTimeout(() => resolve(), ms));

Promise.resolve()
  .then(() => {
    return timeOut(700)
      .then(() => throwDicePromise())
      .then(firstRes => {
        console.log('result for first throw', firstRes);
        return firstRes;
      });
  })
  .then(firstRes => {
    return timeOut(1300)
      .then(() => throwDicePromise())
      .then(secondRes => {
        console.log('result for second throw', firstRes);
        return [firstRes, secondRes];
      });
  })
  .then(([firstRes, secondRes]) => {
    setTimeout(() => {
      console.log('result', firstRes + secondRes);
    }, 1000);
  })
  .catch(err => {
    console.log(err.message);
  });
