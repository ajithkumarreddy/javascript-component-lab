class Promise {
  constructor(handler) {
    this.status = "pending";
    this.value = null;

    const resolve = (value) => {
      if (this.status === "pending") {
        this.status = "fulfilled";
        this.value = value;
      }
    };

    const reject = (value) => {
      if (this.status === "pending") {
        this.status = "rejected";
        this.value = value;
      }
    };

    try {
      handler(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onFulfilled, onRejected) {
    if (this.status === "fulfilled") {
      onFulfilled(this.value);
    } else {
      onRejected(this.value);
    }
  }
}

// Testing
const promise1 = new Promise((resolve, reject) => {
  resolve("Promise resolved successfully!");
});

promise1.then((value) => {
  console.log(value);
});

const promise2 = new Promise((resolve, reject) => {
  reject("Error in promise");
});

promise2.then(
  (value) => {
    console.log(value);
  },
  (error) => {
    console.log(error);
  }
);
