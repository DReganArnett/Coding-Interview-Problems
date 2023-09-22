// FROM: AlgoExpert
// LEVEL: Easy

// PROBLEM: Write a function that takes in a Binary Tree and returns a list of its branch sums 
//          ordered from leftmost branch sum to rightmost branch sum.  A branch sum is the sum of
//          all values in a Binary Tree branch.  A Binary Tree is a path of nodes in a try that 
//          starts at the root node and ends at any leaf node.  Each BinaryTree node has an integer 
//          value, a left child node, and a right child node.  Children nodes can either be BinaryTree
//          nodes themselves or null.    

// CONSTRAINTS: Optimal Space & Time Complexity: O(n) time | O(n) space where n is the number of nodes
//              in the Binary Tree
   
// EXAMPLES GIVEN:  INPUT:                  OUTPUT: [15, 26, 18, 10, 11]
        //                  tree = 1           
        //                        /  \
        //                       2    3
        //                      / \   / \
        //                     4   5 6   7
        //                    / \  /
        //                   8  9 10
// --------------------------------------------------------------------------------------------------

// SOLVING THE PROBLEM: 

// 1.  UNDERSTAND THE PROBLEM 
//     a.  CAN I RESTATE THE PROBLEM?
//          Find the total sum of each branch in a binary tree and return them in an array with the sums
//          ordered from the leftmost branch to the rightmost branch.
        
//     b.  WHAT ARE THE INPUTS?
//           The root of a binary tree.
        
//     c.  WHAT ARE THE OUTPUTS THAT SHOULD COME FROM THE SOLUTION?
//           An array of the sums of each branch ordered from left to right
       
//     d.  DO I HAVE ENOUGH INFORMATION?
//           Yes
         
//     e.  HOW SHOULD I LABEL THE IMPORTANT DATA IN THE PROBLEM?
        
// 2.  EXPLORE CONCRETE EXAMPLES:   INPUT:                  OUTPUT: [28, 32, 36, 20, 22]
//                                  tree =   2         
//                                         /    \
//                                        4      6
//                                      /  \    /  \
//                                     8    10 12  14
//                                   /  \   /
//                                  16  18 20

// 3.  BREAK THE PROBLEM DOWN STEP-BY-STEP
//     a.  Can I eliminate the circumstances where the output would automatically be false? 
//         Alternatively, what would need to be true or false in order for the output to be correct? 
//             If there are no left or right children, return root

//     b. Create a step-by-step plan to solve the problem.
//             1. Initialize an empty array to store the final sums
//             2. If there are no left or right children, return root
//             3. Use while-loops that finish when a child node === null 
//             4. Starting at the root, if there is a child node to the left, add root+leftChild
//             5. Do the same if there is a child node to the right
//             6. Use recursion to continue the pattern  
//             7. When the while loops end, push the sums to the array of sums and return it

// 4.  IMPLEMENT THE STEPS ABOVE, AND MAKE USE OF DEVTOOLS IF NECESSARY
// My stab at it:
// function branchSums(root) {
//     let sums = [];
//     if (root.left === null && root.right === null) return sums.push(root);
//     let node = root;
//     let sum1;
//     let sum2;
//     let sum3;
//     let sum4;
//     while (node.left !== null) {
//         sum1 = node + node.left;
//         sum2 = node + node.right;
//         nodeLeft = node.left.left;
//         nodeRight = node.right.right
//         sum1 += nodeLeft;
//         sum2 += nodeRight;
//     }
//     sums.push(sum1);
//     sums.push(sum2);
//     while (node.right !== null) {
//         sum3 = node + node.left;
//         sum4 = node + node.right;
//         node.left = node.left.left;
//         node.right = node.right.right;
//     }
//     sums.push(sum3);
//     sums.push(sum4);
//     return sums;
// }

//  THE SOLUTION FROM THE ALGOEXPERT VIDEO  (there's one more below that)
function branchSums(root) {
    // This is the array where we will store the branch sums
    const sums = [];
    // We call the function below, which recursively calls itself until a leaf 
    // node is reached
    calculateBranchSums(root, 0, sums);
    // Once all branches are pushed to the sums array, return it.
    return sums;
}
// We will call this function recursively until the node we are at is a leaf node
function calculateBranchSums(node, runningSum, sums) {
    // If there is no left of right child node, return 
    if (!node) return;
    // Here we are calculating the sum 
    const currentRunningSum = runningSum + node.value;
    // This is our base case...When we reach a leaf node, push the currentRunningSum
    // to the sums array and return 
    if(!node.left && !node.right) {
        sums.push(currentRunningSum);
        return;
    } 
    // Call the function recursively on the left child node
    calculateBranchSums(node.left, currentRunningSum, sums);
    // call the function recursively on the right child node
    calculateBranchSums(node.right, currentRunningSum, sums);
}

///////////////////////////////////////////////////////////////////////////////////////////
// One more solution:

function branchSums(root, sum=0, sums=[]) {
    // This is teh calculation done at each node
    const currentSum = root.value + sum;
    // If the current node (root) is a leaf node
    if(!root.left && !root.right) {
        // Push the currentSum into the sums array
        sums.push(currentSum);
    }
    // If the current node (now root) has a left child node
    if(root.left) {
        // Call branchSums() recursively with root.left, currentSum and sums
        branchSums(root.left, currentSum, sums);
    }
    // If the current node (now root) has a right child node
    if(root.right) {
        // Call branchSums() recursively with root.right, currentSum and sums
        branchSums(root.right, currentSum, sums);
    }
    // When all leaf nodes are reached, return the sums array.
    return sums;
}

// 5.  IF YOU ARE HAVING TROUBLE, SOLVE A SIMPLER PROBLEM
//     a. Identify the part of the problem where you are stuck
    
//     b. Ignore that part and solve everything else

//     c. Return to the part where you are stuck and try to figure it out.

// 6. LOOK BACK AND REFACTOR
//     a. What is the time/space complexity for your solution?

//     b. Are there parts of the solution that could be more efficient?

//     c. Are there parts of the solution that could be shorter?

//     d. Consider other approaches to the problem.  Are any of them more efficient?