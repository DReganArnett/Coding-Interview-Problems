// FROM: Leetcode       
// LEVEL: Easy

// PROBLEM: Given the root of a binary tree, check whether it is a mirror of itself (i.e. symmetric
//          around its center).
    

// CONSTRAINTS: The number of nodes in the tree is in the range [1, 1000].
//              -100 <= Node.val <= 100

   
// EXAMPLES GIVEN:  Input: root = [1,2,2,3,4,4,3]                        1
//                  Output: true                                       / |  \
//                                                                    2  |   2
//                                                                   / \ |  / \
//                                                                  3   4| 4   3

//                  Input: root = [1,2,2,null,3,null,3]                  1  
//                  Output: false                                       /  \  
//                                                                     2    2
//                                                                      \    \
//                                                                       3    3 
// --------------------------------------------------------------------------------------------------

// SOLVING THE PROBLEM: 

// 1.  UNDERSTAND THE PROBLEM 
//     a.  CAN I RESTATE THE PROBLEM?
//      If the tree is symmetrical, meaning whether the left half is a mirror of the right half,
//      return true, otherwise return false
        
//     b.  WHAT ARE THE INPUTS?
//       The root of a binary tree
        
//     c.  WHAT ARE THE OUTPUTS THAT SHOULD COME FROM THE SOLUTION?
//        true or false

//     d.  DO I HAVE ENOUGH INFORMATION?  WHAT QUESTIONS DO I HAVE?
//         Yes
         
//     e.  HOW SHOULD I LABEL THE IMPORTANT DATA IN THE PROBLEM?
//         current, leftPointer, rightPointer 

        
// 2.  EXPLORE CONCRETE EXAMPLES

//     Input: root = [1, 2, 2, 3, null, null, 3]                    1
//     Output: true                                                /|\
//                                                                2 | 2
//                                                               /  |  \
//                                                              3   |   3

//    Input: root = [1, 2, null, 3, 3]               1
//    Output: false                                 / 
//                                                 2
//                                                / \
//                                               3   3

//    Input: root = [1]             1
//    Output = true;
//               

// 3.  BREAK THE PROBLEM DOWN STEP-BY-STEP
//     a.  Can I eliminate the circumstances where the output would automatically be false? 
//         Alternatively, what would need to be true or false in order for the output to be correct? 
//         If the root has no child nodes, return true.   

//     b. Create a step-by-step plan to solve the problem.

// HERE IS A RECURSIVE SOLUTION THAT WORKS: 

// O(n) time - where n is the number of nodes in the tree. This is because the function traverses each node in the tree once.
// O(h) space - where h is the height of the tree. This is because the function uses recursive calls, and the maximum depth 
//      of the recursive calls is equal to the height of the tree.
var isSymmetric = function(root) {
    // If the root has no children, return true;
    if (!root.left && !root.right) return true;

    // Define output as true to start out
    let output = true;
    
    // Create a traverse function that traverses and compares both halves of the tree
    // The parameters are the left child and the right child of the root.
    function traverse(rootLeft, rootRight){
        // If there is both a rightRoot and a leftRoot (meaning that the original root has 
        // both a right child and a left child) 
        if(rootLeft && rootRight) {
            // If the two values are not equal, update output to false and return false
            if(rootLeft.val !== rootRight.val){
                output = false;
                return false;
            }
            // If the two values are equal, call the traverse(function on each child
            // of the two roots)
            traverse(rootLeft.left, rootRight.right)
            traverse(rootLeft.right, rootRight.left)
        }
        // If there is only a rootLeft, update output to false and return false
        if(rootLeft && !rootRight) {
            output = false;
            return false
        }
        // If there is only a rootRight, update output to false and return false
        if(!rootLeft && rootRight) {
            output = false;
            return false;
        }

    }
    // Call the traverse function on the left and right child of the root to start the  
    // recursive cycle
    traverse(root.left,root.right)

    // Return the output when the function stops recursing
    return output;
}




//  THIS DID NOT WORK:
//  CREATE HELPER FUNCTION - createTreeArrays(root)
//  x1.  Define function createTreeArrays with root as argument
//  x2.  Create variables currentLeft and currentRight, and set both equal to root
//  x3.  Create variables rightTree = [root] and leftTree = [root]
//  x4.  Initiate a while-loop that runs while currentLeft AND currentRight have left or right children 
//  x5.  If currentLeft has a left child, push it to the leftTree, if not, push null to the leftTree
//  x6.  If current.left has a left child, redefine currentLeft as currentLeft = currentLeft.left.  If not, continue  
//  x7.  If currentLeft has a right child, push it to the leftTree, if not, push null to the leftTree
//  x8.  If currentLeft has a right child, redefine currentLeft as currentleft = currentLeft.right
//  x9.  If currentRight has a left child, push it to the rightTree, if not, push null to the rightTree
// x10  If currentRight has a left child, redefine currentRight as currentRight = currentRight.left. If not, continue
// x11.  If currentRight has a right child, push it to the rightTree, if not, push null to the rightTree
// x12.  If currentRight has a right child, redefine currentRight as currenRight = currentRight.right 
// x13.  When the loop finishes, return leftTree and rightTree

//  CREATE MAIN FUNCTION - isSymmetric(root)
//  x1.  Define function isSymmetric with root as argument
//  x2.  If the root has no child nodes, return true
//  x3.  Call createTreeArrays with root  
//  x4.  Create a leftPointer and set it equal to leftTree[0], as well as a rightPointer 
//       and set it equal to rightTree[0]
// x5.  Loop through both trees and compare the values at the pointer indexes.  
// 6.  If the two pointers are not equal, return false, otherwise increment both pointers by 1
// 7.  If the loop finishes without returning false, return true


// 4.  IMPLEMENT THE STEPS ABOVE, AND MAKE USE OF DEVTOOLS IF NECESSARY

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

function createTreeArray (root) {
    let current = root;
    let treeArray = [root];

    // Traverse tree and create two tree arrays
    while ((current.left && current.right)) {
        // Filling in treeArray
        if (current.left) {
            treeArray.push(current.left);
        } else {
            treeArray.push(null);
        }
        if (current.left) current = current.left;
        if (current.right) { 
            treeArray.push(current.right);
        } else {
            treeArray.push(null);
        }
        if  (current.right) current = current.right;
    }
    // Return newly-constructed tree array
    return treeArray
}

function isSymmetric (root) {
    // Edge case check
    if (!root.left && !root.right) return true;

    // Create tree arrays
    let leftRoot = root.left;
    let rightRoot = root.right;
    const leftTree = createTreeArray(leftRoot);
    const rightTree = createTreeArray(rightRoot);

    console.log("leftTree: ", leftTree);
    console.log("rightTree: ", rightTree);

    // Create pointers
    let leftPointer = leftTree[0];
    let rightPointer = rightTree[0];

    // Loop through tree arrays and compare values at pointers.  If they are not equal, return false, 
    // if they are equal, increment both pointers by 1
    for (let left = 0, right = 0; left = leftTree.length, right = rightTree/length; left++, right++) {
        if (leftPointer !== rightPointer) {
            return false;
        } else {
            leftPointer++;
            rightPointer++
        }
    }

    // If the loop finishes with out returning false, return true
    return true;
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



// // Filling in rightTree array
// if (currentRight.left) {
//     rightTree.push(currentRight.left);
// } else {
//     rightTree.push(null);
// }
// if (currentRight.left) currentRight = currentRight.left;
// if (currentRight.right) {
//     rightTree.push(currentRight.right);
// } else {
//     rightTree.push(null);
// }
// if (currentRight.right) currentRight = currentRight.right;
// }
// console.log("leftTree: ", leftTree);
// console.log("rightTree: ", rightTree);