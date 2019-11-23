const getPromise = (delay, text) =>
  new Promise(resolve =>
    setTimeout(() => {
      resolve(text);
    }, delay),
  );

module.exports.promise = getPromise(2000, 'some promise').then(result => console.log(result));
