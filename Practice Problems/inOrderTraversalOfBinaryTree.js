// FROM: Leetcode
// LEVEL: Easy

// PROBLEM: Given the root node of a binary tree, return the in-order traversal of its node values
    

// CONSTRAINTS: The number of nodes in the tree is in the range [0, 100].
//              -100 <= Node.val <= 100

// EXAMPLES GIVEN:  Input: root = [1, null, 2, 3]   Input: root = []   Input: root = [1]
//                  Output: [1,3,2]                 Output: []         Output: [1]

//                      1
//                       \
//                        2
//                       /
//                      3

// --------------------------------------------------------------------------------------------------

// SOLVING THE PROBLEM: 

// 1.  UNDERSTAND THE PROBLEM 
//     a.  CAN I RESTATE THE PROBLEM?
//          Given the root node of a  binary tree, return the values via in-order traversal
        
//     b.  WHAT ARE THE INPUTS?
//      the root node of a binary tree
        
//     c.  WHAT ARE THE OUTPUTS THAT SHOULD COME FROM THE SOLUTION?
//      the values in an array, traversed in-order
       
//     d.  DO I HAVE ENOUGH INFORMATION?  WHAT QUESTIONS DO I HAVE?
         
//     e.  HOW SHOULD I LABEL THE IMPORTANT DATA IN THE PROBLEM?
        
// 2.  EXPLORE CONCRETE EXAMPLES
       

// 3.  BREAK THE PROBLEM DOWN STEP-BY-STEP
//     a.  Can I eliminate the circumstances where the output would automatically be false? 
//         Alternatively, what would need to be true or false in order for the output to be correct? 
       
//     b. Create a step-by-step plan to solve the problem.
//     In-order: left subtree > root > right subtree
//     
//      1. Create an output array and set it to an empty array
//      2. If the root node is empty, return the empty output array
//      3. Create a stack array to keep track of the order in which we will return the values 
//         of the nodes
//      4. Create a current pointer that will point to the node we are currently evaluating.  Set it 
//         equal to root to start with
//      5. Create a while loop that will run while either the node at current is not null, and/or the 
//         stack is not empty
//      6. If the current node is not null, 
//      7. Push it to the stack
//      8. Reassign current to the left child
//      9. If current is empty (meaning we just pushed a leaf node to the stack, so current is now 
//         null since the leaf node has no left child)
//     10. Set current equal to the node popped from the stack
//     11. Push the value of the current node to the output array
//     12. Reassign current to current's right child. (and head back up to the top of the while loop
//         to evaluate the new current node)
//     13. Once all nodes have been processed, return the output array


// 4.  IMPLEMENT THE STEPS ABOVE, AND MAKE USE OF DEVTOOLS IF NECESSARY
// O(n) time = where n is the number of nodes in the binary tree. This is because we visit each node 
//             once during the traversal.
// O(h) space - where h is the height of the binary tree. This is because the maximum number of nodes 
//              that can be stored in the stack at any given time is equal to the height of the tree. 
//              In the worst case scenario, where the tree is skewed and has a height of n, the space 
//              complexity would be O(n). However, in a balanced binary tree, the height is log(n), so 
//              the space complexity would be O(log(n)).

function inOrderBTTraversal(root) {
    let output = [];
    if (!root) return output;
    let stack = [];
    let current = root;
    while(current !== null || stack.length!==0) {
        if (current !== null) {
            stack.push(current);
            current = current.left
        } else {
            current = stack.pop();
            output.push(current.val);
            current = current.right;
        }
    }
    return output;
}


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