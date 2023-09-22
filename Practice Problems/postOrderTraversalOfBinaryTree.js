// FROM: Leetcode
// LEVEL: Easy

// PROBLEM: Given the root of a binary tree, return the postorder traversal of its nodes' values.

// CONSTRAINTS: The number of the nodes in the tree is in the range [0, 100].
//              -100 <= Node.val <= 100
   
// EXAMPLES GIVEN: Input: root = [1, null, 2, 3]   Input: root = []      Input: root = [1]
//                 Output: [3, 2, 1]               Output: []            Output: [1]

//                          1
//                           \
//                            2
//                           /
//                          3


// --------------------------------------------------------------------------------------------------

// SOLVING THE PROBLEM: 

// 1.  UNDERSTAND THE PROBLEM 
//     a.  CAN I RESTATE THE PROBLEM?
        
//     b.  WHAT ARE THE INPUTS?
        
//     c.  WHAT ARE THE OUTPUTS THAT SHOULD COME FROM THE SOLUTION?
       
//     d.  DO I HAVE ENOUGH INFORMATION?  WHAT QUESTIONS DO I HAVE?
         
//     e.  HOW SHOULD I LABEL THE IMPORTANT DATA IN THE PROBLEM?
        
// 2.  EXPLORE CONCRETE EXAMPLES

//         Input: root = [1, 2, 3, 4, 5, 6, 7]
//         Output: [1]
//
//              1
//             / \
//            2   3
//           /\   /\
//          4  5 6  7
       

// 3.  BREAK THE PROBLEM DOWN STEP-BY-STEP
//     a.  Can I eliminate the circumstances where the output would automatically be false? 
//         Alternatively, what would need to be true or false in order for the output to be correct? 
       
//     b. Create a step-by-step plan to solve the problem.

//      1. If the root node is empty, return an empty array
//      2. Create an empty array called output to return the node values post order
//      3. Create a stack and set it equal to an empty array
//      4. Create a variable called current and set it equal to the root node
//      5. While current is not null and/or the stack is not empty
//      6. If the current node is not null
//      7. Push the current node to the stack
//      8. Add the current node's value to the FRONT of the output array via array.unshift()
//      9. Reassign current to the right child
//     10. If the curren node IS null
//     11. Create a variable called node and set it equal to the node popped from the stack
//     12. Set current equal to current.left
//     13. Once all nodes have been processed, return the output array.


// 4.  IMPLEMENT THE STEPS ABOVE, AND MAKE USE OF DEVTOOLS IF NECESSARY

//O(n) time - where n is the number of nodes in the binary tree. This is because we visit each node exactly once.

// O(n) space -  In the worst case, the stack can contain all the nodes in the tree, which would be O(n) space. 
//               Additionally, the output array can also contain all the nodes in the tree, resulting in O(n) space
//               complexity. Therefore, the overall space complexity is O(n)

var postorderTraversal = function(root) { 
    // If the root node is empty, return an empty array
    if(!root) return [];
    // Create an array called output to return the node values postorder
    let output = [];
    // Create an array called stack to store the nodes postorder before we add their values to the output array
    let stack = []
    // create a variable called current and set it equal to root
    let current = root;
    // While current is not null and/or stack is not empty
    while (current != null || stack.length != 0) {
        // If current is not null
        if (current != null) {
            // Push the current node to the stack
            stack.push(current);
            // add the current value to the beginning of the output array
            output.unshift(current.val);
            // reassign current to current.right
            current = current.right
        // If current is null    
        } else {
            // Create a variable called node and set it equal to the node popped from the stack
            let node = stack.pop();
            // set current equal to node.left
            current = node.left;
        }
    }
    // Once all nodes have been processed, return the output array
    return output;
};


// // TEST CASES: 

// <!-- console.log('TEST CASE 1:')

// console.log('nums: ', nums)
// solution = 
// console.log('solution: ', solution)
// output = singleNumber(nums);
// console.log('output: ', output)
// if (solution === output) {
//     console.log('PASS')
// } else {
//     console.log('FAIL');
// }
// console.log(''); -->

// 5.  IF YOU ARE HAVING TROUBLE, SOLVE A SIMPLER PROBLEM
//     a. Identify the part of the problem where you are stuck
    
//     b. Ignore that part and solve everything else

//     c. Return to the part where you are stuck and try to figure it out.

// 6. LOOK BACK AND REFACTOR
//     a. What is the time/space complexity for your solution?

//     b. Are there parts of the solution that could be more efficient?

//     c. Are there parts of the solution that could be shorter?

//     d. Consider other approaches to the problem.  Are any of them more efficient? -->