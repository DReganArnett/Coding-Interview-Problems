// FROM : Leetcode
// LEVEL: Easy

// PROBLEM: Given the root of a binary tree and an integer targetSum, return true if the tree has a
//          root-to-leaf path such that adding up all the values along the path equals the targetSum.
//          (A leaf node is a node with no children).

    

// CONSTRAINTS:  The number of nodes in the tree is in the range [0, 5000].
//              -1000 <= Node.val <= 1000
//              -1000 <= targetSum <= 1000
   
// EXAMPLES GIVEN:  
//       Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22                Input: root=[1,2,3], targetSum=5
//       Output: true                                                                           Output: false
//       Explanation: The root-to-leaf path with the target sum: (5-->4-->11-->2)               Explanation: The two root-to-leaf paths:
//                                                                                                          (1-->2): The sum is 3, (1-->3): The sum is 4               
//                              5                                                                       1
//                           /     \                                                                 /    \
//                         4         8                                                             2        3
//                       /         /   \
//                     11         13    4
//                    /  \                \
//                   7    2                1

//       Input: root = [], targetSum=0
//       Output: false
//       Explanation: Since the tree is empty, there are not root-to-leaf paths.
// --------------------------------------------------------------------------------------------------

// SOLVING THE PROBLEM: 

// 1.  UNDERSTAND THE PROBLEM 
//     a.  CAN I RESTATE THE PROBLEM?
        // We are given the root of a binary tree, and an integer as a targetSum.  Return true if there is a path along the 
        // tree whose nodes sum up to the targetSum
        
//     b.  WHAT ARE THE INPUTS?
        // A root node and a target sum
        
//     c.  WHAT ARE THE OUTPUTS THAT SHOULD COME FROM THE SOLUTION?
        // true or false
       
//     d.  DO I HAVE ENOUGH INFORMATION?
        // Yes
         
//     e.  HOW SHOULD I LABEL THE IMPORTANT DATA IN THE PROBLEM?
        // Inputs are root and targetSum, so we'll keep those, plus we should have a sum variable initialized at root.val.
        // We should also have a pointer that points to the node we are examining.  We initialize that at root.val.
        
// 2.  EXPLORE CONCRETE EXAMPLES 
        // See above
       

// 3.  BREAK THE PROBLEM DOWN STEP-BY-STEP
//     a.  Can I eliminate the circumstances where the output would automatically be false? 
//         Alternatively, what would need to be true or false in order for the output to be correct? 
        // If the root node is null, return false.  
        // If the root node has no children, and the targetSum is equal to the root node, return true
        // If the root node has no children, and the targetSum is NOT equal to the root node, return false

//     b. Create a step-by-step plan to solve the problem.
        // My intuition is to do a depth-first-search, adding up the nodes as we go. If we reach the target sum at
        // a node that is not a leaf OR if we reach a leaf and the sum is not equal to the targetSum, then we move 
        // on to the next path. We return true when we reach a leaf and the sum===targetSum.  We return false if we
        // traverse the whole tree without finding the target sum.  
        // If we think about how to implement this, since there is a lot of repetition in the summing up and comparing, 
        // perhaps we could use recursion or, perhaps a helper function.

        // 1. Create a variable called toVisit and set it to an array containing the root node (this will act as a stack)
        // 2. Create a variable called runningSum, and set it to 0
        // 3. If current > target, return false
        // 4. Create a while loop that runs while the toVisit stack is not empty
        // 5. Create a variable called current and set it to toVisit.pop() (the value at the top of the stack)
        // 6. runningSum = runningSum += current.value
        // 7. If runningSum === target && current.left == null and current.right==null, return true
        // 8. Else push left and right child to the stack
        // 9. If the stack is empty and the function has not returned true, return false.
        

// 4.  IMPLEMENT THE STEPS ABOVE, AND MAKE USE OF DEVTOOLS IF NECESSARY

function hasPathSum(root, target) {
        let toVisit = [root.value];
        let runningSum = 0;
        while (toVisit.length !== null) {
                let current = toVisit.pop();
                runningSum += current.value;
                if (runningSum === target && !current.left && !current.right){
                        return true
                } else {
                        toVisit.push(current.left);
                        toVisit.push(current.right)
                }
        }
        return false;
}
       


// Here is a solution from leetcode using a helper function and recursion
var hasPathSum = function(root, targetSum) {
        // We begin with the result = false because we have not yet found a path that adds up to the root
        let result = false;
        // Initialize a helper function taking in a node, and with a sum equal to 0
        function helper (node, sum=0) {
            //if the node is empty, return 
            if (!node) return;
            // Create a variable called runningSum that sums up sum += node.value
            const runningSum = sum+node.val;
            // If runningSum equals the target sum and it is also a leaf node, 
            if(runningSum == targetSum && !node.left && !node.right) {
                // return true
                result = true;
            }
            // else call helper on the left and right children along with runningSum 
            helper(node.left, runningSum);
            helper(node.right, runningSum);
        }
        helper(root);
        return result;
    };

// 5.  IF YOU ARE HAVING TROUBLE, SOLVE A SIMPLER PROBLEM
//     a. Identify the part of the problem where you are stuck
    
//     b. Ignore that part and solve everything else

//     c. Return to the part where you are stuck and try to figure it out.

// 6. LOOK BACK AND REFACTOR
//     a. What is the time/space complexity for your solution?

//     b. Are there parts of the solution that could be more efficient?

//     c. Are there parts of the solution that could be shorter?

//     d. Consider other approaches to the problem.  Are any of them more efficient?