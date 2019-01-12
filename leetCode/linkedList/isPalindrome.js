var isPalindrome = function(head) {
  let length = 0;
  let node = head;
  while (node) {
    length++;
    node = node.next;
  }
  node = head;
  let stack = [];
  for (let i = 0; i < length; i++) {
    if (length % 2 === 1 && i === Math.floor(length / 2)) {
      node = node.next;
      continue;
    }
    if (i < Math.floor(length / 2)) stack.push(node.val);
    else if (i >= Math.floor(length / 2)) {
      let popped = stack.pop();
      if (popped !== node.val) return false;
    }
    node = node.next;
  }
  return true;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

let list = new ListNode(1);
list.next = new ListNode(0);
list.next.next = new ListNode(1);

// let list = new ListNode(1);
// list.next = new ListNode(2);
// list.next.next = new ListNode(2);
// list.next.next.next = new ListNode(1);

console.log(isPalindrome(list));
