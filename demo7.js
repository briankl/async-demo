// Promises

const p = new Promise((resolve, reject) => {
  // do some async work...
  setTimeout(() => {
    resolve({ some: 'thing' });
    //reject(new Error('message'));
  }, 2000);
});

p.then(result => {
  console.log('Result', result);
}).catch(err => {
  console.log(err);
});
