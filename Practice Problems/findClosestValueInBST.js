// FROM: AlgoExpert
// LEVEL: Easy

// PROBLEM: Write a function that takes in a Binary Search Tree and a target integer value, and returns
//          the closes value to the target value contained in the BST. 
//          You can assume that there will only be one closest value.
//          Each BST node has an integer value, a left child node and a right child node.  A node is 
//          said to be a valid BST node if and only if it satisfies the BST property: its value is 
//          strictly greater than the values of every node to its left, its value is less than or equal
//          to the values of every node to its right; and it's children nodes are either valid BST nodes
//          themselves or null.
    

// CONSTRAINTS: None given beyond problem description
   
// EXAMPLES GIVEN:          INPUT: tree = 10         target = 12   solution: 13
//                                       /   \
//                                      5     15
//                                     / \   /  \
//                                    2   5 13   22
//                                   /        \
//                                  1          14
// --------------------------------------------------------------------------------------------------

// SOLVING THE PROBLEM: 

// 1.  UNDERSTAND THE PROBLEM 
//     a.  CAN I RESTATE THE PROBLEM?
//          Given a Binary Search Tree and an integer, find the value in the tree that is closest to
//          the target. 
        
//     b.  WHAT ARE THE INPUTS?
//          A BST and a target
        
//     c.  WHAT ARE THE OUTPUTS THAT SHOULD COME FROM THE SOLUTION?
//          An integer value
       
//     d.  DO I HAVE ENOUGH INFORMATION?
//          I would want to know if the tree might be empty
         
//     e.  HOW SHOULD I LABEL THE IMPORTANT DATA IN THE PROBLEM?
//          We should create a variable called 'closest' and set it equal to the root value. We will
//          update this value as we find values that are closer to the target
        
// 2.  EXPLORE CONCRETE EXAMPLES

//            tree =    16          target = 20     solution: 22 
//                    /    \
//                  14      24
//                 /  \     / \
//               11   15  22  26
//              /           \
//            10             23

// 3.  BREAK THE PROBLEM DOWN STEP-BY-STEP
//     a.  Can I eliminate the circumstances where the output would automatically be false? 
//         Alternatively, what would need to be true or false in order for the output to be correct? 
//         If there is only one node in the tree, then return the value of the root node
       
//     b. Create a step-by-step plan to solve the problem.

//      1. Create a variable called closest and set it equal to the root node
//      2. Create a variable called current and set it equal to the root node
//      3. Creat a variable called diff and set it equal to target-current.
//      4. Create a while-loop that runs while current is not null
//      5. Compare current to target.  If it is equal to the current node, return the current node.
//         If target is less than the current node AND left child is not null, set current equal to 
//         the left child. Else, return current. If target is more than current AND right child is not null  
//         set current to the right child. 
//      6. Create a variable called curDiff.
//      7. Calculate the difference between current and target and set it equal to curdDiff. 
//      8. Compare it to diff to currDiff.  If curfDiff is less than diff, set closest equal to current
//      9. When the loop ends (meaning we've reached a leaf node), return closest.


// 4.  IMPLEMENT THE STEPS ABOVE, AND MAKE USE OF DEVTOOLS IF NECESSARY

// O(n) time 
// The time complexity of this function is O(log(n)) in the average case and O(n) in the 
// worst case, where n is the number of nodes in the BST. This is because in each iteration 
// of the while loop, we are either moving to the left or right child of the current node, 
// effectively cutting the search space in half. In the worst case, where the BST is skewed 
// and resembles a linked list, we would have to visit every node in the tree, resulting in
// a time complexity of O(n).

// O(1) space
// The space complexity of this function is O(1) because we are using a constant amount of 
// additional space to store the current and closest variables. The function does not use any 
// additional data structures that grow with the input size.

function findClosestValueInBst(tree, target) {
    // Define root of given tree as current
    let current = tree;
    // Define closest as the value at the root of the given tree
    let closest = tree.value;
    // While current is not null
    while (current !== null) {
      // If the absolute value of the difference between target and closest is greater than
      // the absolute value of the difference between target and current.value, then 
      // set closest equal to current.value
      if (Math.abs(target-closest) > Math.abs(target-current.value)) closest = current.value;
      // If target is less than current.value 
      if(target < current.value) {
        // set current to current.left
        current = current.left
      // Else if target is greater than current.value  
      } else if (target > current.value) {
         // set current to current.left
         current = current.right;
        // Else (meaning if target is equal to current.value)
      } else {
        // Break out of the while loop
        break;
      }
    }
    // If we break out of the loop or if current === null, return closest
    return closest;
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