const { task1: renameTask1, task2: renameTask2, task3 } = require('./task');

const boot = async () => {
  console.log(renameTask1.sum(1, 2, 3));
  console.log(await task3.promise);
  console.log(renameTask2.getNameAndVolume());
};

boot();
