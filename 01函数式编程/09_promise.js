let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    Math.random() > 0.5 ? resolve("success") : reject("error");
  }, 100);
});
promise
  .then(val => {
    console.log(val);
  })
  .catch(reason => {
    console.log(reason);
  })
  .finally(() => {
    console.log("finished");
  });
