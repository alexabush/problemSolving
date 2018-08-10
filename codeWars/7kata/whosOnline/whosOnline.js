const whosOnline = friends => {
  if (friends.length < 1) return {};
  let returnObj = {};
  for (let friend of friends) {
    const { username, status, lastActivity } = friend;
    if (status === 'offline') {
      addToObj(username, 'offline');
    } else if (lastActivity > 10) {
      addToObj(username, 'away');
    } else {
      addToObj(username, 'online');
    }
  }
  return returnObj;

  function addToObj(username, status) {
    if (!returnObj.hasOwnProperty(status)) {
      returnObj[status] = [];
    }
    returnObj[status].push(username);
  }
};
