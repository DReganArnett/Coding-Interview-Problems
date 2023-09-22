// FROM : Leetcode
// LEVEL: Easy

// PROBLEM: Given an integer array nums, where the elements are sorted in ascending order, convert it 
//          to a height-balanced binary search tree.
    

// CONSTRAINTS:  1 <= nums.length <= 104
//              -104 <= nums[i] <= 104
//              nums is sorted in a strictly increasing order.
   
// EXAMPLES GIVEN:          Input: nums = [-10, -3, 0, 5, 9] OR [0, -10, 5, null, -3. null, 9] 
//                          Output: [0, -3, 9, -10, null, 5]
//                          Explanantion:   0                                       0
//                                        /   \                                   /   \
//                                      -3     9                               -10     5
//                                      /     /                                   \      \
//                                   -10     5                                     -3     9

//                          Input: nums = [1, 3]
//                          Output: [3, 1]  OR [1, null, 3]
//                          Explanation :   3                                       1
//                                         /                                         \
//                                        1                                           3
// --------------------------------------------------------------------------------------------------

// SOLVING THE PROBLEM: 

// 1.  UNDERSTAND THE PROBLEM 
//     a.  CAN I RESTATE THE PROBLEM?
        
//     b.  WHAT ARE THE INPUTS?
        
//     c.  WHAT ARE THE OUTPUTS THAT SHOULD COME FROM THE SOLUTION?
       
//     d.  DO I HAVE ENOUGH INFORMATION?
         
//     e.  HOW SHOULD I LABEL THE IMPORTANT DATA IN THE PROBLEM?
        
// 2.  EXPLORE CONCRETE EXAMPLES
       

// 3.  BREAK THE PROBLEM DOWN STEP-BY-STEP
//     a.  Can I eliminate the circumstances where the output would automatically be false? 
//         Alternatively, what would need to be true or false in order for the output to be correct? 
       
//     b. Create a step-by-step plan to solve the problem.

// 4.  IMPLEMENT THE STEPS ABOVE, AND MAKE USE OF DEVTOOLS IF NECESSARY
// O(n) time - where n is the length of the input array nums. This is because for each recursive call,
//             the function divides the array in half, resulting in a total of log(n) recursive calls. 
//             In each call, a constant amount of work is done to create a new TreeNode and set its value. 
//             Therefore, the overall time complexity is O(n).

// O(log n) space - where n is the length of the input array nums. This is because for each recursive call, 
//                  a new TreeNode is created, resulting in a total of log(n) TreeNodes being created. Each 
//                  TreeNode takes up a constant amount of space. Additionally, the recursive calls use the
//                  call stack, which has a space complexity of O(log(n)) due to the depth of the recursive calls. 
//                  Therefore, the overall space complexity is O(log(n)).

function sortedArrayToBST (nums, leftPointer = Object, rightPointer = nums.length-1) {
    // If the left pointer is greater than the right pointer, return null
    if (leftPointer > rightPointer) {
        return null;
    }
    // Calculate the middle index
    const midIdx = Math.floor((leftPointer + rightPointer) / 2);
    // Create a new Tree node and set it to the value at midIdx
    const root = new TreeNode(nums[midIdx]);
    // Recursively call sortedArrayToBST on the left half of nums
    root.left = sortedArrayToBST(nums, leftPointer, midIdx-1);
    // Recursively call sortedArrayToBST on the right half of nums
    root.right = sortedArrayToBST(nums, midIdx+1, rightPointer);
    // Once all of the items in nums have been processed, return root.
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