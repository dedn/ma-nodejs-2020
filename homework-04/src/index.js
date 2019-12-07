const getRandomNumber = () => Math.floor(Math.random() * 6) + 1;
const throwDice = cb => cb(getRandomNumber());

setTimeout(() => {
  throwDice(firstThrow => {
    console.log(`first throw ${firstThrow}`);
    setTimeout(() => {
      throwDice(secondThrow => {
        console.log(`second throw${secondThrow}`);
        setTimeout(() => {
          const sum = firstThrow + secondThrow;
          console.log(`results ${sum}`);
        }, 700);
      });
    }, 2000);
  });
}, 3000);
