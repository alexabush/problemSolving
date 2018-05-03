const input = [
  { name: 'tech', parent: null },
  { name: 'hot_right_now', parent: 'tech' },
  { name: 'upcomming_releases', parent: 'tech' },
  { name: 'gadgets', parent: 'tech' },
  { name: 'news', parent: null },
  { name: 'social', parent: 'startups' },
  { name: 'europe', parent: 'news' },
  { name: 'asia', parent: 'news' },
  { name: 'events', parent: 'news' },
  { name: 'startups', parent: null },
  { name: 'funding', parent: 'startups' },
  { name: 'unicorns', parent: 'startups' },
  { name: 'venture_capital', parent: 'funding' },
  { name: 'crowdfunding', parent: 'funding' },
  { name: 'usa', parent: 'news' }
];

function categorize(input) {
  let tree = {}};
  helper(input);

  function helper(arr) {
    if (arr.length === 0) return;
    if (!tree.hasOwnProperty(arr[0].name) && tree.hasOwnProperty(arr[0].parent)){
      tree[]
    }
    else tree.set(arr[0]);
    return helper(arr.slice(1));
  }

  return tree;
}
