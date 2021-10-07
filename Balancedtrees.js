let isBalanced = function(root) {
        if(root == null){
            return true;
        }
        
        let leftHeight = getHeight(root.left);
        let rightHeight = getHeight(root.right);
        
        return Math.abs(leftHeight - rightHeight) <= 1 && isBalanced(root.left) && isBalanced(root.right);
    }
    
    let getHeight = function( root){
        if(root == null){
            return -1;
        }
        
        return Math.max(getHeight(root.left), getHeight(root.right)) + 1;
    }

    
    
    /*
    Success
Details 
Runtime: 84 ms, faster than 86.38% of JavaScript online submissions for Balanced Binary Tree.
Memory Usage: 43.1 MB, less than 86.62% of JavaScript online submissions for Balanced Binary Tree.
*/
