class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
  revString() {
    const out = [];
    let n = this;
    while (n) {
      out.unshift(n.data.toString());
      n = n.next;
    }
    return out.join('');
  }
}

// const single = new Node(3);
// console.log(single.revString());
const l1 = new Node(3, new Node(2, new Node(1)));
const l2 = new Node(6, new Node(5, new Node(4)));

console.log(addLinkedLists(l1, l2));

function addLinkedLists(l1, l2) {
  const num1 = l1.revString();
  const num2 = l2.revString();
  const sum = +num1 + +num2;
  const sumStr = sum.toString();
  const sumArr = sumStr.split('');
  let linkedList = null;
  let current = null;
  for (let i = sumArr.length - 1; i >= 0; i--) {
    const node = new Node(sumArr[i]);
    if (linkedList === null) {
      linkedList = node;
      current = node;
    } else {
      current.next = node;
      current = current.next;
    }
  }
  return linkedList;
}
