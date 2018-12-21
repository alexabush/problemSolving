/*
  linked list is given such that each node contains an additional random pointer which could point to any node in the list (or to null)

  make a deep copy of the list

  the easy:
    iterate over the list and build up the identical list in another variable

  the hard:
    we need to find a way to transfer the 'random' pointers too

*/

function RandomListNode(label) {
 this.label = label;
 this.next = this.random = null;
}

function copyListWithRandomPointer(list) {

}