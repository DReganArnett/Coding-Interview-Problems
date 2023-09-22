// FROM: Leetcode
// LEVEL: Easy

// PROBLEM: Given a binary tree, find its minimum depth.  The minimum depth is the number of nodes
//          along the shortest path from the root node down to the nearest leaf node. A leaf node
//          is a node with no children.
    
// CONSTRAINTS:  The number of nodes in the tree is in the range [0, 105].
//               -1000 <= Node.val <= 1000
   
// EXAMPLES GIVEN:      INPUT: root = [3, 9, 20, null, null, 15, 17]            3
//                      OUTPUT: 2                                             /   \
//                                                                           9     20
//                                                                                /   \
//                                                                              15     17    

//                      INPUT: root = [2, null, 3, null, 4, null, 5, null, 6]        2
//                      OUTPUT: 5                                                     \
//                                                                                     3
//                                                                                      \   
//                                                                                       4
//                                                                                        \
//                                                                                         5
//                                                                                          \
//                                                                                           6  
// -------------------------------------------------------------------------------------------------------

// SOLVING THE PROBLEM: 

// 1.  UNDERSTAND THE PROBLEM 
//     a.  CAN I RESTATE THE PROBLEM?
        // Given the root of a binary tree, find the shortest path from the root node to a leaf node.
        
//     b.  WHAT ARE THE INPUTS?
        // A root node
//     c.  WHAT ARE THE OUTPUTS THAT SHOULD COME FROM THE SOLUTION?
       // The number of nodes (including the root) on the shortest path to a leaf node
//     d.  DO I HAVE ENOUGH INFORMATION?
         
//     e.  HOW SHOULD I LABEL THE IMPORTANT DATA IN THE PROBLEM?
        
// 2.  EXPLORE CONCRETE EXAMPLES
        //  INPUT: root = [10, 4, 11, null, 5, 9, 12, null, null, 8, null, null, 13
        //  OUTPUT: 3                            
        //               10
        //             /    \
        //            4      11
        //             \    /  \
        //              5  9    12
        //                /       \
        //               8         13

// 3.  BREAK THE PROBLEM DOWN STEP-BY-STEP
//     a.  Can I eliminate the circumstances where the output would automatically be false? 
//         Alternatively, what would need to be true or false in order for the output to be correct? 
        // If the root node is empty, return 0;
       
//     b. Create a step-by-step plan to solve the problem.
//        * Our task is to figure out which level contains the first leaf node.  How do we identify a leaf node? We know a leaf node is a node
//          that does not have any children.  We could use a breadth-first-search approach to traverse the tree , and search for a node with 
//          a child with a null value. Then we check if the other child also has a null value.
//          If so, then the answer would be however many levels up the root is from the leaf node, plus 1
//          (we count the leaf node).  
        
        // Set up a function with root as a parameter
        // Create a counter called levelCount that counts the level the current node is on and set it equal to 0
        // Create a queue to store the nodes to visit and call it toVisitQueue.  Set it equal to [this]
        // Set up a while loop that runs while the toVisitQueue is not empty
        // Create a variable called current and set it equal to toVisitQueue.shift() (meaning we are looking at the first value in the queue);
        // If current is null, return levelCount
        // Add current's children to the queue using a for-of loop
        // Add 1 to levelCount
        // If we reach the end of the while loop without returning, return levelCount outside of the while loop 

// 4.  IMPLEMENT THE STEPS ABOVE, AND MAKE USE OF DEVTOOLS IF NECESSARY

// O(n) time || O(n) space 
const minDepth = (root) => {
        // If the root node is empty, return 0 because the tree has no depth
        if (!root) return 0;
        // Initialize a queue to store the nodes we will need to visit and put the root in the queue because it will be the first node we visit
        const toVisitQueue = [root];
        // Create a counter to count the levels as we advance through the tree
        let level = 0;
        // While there are nodes in the queue
        while (toVisitQueue.length) {
            // Create a variable for the queue's length to use in the for loop
            const length = toVisitQueue.length;
            // Add one to the counter
            level ++;
            // loop through the 
            for (let i=0; i<length; i++) {
                // Create a variable called to store the node we are examining. 
                // Set it equal to toVisitQueue.shift() so that it is the first node in the queue
                const current = toVisitQueue.shift();
                // If current does not have any children it is a leaf node, so return level
                if (!current.left && !current.right) return level;
                // If current has a left child, add it to the queue
                if (current.left) toVisitQueue.push(current.left);
                // if current has a right child, add it to the queue
                if (current.right) toVisitQueue.push(current.right);
            }
        }
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