import axios from 'axios';

//use bfs/dfs to push all accounts into 'allAccounts'
function depthFirstSearchIterative(instagramId) {
  let allAccounts = [];
  const result = [];
  const visited = {};
  dfs(instagramId);

  async function dfs(instagramId, followerObjs = []) {
    if (!instagramId) {
      return null;
    }
    visited[instagramId] = true;
    let accountObj = await axios.get(`/account/${instagramId}`);
    let followersData = await axios.get(
      `/account/${instagramId}/followers?cursor=<optional_cursor>`
    );
    let accountFollowers = followersData.data;
    let newfollowerObjs = [];
    // visit follower
    accountFollowers.forEach(follower => {
      if (!visited[follower]) {
        return dfs(follower);
      }
      const newAccount = new InstagramAccount(...accountObj, accountFollowers);
      allAccounts.push(newAccount);
    });
  }
  const filteredAccounts = allAccounts.filter(account => {
    return account.followerCount.length > 5000;
  });
  return filteredAccounts;
}

function InstagramAccount(
  instagram_id,
  username,
  biography,
  follower_count,
  followers
) {
  self.instagram_id = instagram_id;
  self.username = username;
  self.biography = biography;
  self.follower_count = follower_count;
  self.followers = followers;
}
