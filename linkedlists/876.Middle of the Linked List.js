/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var middleNode = function(head) {
    const indexToNodeMap = {};
    let currentNode = head, i = 0;
    
    while(currentNode !== null){
        indexToNodeMap[i++] = currentNode;
        currentNode = currentNode.next;
    }
    
    return indexToNodeMap[Math.floor(i/2)];
};