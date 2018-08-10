const whosOnline = friends => {
  if (friends.length < 1) return {};
  let returnObj = {};
  for (let friend of friends) {
    const { username, status, lastActivity } = friend;
    if (status === 'Offline') {
      addToObj(username, 'Offline');
    } else if (lastActivity > 10) {
      addToObj(username, 'Away');
    } else {
      addToObj(username, 'Online');
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
