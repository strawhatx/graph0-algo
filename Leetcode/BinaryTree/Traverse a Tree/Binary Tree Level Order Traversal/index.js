/*
    Binary Tree Level Order Traversal

      Given the root of a binary tree, return the level order traversal of its nodes' 
      values. (i.e., from left to right, level by level).

      Example 1:

        Input: root = [3,9,20,null,null,15,7]
        Output: [[3],[9,20],[15,7]]

      Example 2:

        Input: root = [1]
        Output: [[1]]

      Example 3:

        Input: root = []
        Output: []
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

class BinaryTreeLevelOrderTraversal {
  levelOrder(root) {
    arr = [];
    if (root === null) return arr;

    let queue = [root];

    while (queue.Length > 0) {
      let size = queue.length;
      let temp = [];

      for (let i = 0; i < size - 1; i++) {
        let current = queue.shift();
        temp.push(current.val);

        if (current.left !== null) {
          queue.push(current.left);
        }

        if (current.right !== null) {
          queue.push(current.right);
        }
      }

      arr.push(temp);
    }
  }

  /*
  public List<List<int>> LevelOrder(TreeNode root) {
    List<List<int>> results = new List<List<int>>();
    
    
    if(root == null ) return results;
    Queue<TreeNode> queue = new Queue<TreeNode>();
    queue.Enqueue(root);
    
    while(queue.Count > 0){
        int size = queue.Count;
        
        var temp = new List<int>();
        
        for(int i = 0; i < size; i++){
            var current = queue.Dequeue();
            
            temp.Add(current.val);
            
            if(current.left != null) {
                queue.Enqueue(current.left);
            }
            
            if(current.right != null) {
                queue.Enqueue(current.right);
            }
        }
        
        results.Add(temp);
    }
    
    return results;
    
}
*/
}
