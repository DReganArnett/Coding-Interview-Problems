// FROM: Leetcode
// LEVEL: Easy

// PROBLEM: Given the roots of two binary trees p and q, write a function to check if they are the 
//          same or not. Two binary trees are the same if they are structurally identical, and the 
//          nodes have the same value.
    

// CONSTRAINTS: The number of nodes in both trees is in the range [0, 100].
//              -104 <= Node.val <= 104
   
// EXAMPLES GIVEN:  Input: p = [1,2,3], q = [1,2,3]           1                 1
//                  Output: true                            /   \             /   \
//                                                         2     3           2     3

//                  Input: p = [1,2], q = [1, null, 2]        1                1
//                  Output: false                            /                  \
//                                                          2                    2

//                  Input: p = [1,2,1], q = [1,1,2]            1               1
//                  Output: false                            /   \           /   \
//                                                          2     1         1     2

// --------------------------------------------------------------------------------------------------

// SOLVING THE PROBLEM: 

// 1.  UNDERSTAND THE PROBLEM 
//     a.  CAN I RESTATE THE PROBLEM?
//         We are given the roots of two separate binary trees, called p and q.  We return true if 
//         the trees are the same, meaning that they are structurally the same and their nodes all 
//         have the same value.
        
//     b.  WHAT ARE THE INPUTS?
//         Two separate binary tree roots called p and q
        
//     c.  WHAT ARE THE OUTPUTS THAT SHOULD COME FROM THE SOLUTION?
//         true or false
       
//     d.  DO I HAVE ENOUGH INFORMATION?  WHAT QUESTIONS DO I HAVE?
         
//     e.  HOW SHOULD I LABEL THE IMPORTANT DATA IN THE PROBLEM?
        
// 2.  EXPLORE CONCRETE EXAMPLES
       

// 3.  BREAK THE PROBLEM DOWN STEP-BY-STEP
//     a.  Can I eliminate the circumstances where the output would automatically be false? 
//         Alternatively, what would need to be true or false in order for the output to be correct? 
//        If the two roots are not strictly equal, return false
       
//     b. Create a step-by-step plan to solve the problem.
//         I'm thinking that we could solve this by simultaneously traversing both trees (breadth-first)
//         and comparing each node. As soon as any comparison yields false, then we return false
//     1. If the two roots are not strictly equal, return false;
//     2. Create two queues, pQueue and qQueue and set them equal arrays containing their corresponding roots.
//     3. Create a while loop that runs while both queues are not empty
//     4. Create a pCurrLength and qCurrLength variables and set them equal to 0.  This is where we will store
//        the length of the queue at the beginning of each iteration of the for-loop we are about to create
//     5. Create two for-loops that run simultaneously, travesing the queues
//     6. Create pNode and qNode variables and set them equal to pQueue.shift() and qQueue.shift() respectively
//     7. If pNode !== qNode return false
//     8. If pNode.left, push pNode.left to pQueue
//     9. If qNode.right, push qNode.right to qQueue
//     10. If the while-loop finishes without returning false, return true

// 4.  IMPLEMENT THE STEPS ABOVE, AND MAKE USE OF DEVTOOLS IF NECESSARY

// This solution is awful
// O(2n) time - because we are traversing the entirety of two trees
// O(2n) space - because we created two queues that grow with the size of the trees we are traversing

function sameTree(p, q) {
   // If both p and q are null, return true
   if (!p && !q) {
    return true
    // Else if either p or q is null and the other isn't, return false
    } else if (p && !q || !p && q) return false;
    // if the values a p and q are not equal, return false
    if (p.val !== q.val) return false;
    // Create queues for both p and q
    let pQueue = [p], qQueue = [q];
    // Create a while-loop that runs while both queues are not empty
    while (pQueue.length > 0 && qQueue.length > 0) {
        // Create variables for the lengths of p and q at the start of this iteration, since the lengths will be changing
        let pCurrLength = pQueue.length, qCurrLength = qQueue.length;
        // Create two for-loops that will run through both queues simultaneously
        for (let i=0, j=0; i<pCurrLength, j<qCurrLength; i++, j++) {
            // Create variables for the nodes that we shift off of each of the queues
            let pNode = pQueue.shift(), qNode = qQueue.shift();
            // If the values of the two nodes are not equal, return false
            if( pNode.val !== qNode.val) return false;
            // If both pNode and qNode have left and right child nodes, push the child nodes to their corresponding queues
            if ((pNode.left && qNode.left) && (pNode.right && qNode.right)){
                pQueue.push(pNode.left), pQueue.push(pNode.right);
                qQueue.push(qNode.left), qQueue.push(qNode.right);
            // Else if p and q each have right child nodes only, push the child nodes to their corresponding queues
            } else if ((!pNode.left && pNode.right) && (!qNode.left && qNode.right)) {
                pQueue.push(pNode.right), qQueue.push(qNode.right);
            // else if p and q each have left child nodes only, push the child nodes to their corresponding queues
            } else if ((pNode.left && !pNode.right) && (qNode.left && !qNode.right)) {
                pQueue.push(pNode.left), qQueue.push(qNode.left);
            // Else if both p and q are leaf nodes, break out of the loop
            } else if ((!pNode.left && !qNode.left) && (!pNode.right && !qNode.right)) {
                break;
            // Else return false
            } else {
                return false
            }
        }
    }
    // If we've made it this far without returning false, then return true.
    return true;
};

// Here is recursive solution from Leetcode - much better
// O(n) time - where n is the number of nodes in the tree. This is because the function 
//             recursively traverses each node in both trees once.
// O(h) space - where h is the height of the tree. This is because the function uses the 
//              call stack to store the recursive calls, and the maximum depth of the call 
//              stack is equal to the height of the tree.

function sameTree2(p, q) {
    if (p === null && q === null) return true;
    if (p === null || q === null || p.val !== q.val) return false;
    return sameTree2(p.right, q.right) && sameTree2(p.left, q.left);
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