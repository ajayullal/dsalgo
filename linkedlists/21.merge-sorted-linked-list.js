/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  const dummyNode = { val: null, next: null };
  let mergedList = dummyNode;

  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      mergedList.next = list1;
      list1 = list1.next;
      mergedList.next.next = null;
    } else {
      mergedList.next = list2;
      list2 = list2.next;
      mergedList.next.next = null;
    }

    mergedList = mergedList.next;
  }

  if (list1) mergedList.next = list1;
  if (list2) mergedList.next = list2;

  return dummyNode.next;
};
