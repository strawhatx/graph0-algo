/**
  

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

class PathSum {
  hasPathSum(root, targetSum) {
    if (root === null) {
      return false;
    } else if (
      root.left === null &&
      root.right === null &&
      targetSum - root.val === 0
    ) {
      return true;
    } else {
      return (
        this.hasPathSum(root.left, targetSum - root.val) ||
        this.hasPathSum(root.right, targetSum - root.val)
      );
    }
  }
}
