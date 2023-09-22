// FROM: LeetCode
// LEVEL: Easy

// PROBLEM: Given the root of a binary tree, return the preorder traversal of its nodes' values;

// CONSTRAINTS: The number of nodes in the tree is in the range [0, 100].
//              -100 <= Node.val <= 100
   
// EXAMPLES GIVEN: Input: root = [1, null, 2, 3]   Input: root = []   Input: root = [1]     
//                 Output: [1,2,3]                 Output: []         Output: [1]

//                      1
//                       \
//                        2
//                       /
//                      3

// --------------------------------------------------------------------------------------------------

// SOLVING THE PROBLEM: 

// 1.  UNDERSTAND THE PROBLEM 
//     a.  CAN I RESTATE THE PROBLEM?
//      We are given the root of a binary tree. Return the values of the nodes in an array in pre-order
        
//     b.  WHAT ARE THE INPUTS?
//      The root node of a binary tree
        
//     c.  WHAT ARE THE OUTPUTS THAT SHOULD COME FROM THE SOLUTION?
//      An array of the values pre-order
       
//     d.  DO I HAVE ENOUGH INFORMATION?  WHAT QUESTIONS DO I HAVE?
         
//     e.  HOW SHOULD I LABEL THE IMPORTANT DATA IN THE PROBLEM?
        
// 2.  EXPLORE CONCRETE EXAMPLES

//         Input: root = [1, 2, 3, 4, 5, 6, 7]
//         Output: output = [1, 3, 2]
//                 stack = [1, 3, 2, 4, 5]
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

//      1. Create an output array to store the values pre-order and set it equal to an empty array
//      2. If the root node is empty, return the empty output array
//      3. Create a stack array to store the order of the nodes whose value we will push to the 
//         output array pre-order
//      4. Push root to the stack
//      5. Create a while loop that will run while the stack isn't empty
//      6. Creaet a current variable and set it equal last node popped from the stack 
//      7. Add current.value to the output array
//      7. If there is a current.left, push current.left to queue
//      9. Push current.right to queue
//     10. Otherwise if set current to the first item in the queue by using queue.unshift()
//     11. add current to output
//

// 4.  IMPLEMENT THE STEPS ABOVE, AND MAKE USE OF DEVTOOLS IF NECESSARY
// O(n) time - where n is the number of nodes in the binary tree. This is because we visit 
//             each node once during the traversal.
// O(n) space - where n is the number of nodes in the binary tree. This is because we use a 
//              stack to store the nodes as we traverse the tree, and in the worst case scenario, 
//              the stack can contain all the nodes of the tree.

function preOrderTraversalOfBT(root) {
    // Create an output array to return the values pre-order 
    let output = []
    // If the root node is empty, return the empty output array
    if (!root) return output;
    // Create a stack to hold the nodes pre-order while we push the values
    // to the output array 
    let stack = [];
    // Push the root node to the stack
    stack.push(root);
    // while the stack is not empty
    while (stack.length > 0) {
        // Create a variable called current and set it equal to the node popped from thestack
        let current = stack.pop();
        // Push current's value to the output array
        output.push(current.val)
        // If current has a left child, add it to the stack
        if (current.right !== null) stack.push(current.right);
        // If current has a left child, push it to the stack
        if (current.left !== null) stack.push(current.left);        
    }
    // Once all nodes have been processed, return the list array
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