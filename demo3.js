console.log('before');
getUser(1, user => {
  console.log('User', user);
});
console.log('after');

function getUser(id, callback) {
  setTimeout(() => {
    console.log('getting user...');
    callback({ id: id, username: 'brian' });
  }, 2000);
}
