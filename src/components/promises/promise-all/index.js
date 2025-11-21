const promise1 = Promise.resolve(10);
const promise2 = new Promise((resolve, reject) => setTimeout(() => resolve(20), 1000));
const promise3 = new Promise((resolve, reject) => setTimeout(() => resolve(30), 2000));

Promise.all([promise1, promise2, promise3])
.then((results) => {
    console.log(results);
})
.catch((error) => {
    console.log("One promise failed: ", error);
})