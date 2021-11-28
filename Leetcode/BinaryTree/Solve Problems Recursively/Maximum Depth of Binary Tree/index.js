/**
    Maximum Depth of Binary Tree

        Given the root of a binary tree, return its maximum depth.

        A binary tree's maximum depth is the number of nodes along the longest path from the root 
        node down to the farthest leaf node.

        Example 1:

            Input: root = [3,9,20,null,null,15,7]
            Output: 3

        Example 2:

            Input: root = [1,null,2]
            Output: 2

        Example 3:

            Input: root = []
            Output: 0

        Example 4:

            Input: root = [0]
            Output: 1

 */

class TreeNode {
  data;
  left;
  right;

  constructor(x, l, r) {
    this.data = x;
    this.left = l;
    this.right = r;
  }
}

class MaximumDepthofBinaryTree {
  dfs(node, max) {}

  maxDepthRecursive(root) {
    if (root === null) return 0;

    return 1 + Math.max([maxDepth(root.left), maxDepth(root.right)]);
  }

  maxDepthIteritave(root) {
    if (root === null) return 0;

    let stack = [root];
    let depths = [1];
    let depth = 0;
    while (stack.length > 0) {
      let current = stack.pop();
      let d = depths.pop();

      if (current !== null) {
        depth = Math.max([depth, d]);
        stack.push(root.right);
        depths.push(d + 1);

        stack.push(root.left);
        depths.push(d + 1);
      }
    }

    return depth;
  }
}
