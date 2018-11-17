const list = [
  '99 Main Road',
  '8 main street',
  '340 First Street',
  '1 Main Street',
  '555 Taraval Road',
  '12 MAIN STREET',
  '555 California Street'
];

console.log(naturalSort(list));

function naturalSort(addresses) {
  return addresses.sort((addr1, addr2) => {
    let arr1 = addr1.split(' ');
    let num1 = arr1[0];
    let name1 = arr1
      .slice(1)
      .join(' ')
      .toLowerCase();
    let arr2 = addr2.split(' ');
    let num2 = arr2[0];
    let name2 = arr2
      .slice(1)
      .join(' ')
      .toLowerCase();
    if (name1 === 'main street' && name2 === 'main street') debugger;
    if (name1 < name2) {
      return -1;
    } else if (name1 === name2) {
      if (+num1 <= +num2) {
        return -1;
      } else {
        return 1;
      }
    } else {
      return 1;
    }
  });
}

/*
  TODO

  split street number and street name apart
  we're doing to make some sort of comparator?
*/

/*
We have a list of street addresses and want to sort them.

Addresses are street number and street name:

as a single string

Sort should follow certain rules:
1. Houses sorted alphabetically by street name
2. for houses on same street, houses with smaller street numbers should come first

Other considerations:
sort is case-insensitive
street names will always be valid alphabet characters


probably solve use conditional logic in a comparator function?
*/
