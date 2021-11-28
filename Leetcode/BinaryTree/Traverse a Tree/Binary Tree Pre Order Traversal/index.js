/*
    Binary Tree Preorder Traversal

      Given the root of a binary tree, return the preorder traversal of its nodes' values.

      Example 1:

        Input: root = [1,null,2,3]
        Output: [1,2,3]

      Example 2:

        Input: root = []
        Output: []

      Example 3:

        Input: root = [1]
        Output: [1]

      Example 4:

        Input: root = [1,2]
        Output: [1,2]

      Example 5:

        Input: root = [1,null,2]
        Output: [1,2]
      

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

class BinaryTreePreorderTraversal {
  dfs_recursive(node, arr) {
    if (node === null) return arr;

    //node the left right
    arr.push(node.val);

    arr = this.dfs_recursive(node.left, arr);
    return this.dfs_recursive(node.right, arr);
  }

  dfs(root, arr) {
    if (root === null) return arr;

    let stack = [root];

    while (stack.length > 0) {
      let current = stack.pop();

      arr.push(current);

      if (current.right !== null) {
        stack.push(current.right);
      }

      if (current.left !== null) {
        stack.push(current.left);
      }
    }
  }

  preorderTraverse(root) {
    return this.dfs(root, []);
  }
}
