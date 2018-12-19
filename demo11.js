// # parallel promises
// Promise.race

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Async operation 1...');
    resolve(1);
  }, 2000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Async operation 2...');
    resolve(2);
  }, 1000);
});

// Promise.race takes an array of promises
// returns a new promise that is resolved when
// the first promise in the array is resolved
Promise.race([p1, p2])
  .then(result => console.log(result))
  .catch(err => console.log('error', err));
