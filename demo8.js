// promises

getUser(1, getRepositoriesCallback);

function getRepositoriesCallback(user) {
  getRepositories(user.username, getCommitsCallback);
}

function getCommitsCallback(repos) {
  getCommits(repos[0], displayCommitsCallback);
}

function displayCommitsCallback(commits) {
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

// getUser(1)
//   .then(user => getRepositories(user.username))
//   .then(repos => getCommits(repos[0]))
//   .then(commits => console.log('commits', commits))
//   .catch(err => console.log('Error', err.message));

// function getUser(id) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('getting user...');
//       resolve({ id: id, username: 'brian' });
//     }, 2000);
//   });
// }

// function getRepositories(username) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('getting repositories...');
//       resolve(['repo1', 'repo2', 'repo3']);
//     }, 2000);
//   });
// }

// function getCommits(repos) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('getting commits...');
//       resolve(['commit1', 'commit2', 'commit3']);
//     }, 2000);
//   });
// }
