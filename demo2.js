const user = getUser(1);
console.log(user);

function getUser(id) {
  setTimeout(() => {
    return { id: id, username: 'brian' };
  }, 2000);
}
