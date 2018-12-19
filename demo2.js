console.log('before');
const user = getUser(1);
console.log(user); // undefined
console.log('after');

function getUser(id) {
  setTimeout(() => {
    console.log('getting user...');
    return { id: id, username: 'brian' };
  }, 2000);
}
