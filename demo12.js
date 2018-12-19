// aync await

async function displayCommits() {
  const user = await getUser(1);
  const repos = await getRepositories(user.username);
  const commits = await getCommits(repos[0]);
  console.log(commits);
}
displayCommits(); // returns a promise of void

// getUser(1)
//   .then(user => getRepositories(user.username))
//   .then(repos => getCommits(repos[0]))
//   .then(commits => console.log('commits', commits))
//   .catch(err => console.log('Error', err.message));

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('getting user...');
      resolve({ id: id, username: 'brian' });
    }, 2000);
  });
}

function getRepositories(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('getting repositories...');
      resolve(['repo1', 'repo2', 'repo3']);
    }, 2000);
  });
}

function getCommits(repos) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('getting commits...');
      resolve(['commit1', 'commit2', 'commit3']);
    }, 2000);
  });
}
