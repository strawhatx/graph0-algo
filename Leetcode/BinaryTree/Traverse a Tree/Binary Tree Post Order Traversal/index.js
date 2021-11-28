/*
  
  Binary Tree Postorder Traversal

    Given the root of a binary tree, return the postorder traversal of its nodes' values.

    Example 1:

      Input: root = [1,null,2,3]
      Output: [3,2,1]

    Example 2:

      Input: root = []
      Output: []

    Example 3:

      Input: root = [1]
      Output: [1]

    Example 4:

      Input: root = [1,2]
      Output: [2,1]

    Example 5:

      Input: root = [1,null,2]
      Output: [2,1]
    
    Constraints:

    The number of the nodes in the tree is in the range [0, 100].
    -100 <= Node.val <= 100
    

    Follow up: Recursive solution is trivial, could you do it iteratively?
    
*/

class TreeNode {
  data;
  left;
  right;

  constructor(val, left = null, right = null) {
    this.data = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTreePostorderTraversal {
  dfs_recursive(node, arr = []) {
    if (node === null) return arr;

    //left right then node
    arr = this.dfs_recursive(node.left, arr);
    arr = this.dfs_recursive(node.right, arr);
    arr(node.val);

    return arr;
  }

  dfs(node, arr = []) {
    if (node == null) return arr;

    let stack = [];

    while (stack.length > 0) {
      let current = stack.pop();

      if (current.left !== null) {
        stack.push(current.left);
      }

      if (current.right !== null) {
        stack.push(current.right);
      }

      arr.push(current);
    }
  }

  postorderTraverse(root) {
    return this.dfs(root, []);
  }
}
