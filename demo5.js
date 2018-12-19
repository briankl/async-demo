// Asyncronous
getUser(1, user => {
  getRepositories(user.username, repos => {
    getCommits(repo, commits => {
      // CALLBACK HELL
    });
  });
});

// Syncronous
// Far easier to read and understand
console.log('before');
const user = getUser(1);
const repos = getRepositories(user.username);
const commits = getCommits(repos[0]);
console.log(after);
