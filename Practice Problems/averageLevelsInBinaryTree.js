// FROM: Leetcode
// LEVEL: Easy

// PROBLEM: Given the root of a binary tree, return the average value of the nodes on each level 
//          in the form of an array.
    

// CONSTRAINTS: The number of nodes in the tree is in the range [1, 104].
//              -231 <= Node.val <= 231 - 1
   
// EXAMPLES GIVEN:   Input: root = [3, 9, 20, null, null, 15, 7]        
//                   Output: [3.00000, 14.50000, 11.00000]
//                   Explanation: The average value of nodes on level 0 is , level 1 is 14.5,
//                                and level 2 is 11, hence returning [3,14.5,11]

//                          3
//                        /   \
//                       9     20
//                            /  \
//                          15    7


//                  Input: root = [3,9,20,15,7]
//                  Output: [3.00000, 14.50000, 11.00000]

//                       3
//                     /   \
//                    9     20
//                   / \
//                 15   7

// --------------------------------------------------------------------------------------------------

// SOLVING THE PROBLEM: 

// 1.  UNDERSTAND THE PROBLEM 
//     a.  CAN I RESTATE THE PROBLEM?
//          Given the root node of a binary tree, find the average of the nodes at each level in the tree, 
//          and return them in an array
        
//     b.  WHAT ARE THE INPUTS?
//          The root node of a binary tree        

//     c.  WHAT ARE THE OUTPUTS THAT SHOULD COME FROM THE SOLUTION?
//          An array containing the averages of each of the levels of the tree

//     d.  DO I HAVE ENOUGH INFORMATION?
//         I'd ask if average refers to the mean

//     e.  HOW SHOULD I LABEL THE IMPORTANT DATA IN THE PROBLEM?
        
// 2.  EXPLORE CONCRETE EXAMPLES
       

// 3.  BREAK THE PROBLEM DOWN STEP-BY-STEP
//     a.  Can I eliminate the circumstances where the output would automatically be false? 
//         Alternatively, what would need to be true or false in order for the output to be correct? 
//          If the root is empty, return an empty array

//     b. Create a step-by-step plan to solve the problem.
//        We can solve this problem using a breadth-first traversal, and as we traverse each level, we can 
//        find the average and push it into a resuts array, which we will return once we have traversed the whole tree.

//     1. Create an array to store the averages in called results.  Leave it empty for now      
//     2. Create a queue since we will be doing a breadth-first-search
//     3. Push the root node into the queue
//     4. Create a while loop to run while the queue is not empty.  
//     5. Create a variable called nodesInLevel and set it equal to the length of the queue
//     6. Create a variable called levelSum and set it equal to 0
//     7. Use a for-loop to traverse the queue
//     8. For each iteration, create a variable called currentNode and set it equal to queue.shift()to dequeue 
//        to first item from the queue
//     9. Add the value of the node to the levelSum
//     10.If the node has a left child, push it to the queue
//     11.If the node has a right child, push it to the queue
//     12.When the for-loop finishes, create a variable called average and set it equal to levelSum/nodesInLevel
//     13.Push the average to the results array
//     14.When the while-loop finishes, return results.

// 4.  IMPLEMENT THE STEPS ABOVE, AND MAKE USE OF DEVTOOLS IF NECESSARY
// O(n) time - because we traverse the entire tree
// O(m) space - where m is the maximum number of nodes at any level in the tree. This is because we are using a 
//              queue to store the nodes at each level, and the maximum size of the queue will be the maximum 
//              number of nodes at any level.
function averageOfLevels(root) {
    // If the root is empty, return an empty array
    if (!root) return [];
    // Create an empty array called results to store the averages in
    const result = [];
    // Create an empty array called queue to store the nodes as we traverse the tree
    const queue = [root];
    // Create a while-loop that runs while the queue is not empty
    while (queue.length > 0) {
        // Create a variable called nodesInLevel and set it equal to the length of the queue, since we dequeue each
        // when we use its value to calculate the average, and we then enqueue the node's children
        const nodesInLevel = queue.length;
        // Create a variable called levelSum, and set it equal to 0
        let levelSum = 0;
        // Create a for-loop to traverse the queue
        for (let i = 0; i < nodesInLevel; i++) {
            // At each item, dequeue it and call it currentNode
            const currentNode = queue.shift()
            // Add currentNode's value to levelSum
            levelSum += currentNode.val;
            // If currentNode, has a left child, add it to the queue
            if (currentNode.left) queue.push(currentNode.left);
            // If currentNode has a right child, add it to the queue
            if(currentNode.right) queue.push(currentNode.right);
        } 
        // Calculate the average
        const average = levelSum/nodesInLevel;
        // Push the average to the results array
        result.push(average);
    }
    // return the results array
    return result;
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