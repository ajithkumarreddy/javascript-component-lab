if (!Promise.allSettled) {
  const resolveHandler = (value) => ({ status: "fulfilled", value });

  const rejectHandler = (reason) => ({ status: "rejected", reason });

  Promise.allSettled = function (promises) {
    if (!Array.isArray(promises)) {
      return Promise.reject("Error in array");
    }

    const convertedPromises = promises.map((p) =>
      Promise.resolve(p).then(resolveHandler, rejectHandler)
    );

    return Promise.all(convertedPromises);
  };
}

// example
Promise.allSettled([10, 20, 30])
  .then((results) => console.log(results))
  .catch(console.log);
