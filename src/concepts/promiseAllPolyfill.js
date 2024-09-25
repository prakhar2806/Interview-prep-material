const promise1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("promise1");
  }, 1000);
});

const promise2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve("promise2");
  }, 100);
});

Promise.all([promise1, promise2])
  .then((x) => console.log(x))
  .catch((err) => console.log(err));

Promise.myAll = function (promiseArr) {
  let result = [];
  let counter = 0;

  return new Promise(function (resolve, reject) {
    promiseArr.forEach((promise, index) => {
      promise
        .then((x) => {
          counter++;
          result[index] = x;
          if (counter === promiseArr.length) {
            resolve(result);
          }
        })
        .catch((err) => reject(err));
    });
  });
};

Promise.myAll([promise1, promise2])
  .then((x) => console.log(x))
  .catch((err) => console.log(err));
