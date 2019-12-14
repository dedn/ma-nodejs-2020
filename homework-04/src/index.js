const getRandomNumber = () => Math.floor(Math.random() * 7);

const throwDice = cb => {
  const oneThrow = getRandomNumber();
  return oneThrow ? cb(null, oneThrow) : cb(new Error('Lost dice'));
};

setTimeout(() => {
  throwDice((firstErr, firstRes) => {
    firstErr
      ? console.log('error for first throw', firstErr.message)
      : console.log('result for first throw', firstRes);
    setTimeout(() => {
      throwDice((secondErr, secondRes) => {
        secondErr
          ? console.log('error for second throw', secondErr.message)
          : console.log('result for second throw', secondRes);
        setTimeout(() => {
          console.log('result', firstRes + secondRes);
        }, 3000);
      });
    }, 2000);
  });
}, 1000);
