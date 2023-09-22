// FROM: Leetcode
// LEVEL: Easy

// PROBLEM: Given the root of a binary tree, invert the tree and return its root.
    

// CONSTRAINTS: The number of nodes in the tree is in the range [0, 100].
//              -100 <= Node.val <= 100
   
// EXAMPLES GIVEN:   Input: root = [4,2,7,1,3,6,9]     Input: root = [2,1,3]    Input: root = []    
//                   Output: [4,7,2,9,6,3,1]           Output: [2,3,1]          Output: []
//
//                  4     =>      4                           2     =>    2
//                /   \         /   \                        / \         / \
//               2     7       7     2                      1   3       3   1
//              / \   / \     / \   / \  
//             1   3 6   9   9   6 3   1
// --------------------------------------------------------------------------------------------------

// SOLVING THE PROBLEM: 

// 1.  UNDERSTAND THE PROBLEM 
//     a.  CAN I RESTATE THE PROBLEM?
//      We are given the root of a binary tree.  Invert it and return the root
        
//     b.  WHAT ARE THE INPUTS?
//      The root node of a binary tree
        
//     c.  WHAT ARE THE OUTPUTS THAT SHOULD COME FROM THE SOLUTION?
//      The root node of a binary tree

//     d.  DO I HAVE ENOUGH INFORMATION?  WHAT QUESTIONS DO I HAVE?
//      My main question is what exactly they mean by invert?  Do they want it inverted vertically or
//      horizontally?
         
//     e.  HOW SHOULD I LABEL THE IMPORTANT DATA IN THE PROBLEM?
        
// 2.  EXPLORE CONCRETE EXAMPLES
       

// 3.  BREAK THE PROBLEM DOWN STEP-BY-STEP
//     a.  Can I eliminate the circumstances where the output would automatically be false? 
//         Alternatively, what would need to be true or false in order for the output to be correct? 
//          If the root is empty, return an empty array
       
//     b. Create a step-by-step plan to solve the problem.

//      1. Create a queue
//      2. Push the root to the queue
//      3. Create a while-loop that runs while the queue is not empty
//      4. Create a variable called current and set it equal to the node at the front of the queue
//      5. If current has two child nodes, swap their positions in place
//      6. Push the two child nodes to the queue
//      7. Once all nodes have been processed (the queue is empty), return root.


// 4.  IMPLEMENT THE STEPS ABOVE, AND MAKE USE OF DEVTOOLS IF NECESSARY

// O(n*m) time - where n is the length of the input array strs and m is the length of the longest 
//               string in strs. This is because the function iterates through each character of 
//               the first string in strs (which has length m) and compares it with the corresponding
//               character in the other strings in strs (which has length n-1). Therefore, the total 
//               number of comparisons is (n-1) * m.

// O(1) space - because it only uses a constant amount of additional space to store the result and the 
//              loop variables. The function does not create any additional data structures that grow with the input size.


function invertBinaryTree(root) {
    //  If the root is empty, return null
    if (!root) return null;
    // Create a queue and push root into queue
    let queue = [root];
    // Create a while loop that runs while the queue is not empty
    while (queue.length > 0) {
        // Create variable current and set it equal to the node at the front of the queue
        let current = queue.shift();
        // If current has left and right children, 
        if (current.left && current.right) {
            // Swap their positions in place
            [current.left, current.right] = [current.right, current.left];
        }
        // Push left and right children to queue
        queue.push(current.left, current.right);
    }
    // Once all nodes in queue have been processed, return root
    return root;
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