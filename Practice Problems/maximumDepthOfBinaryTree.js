// FROM: LeetCode
// LEVEL: Easy

// PROBLEM: Given the root of a binary tree, return its maximum depth.  A binary tree's maximum
//          depth is the number of nodes along the longest path from the root node down to the
//          farthest leaf node.
    
// CONSTRAINTS:  The number of nodes in the tree is in the range [0, 104].
//               -100 <= Node.val <= 100
   
// EXAMPLES GIVEN:      Input: root = [3, 9, 20, null, null, 15, 7]             Input: root = [1, null, 3]
//                      Output: 3                                               Output: 2
//                                      3                                                       1
//                                    /   \                                                      \
//                                   9     20                                                      2
//                                        /   \
//                                       15    7

// --------------------------------------------------------------------------------------------------

// SOLVING THE PROBLEM: 

// 1.  UNDERSTAND THE PROBLEM 
//     a.  CAN I RESTATE THE PROBLEM?
//         We are given the root of a binary tree.  We must return the tree's maximum depth, which is 
//         the distance from the root node, down the longest path to a leaf node
        
//     b.  WHAT ARE THE INPUTS?
//         The root node of a binary tree
        
//     c.  WHAT ARE THE OUTPUTS THAT SHOULD COME FROM THE SOLUTION?
//          An integer representing the length of the longest path from root to a leaf node

//     d.  DO I HAVE ENOUGH INFORMATION?  WHAT QUESTIONS DO I HAVE?
//         I would ask if the root node is considered 0 or 1 in terms of depth

//     e.  HOW SHOULD I LABEL THE IMPORTANT DATA IN THE PROBLEM?
        
// 2.  EXPLORE CONCRETE EXAMPLES

// 3.  BREAK THE PROBLEM DOWN STEP-BY-STEP
//     a.  Can I eliminate the circumstances where the output would automatically be false? 
//         Alternatively, what would need to be true or false in order for the output to be correct? 
       
//     b. Create a step-by-step plan to solve the problem.
//        We will use breadth-first traversal to solve this problem because we want to make sure we 
//        visit all child nodes to make sure that we find the longest path

//     1.  Create a variable called stack and set it equal to an array containing the root 
//     2.  Create a variable called level, and set it equal to 0
//     3.  Create a while loop that runs while the stack is not empty.
//     4.  Create a variable called currentNode, and set it equal to stack.pop()
//     5.  Increment level by 1
//     6.  If currentNode.left, push it to stack 
//     7.  If currentNode.right, push it to stack
//     8.  When the while loop ends, return level   

// 4.  IMPLEMENT THE STEPS ABOVE, AND MAKE USE OF DEVTOOLS IF NECESSARY
// O(n) time - where n is the number of nodes in the tree. This is because the function uses 
//             a breadth-first search algorithm to traverse the tree, visiting each node once.
// O(m) space - where m is the maximum number of nodes at any level in the tree. This is because 
//              the function uses a queue to store the nodes at each level, and the maximum size 
//              of the queue is equal to the maximum number of nodes at any level.

function maximumDepth(root) {
   // If the root is empty, return 0
   if (!root) return 0;
   // Create a queue to store nodes to be counted
   let queue = [root];
   // Create variable levels, to keep track of tree depth
   let levels = 0;
   // Create a while loop that runs while the queue is not empty
   while(queue.length > 0) {
       // Create variable count and set it equal to the length of the queue
       let count = queue.length;
       // Create a for-loop to loop through the queue
       for (let i = 0; i < count; i++) {
           // Create the variable currentNode and set it equal to the first node in the queue
           let currentNode = queue.shift();
           // if currentNode has a left child, push it to the queue
           if (currentNode.left) queue.push(currentNode.left);
           // if currentNode has a right child, push it to the queue
           if (currentNode.right) queue.push(currentNode.right);
       }
       // for each item in the queue, add 1 to levels
       levels ++
   }
   // Once all node in queue have been processed, return levels
   return levels;
}

// Here is a recursive solution, which is more optimal when it comes to space and time complexity

function maximumDepth2(root) {
    // If the root is empty, return 0
    if(root === null) return 0;
    // Find the maximumDepth of the left and right subtrees
    // Each time, add 1 for the parent node that we are traversing
    return 1 + Math.max(maximumDepth2(root.left), maximumDepth2(root.right));
}


let root = [3, 9, 20, null, null, 15, 7]
maximumDepth(root);

// 5.  IF YOU ARE HAVING TROUBLE, SOLVE A SIMPLER PROBLEM
//     a. Identify the part of the problem where you are stuck
    
//     b. Ignore that part and solve everything else

//     c. Return to the part where you are stuck and try to figure it out.

// 6. LOOK BACK AND REFACTOR
//     a. What is the time/space complexity for your solution?

//     b. Are there parts of the solution that could be more efficient?

//     c. Are there parts of the solution that could be shorter?

//     d. Consider other approaches to the problem.  Are any of them more efficient?