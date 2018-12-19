// Named functions

console.log('before');
getUser(1, getRepositories);
console.log('after');

function getRepositories(user) {
  getRepositories(user.username, getCommits);
}

function getCommits(repos) {
  getCommits(repos[0], displayCommits);
}

function displayCommits(commits) {
  console.log(commits);
}

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

function getCommits(repos, callback) {
  setTimeout(() => {
    console.log('getting commits...');
    callback(['commit1', 'commit2', 'commit3']);
  }, 2000);
}
