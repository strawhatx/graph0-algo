/*
    Binary Tree Inorder Traversal

        Given the root of a binary tree, return the inorder traversal of its nodes' values.

        Example 1:

            Input: root = [1,null,2,3]
            Output: [1,3,2]

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
            Output: [1,2]
        
        Constraints:

        The number of nodes in the tree is in the range [0, 100].
        -100 <= Node.val <= 100
        

        Follow up: Recursive solution is trivial, could you do it iteratively?

*/

class TreeNode {
  data;
  left;
  right;

  constructor(val, l, r) {
    this.data = val;
    this.left = l;
    this.right = r;
  }
}

class BinaryTreeInorderTraversal {
  dfs_recursive(node, arr = []) {
    if (node === null) return arr;

    //left node then right
    arr = this.dfs(node.left, arr);
    arr.push(node.val);
    return this.dfs_recursive(node.right, arr);
  }

  dfs(node, arr = []) {
    if (node == null) return arr;

    let stack = [];

    while (stack.length > 0) {
      // move to the furthest left point
      while (node != null) {
        stack.push(node);
        node = node.left;
      }

      // now lets work
      node = stack.pop();

      arr.push(node.val);

      node = node.right;
    }

    return arr;
  }

  inorderTraverse(root) {
    this.dfs_recursive(root, []);
  }
}
