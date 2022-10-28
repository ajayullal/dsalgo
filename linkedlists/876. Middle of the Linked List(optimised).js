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
    let firstPointerNode = head, 
        secondPointerNode = head, 
        t = 1;
    
    while(firstPointerNode !== null){        
        firstPointerNode = firstPointerNode.next;
        if(t%2 !==0 && t>1) secondPointerNode = secondPointerNode.next;
        t++;
    }
    
    return (t-1)%2==0? secondPointerNode.next: secondPointerNode;
};