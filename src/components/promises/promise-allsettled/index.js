let urls = [
  "https://api.github.com/users/iliakan",
  "https://api.github.com/users/remy",
  "https://no-such-url",
];

Promise.allSettled(urls.map((url) => fetch(url))).then((results) => {
  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(`${urls[index]}: ${result.value.status}`);
    }

    if (result.status === "rejected") {
      console.log(`${urls[index]}: ${result.reason}`);
    }
  });
});
