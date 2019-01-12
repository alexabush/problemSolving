/**
 * Definition for singly-linked list.
 */
 function ListNode(val) {
      this.val = val;
      this.next = null;
 }
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let c = head
  let h2 = null;
  let temp = null;
  let next = null;
  while (c) {
    next = c.next
    temp = h2
    h2 = c
    h2.next = temp
    c = next
  }
  return h2
};

let list = new ListNode(1)
list.next = new ListNode(2)
list.next.next = new ListNode(3)
list.next.next.next = new ListNode(4)
list.next.next.next.next = new ListNode(5)

console.log(reverseList(list))
