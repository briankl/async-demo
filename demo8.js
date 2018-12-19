// promises

// solution - remove
console.log('before');
gitUser(1)
  .then(user => getRepositories(user.username))
  .then(repos => getCommits(repos[0]))
  .then(commits => console.log('commits', commits))
  .catch(err => console.log('Error', err.message));
console.log('after');

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

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('getting user...');
      resolve({ id: id, username: 'brian' });
    }, 2000);
  });
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
