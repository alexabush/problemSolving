function quidditchScoreboard(teams, actions) {
  let storeObj = {};
  const lookup = {
    'Quaffle goal': 10,
    foul: -30,
    'Caught Snitch': 150
  };

  let splitTeams = teams.split(' vs ');
  storeObj[splitTeams[0]] = 0;
  storeObj[splitTeams[1]] = 0;

  const actionsList = actions.split(', ');
  for (let actionStr of actionsList) {
    let items = actionStr.split(': ');
    let team = items[0];
    let action = items[1];
    if (action.includes('foul')) {
      action = 'foul';
    }
    storeObj[team] += lookup[action];
    if (action === 'Caught Snitch') break;
  }
  let returnStr = '';
  Object.entries(storeObj).forEach(([key, value], index) => {
    if (index === 0) returnStr += key + ': ' + value + ', ';
    else returnStr += key + ': ' + value;
  });
  return returnStr;
}

console.log(
  quidditchScoreboard(
    'Ilkley vs Yorkshire',
    'Ilkley: Quaffle goal, Yorkshire: Haverstacking foul, Yorkshire: Caught Snitch'
  )
);

// "Ilkley: 10, Yorkshire: 120"
