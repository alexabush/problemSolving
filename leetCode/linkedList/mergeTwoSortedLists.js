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
var mergeTwoSortedLists = function(l1,l2) {
  let c1 = l1;
  let c2 = l2;
  let temp2 = c2
  let temp1 = c1
  while (c2) {
    temp2 = c2
    temp1 = c1
    if (c1.val <= c2.val) {
      c2 = c2.next
      c1 = c1.next
      temp1.next = temp2
      temp2.next = c1
    } else if (c1.val > c2.val) {
      // let temp2 = c2
      c2 = c2.next
      temp2.next = c1
      c1 = temp2
    }
  }
  return c1
};

let list1 = new ListNode(6)
list1.next = new ListNode(7)
list1.next.next = new ListNode(8)

let list2 = new ListNode(2)
list2.next = new ListNode(3)
list2.next.next = new ListNode(4)

// let list1 = new ListNode(1)
// list1.next = new ListNode(2)
// list1.next.next = new ListNode(3)

// let list2 = new ListNode(1)
// list2.next = new ListNode(3)
// list2.next.next = new ListNode(4)


console.log(mergeTwoSortedLists(list1,list2))
