/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

 var inorderTraversal = function(root) {
    const result = [];
    let currentNode = root;
    const stack = [];
    
    while(currentNode !== null || stack.length!==0){
        while(currentNode !== null){
              stack.push(currentNode);
              currentNode = currentNode.left;
        }
        
        currentNode = stack.pop();
        result.push(currentNode.val);
        currentNode = currentNode.right;
    }
    return result;
};