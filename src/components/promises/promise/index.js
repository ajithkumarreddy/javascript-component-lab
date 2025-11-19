/**
 * Promise
 * The function passed to new promise is executor
 * state -> "pending" -> "fulfilled" (resolve) -> "rejected" (reject)
 * result -> undefined -> value (resolve(value)) or error (reject(errorß))
 */

let promise = new Promise(function (resolve, reject) {
  // resolve
  setTimeout(() => resolve("done"), 1000);

  // direct resolve
  resolve("done");

  // reject
  setTimeout(() => reject(new Error("whoops!")), 1000);
});

/**
 * then, catch and finally (cleanup)
 */

promise
  .then((result) => console.log(result))
  .catch((error) => console.log(error))
  .finally(console.log("Promise executed successfully"));
