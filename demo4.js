console.log('before');
getUser(1, user => {
  console.log('User', user);
  getRepositories(user.username, repos => {
    console.log('Repos', repos);
  });
});
console.log('after');

function getUser(id, callback) {
  setTimeout(() => {
    console.log('getting user...');
    callback({ id: id, username: 'brian' });
  }, 2000);
}

function getRepositories(username, callback) {
  setTimeout(() => {
    console.log('getting repositories...');
    callback(['repo1', 'repo2', 'repo3']);
  }, 2000);
}
