// # promise api
// sometimes you want to create a promise that's already resolved
// very useful for unit tests

const resolvedPromise = Promise.resolve({ some: 'data' });
resolvedPromise.then(result => console.log('result', result));

// no need to instantiate the Primise, resolve is a static method

const rejectedPromise = Promise.reject(new Error('reason for rejection...'));
rejectedPromise.catch(err => console.log('error', err));
