// Asyncronous
console.log('before');
getUser(1, user => {
  console.log('User', user);
  getRepositories(user.username, repos => {
    console.log('Repos', repos);
    getCommits(rep, commits => {
      // CALLBACK HELL
    });
  });
});
console.log('after');

// Syncronous
// Far easier to read and understand
console.log('before');
const user = getUser(1);
const repos = getRepositories(user.username);
const commits = getCommits(repos[0]);
console.log(after);
