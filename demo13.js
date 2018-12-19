// aync await errors

async function displayCommits() {
  try {
    const user = await getUser(1);
    const repos = await getRepositories(user.username);
    const commits = await getCommits(repos[0]);
    console.log(commits);
  } catch (err) {
    console.log('Error', err);
  }
}
displayCommits(); // returns a promise of void

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
      reject(new Error('Could not get repos...'));
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
