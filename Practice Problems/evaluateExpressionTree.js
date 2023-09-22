// FROM: AlgoExpert
// LEVEL: Easy

// PROBLEM: You're given a binary expression tree.  Write a function to evaluate this tree \
//          mathematically and return a single resulting integer.  All leaf nodes in the tree 
//          represent operands, which will always be positive integers. All other nodes represent
//          operators. There are 4 operators supported, each of which is represented by a 
//          negative integer:   -1: Addition operator, adding the left and right subtrees
//                              -2: Subtraction operator, subtracting the right subtree from the left subtree
//                              -3: Division operator, dividing the left subtree by the right subtree
//                                  (If the result is a decimal, it should be rounded towards zero)
//                              -4: Multiplication operator, multiplying the left and right subtrees.
//          You can assume the tree will always be a valid expression tree.  Each operator also works as a 
//          grouping symbol, meaning the bottom of the tree is always evaluated first, regardless of the operator.
    

// CONSTRAINTS: None given other than in the prompt above
   
// EXAMPLES:      Input : tree =      -1       Output: 6
//                                   /   \     Explanation: (((2 * 3) - 2) + (8 / 3)) = 6
//                                 -2     -3
//                                 / \    / \
//                               -4  -2  8   3
//                               /     \
//                              2       3
// ----------------------------------------------------------------------------------------------------------

// SOLVING THE PROBLEM: 

// 1.  UNDERSTAND THE PROBLEM 
//     a.  CAN I RESTATE THE PROBLEM?
//        We must evaluate this Binary Expression tree, with the knowledge that all leaf nodes are positive integers,
//        All other nodes are operators represented by negative integers: -1 is addition, -2 is subtraction, -3 is division
//        and -4 is multiplication.  The operators work by always evaluating from left to right, and each operator is also
//        a groupling symbol.
//        
//     b.  WHAT ARE THE INPUTS? 
//          Input is the root node of a binary expression tree
        
//     c.  WHAT ARE THE OUTPUTS THAT SHOULD COME FROM THE SOLUTION?
//          The output should be a single integer that is equal to whatever the tree evaluates to.
       
//     d.  DO I HAVE ENOUGH INFORMATION?
         
//     e.  HOW SHOULD I LABEL THE IMPORTANT DATA IN THE PROBLEM?
        
// 2.  EXPLORE CONCRETE EXAMPLES
       
//      Input: tree =       -4         Output: 8
//                         /   \       Explanation:  ((6 + (4/2)) * (9-8)) = 8  
//                       -1     -2
//                       / \    /  \  
//                     6   -3  9    8 
//                         / \
//                        4   2

// 3.  BREAK THE PROBLEM DOWN STEP-BY-STEP
//     a.  Can I eliminate the circumstances where the output would automatically be false? 
//         Alternatively, what would need to be true or false in order for the output to be correct? 
       
//     b. Create a step-by-step plan to solve the problem.

// 4.  IMPLEMENT THE STEPS ABOVE, AND MAKE USE OF DEVTOOLS IF NECESSARY

// O(n) time, where n is the number of nodes in the tree because we must traverse the whole tree.
// O(h) space, where h is the height of the tree, which is the number of recursive calls
function evaluateExpressionTree (tree) {
     // This is our base case: when we reach a leaf node 
    // (if the value at the node is positive, then we know it's a leaf node)
    if (tree.value >= 0) return tree.value;
    // Calling the function recursively on each subtree at each level of the tree
    let leftValue = evaluateExpressionTree(tree.left);
  let rightValue = evaluateExpressionTree(tree.right);
  // If statements instructing which operators to use when evaluating subtrees
  if (tree.value === -1) return leftValue + rightValue;
  if (tree.value === -2) return leftValue - rightValue;
  if (tree.value === -3) return Math.trunc(leftValue / rightValue);
    
  return leftValue * rightValue;
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